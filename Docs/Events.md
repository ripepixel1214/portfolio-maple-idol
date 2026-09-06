# NPC와 이벤트 진행

[프로젝트](../README.md) / [전체 코드](CodeIndex.md)

## NPC 요청 검증

NPC 대화는 한 번의 입력으로 끝나지 않고 대화, 선택지, 미니게임과 결과 적용으로 이어집니다. 진행 중 입력이 반복되거나 이전 단계의 요청이 늦게 도착해도 같은 상태를 다시 변경하지 않도록 서버에서 요청과 진행 상태를 확인하도록 했습니다.

[NpcEventTriggerComponent](../Source/RootDesk/MyDesk/Event/NpcEventTriggerComponent.mlua)가 상호작용을 시작하고, [NpcEventManager](../Source/RootDesk/MyDesk/Event/NpcEventManager.mlua)가 요청자, 맵, 사용자 세션과 현재 단계를 검증합니다.

- 요청 ID: 이미 처리한 요청인지 식별하는 값입니다.
- 단계 토큰: 현재 대화 단계에서 발급한 식별값으로, 이전 단계의 요청을 구분합니다.
- 세션 상태: 해당 사용자가 진행할 수 있는 상태인지 확인하고, 다음 단계 처리 중에는 같은 진행을 반복하지 않도록 합니다.

식별값만 확인하는 것이 아니라 상태 전환까지 연결해 다음 요청의 허용 여부를 결정하도록 구현했습니다. 첫 이벤트 실행 전 내부 오류에 대해서는 활동 시작에 소모한 자원을 복구하고, 이미 진행된 실행과 구분했습니다.

### 함수와 실패 조건

| 함수 | 확인할 판단 |
| --- | --- |
| `RequestBeginNpcInteraction` | 서버 요청자와 준비된 맵, NPC 후보, 진행 조건을 확인한 뒤 행동력을 차감하고 세션을 생성합니다. |
| `RequestAdvanceNpcInteraction` | 소유자, 대화 종료 대기 상태와 단계 토큰이 일치할 때만 `advancing`으로 전환하고 완료 기록과 다음 이벤트 실행으로 넘어갑니다. |
| `TryRollbackFailedSessionActionPoint` | 실행 실패 사유, 행동력 차감 여부와 실행한 이벤트 수를 확인합니다. 첫 실행 전 내부 실패만 복구하며 정상 취소에는 환불하지 않습니다. |
| `TryRecordProcessedRequestId` | 집합으로 중복을 확인하고 FIFO 목록으로 최근 32개 요청 ID만 보관합니다. 영구적인 재처리 방지 기록은 아닙니다. |

세션은 `NpcEventManager`의 활성 필드 한 묶음으로 관리합니다. 미니게임의 사용자별 세션 테이블과 같은 구조로 설명하지 않습니다. 요청 ID 보관 범위를 벗어난 재전송까지 항상 차단한다고 주장하지 않으며, 현재 세션 상태와 진행 조건 검증을 함께 사용합니다. FIFO 앞 원소 삭제에는 원소 이동 비용이 있지만 보관 개수를 32개로 제한했습니다.

## 이벤트 선택, 실행과 완료 기록

| 흐름 | 코드 |
| --- | --- |
| 활동과 상태에 따른 후보 판정 | [EventTriggerManager](../Source/RootDesk/MyDesk/Event/EventTriggerManager.mlua) |
| 대화, 선택지와 미니게임 실행 | [EventExecutor](../Source/RootDesk/MyDesk/Event/EventExecutor.mlua) |
| 실행 결과의 상태 반영 | [EventResultHandler](../Source/RootDesk/MyDesk/Event/EventResultHandler.mlua) |
| 완료 상태 관리와 저장 | [EventCompletionManager](../Source/RootDesk/MyDesk/Event/EventCompletionManager.mlua), [EventCompletionStorage](../Source/RootDesk/MyDesk/Event/EventCompletionStorage.mlua) |
| 데이터 구조 | [EventRow](../Source/RootDesk/MyDesk/Event/EventRow.mlua), [EventMaster](../Source/RootDesk/MyDesk/Event/EventMaster.mlua) |

판정 조건을 바꾸는 일과 실행 유형을 추가하는 일을 구분해 처리했습니다. 이벤트 전체를 단일 함수에서 끝내기보다 각 단계가 다음 단계에 전달할 결과를 나눠 구성했습니다. 데이터와 캐릭터 상태 등 공동 모듈의 연동도 포함됩니다.

## NPC 배치와 맵 이동

[NpcSpawnComponent](../Source/RootDesk/MyDesk/Event/NpcSpawnComponent.mlua)와 [DowntownEventContextManager](../Source/RootDesk/MyDesk/Event/DowntownEventContextManager.mlua)는 현재 맵에서 실행할 NPC 상호작용을 연결하고, [NpcTileBlockerComponent](../Source/RootDesk/MyDesk/Event/NpcTileBlockerComponent.mlua)는 접근 위치를 제어합니다.

외출 이동은 [OutdoorMapTransitionUILogic](../Source/RootDesk/MyDesk/OutdoorMapTransitionUILogic.mlua)의 선택 화면, [OutdoorMapTransitionLogic](../Source/RootDesk/MyDesk/OutdoorMapTransitionLogic.mlua)의 요청 처리, [MapTransitionHelper](../Source/RootDesk/MyDesk/Utils/MapTransitionHelper.mlua)의 전환으로 나눴습니다. 입력 화면과 실제 이동 처리를 분리한 코드입니다.
