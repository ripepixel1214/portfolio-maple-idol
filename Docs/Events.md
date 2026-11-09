# NPC와 이벤트 진행

[프로젝트](../README.md) / [전체 코드](CodeIndex.md)

## NPC 요청 검증

NPC 대화 중 같은 버튼을 두 번 누르거나 이전 단계의 요청이 늦게 도착할 수 있습니다. 대화에서 선택지나 미니게임으로 넘어갈 때 서버가 현재 단계를 확인하게 해, 같은 이벤트가 두 번 진행되지 않도록 했습니다.

[NpcEventTriggerComponent](../Source/RootDesk/MyDesk/Event/NpcEventTriggerComponent.mlua)가 상호작용을 시작하면 [NpcEventManager](../Source/RootDesk/MyDesk/Event/NpcEventManager.mlua)가 요청자, 맵과 세션을 확인합니다.

- 요청 ID로 이미 처리한 요청을 찾습니다.
- 대화 단계마다 토큰을 발급해 이전 단계에서 온 요청을 거릅니다.
- 다음 단계를 처리 중이면 세션 상태를 확인해 같은 진행을 다시 시작하지 않습니다.

### 함수와 실패 조건

| 함수 | 서버에서 하는 일 |
| --- | --- |
| `RequestBeginNpcInteraction` | 요청자, 맵, NPC와 진행 조건이 맞으면 행동력을 차감하고 세션을 엽니다. |
| `RequestAdvanceNpcInteraction` | 세션 소유자와 단계 토큰이 맞고 대화가 끝나길 기다리던 상태이면 `advancing`으로 바꿉니다. 완료를 기록하고 다음 이벤트를 실행합니다. |
| `TryRollbackFailedSessionActionPoint` | 행동력을 차감한 뒤 첫 이벤트 실행 전에 내부 오류가 난 경우에만 돌려줍니다. 정상 취소에는 돌려주지 않습니다. |
| `TryRecordProcessedRequestId` | 집합에서 중복 ID를 찾고 FIFO 목록에 최근 32개를 보관합니다. |

`NpcEventManager`가 활성 세션의 상태를 한곳에서 관리합니다. 목록에서 오래된 요청을 지울 때 옮기는 항목은 최대 32개입니다. 목록에서 빠진 요청은 ID만으로 중복 여부를 알 수 없어, 서버에서 세션 상태와 진행 조건을 함께 확인합니다.

## 대화 분기와 응답 복구

[대화 분기를 요청](../SourceUpdates/abbb12c/RootDesk/MyDesk/Event/NpcEventManager.mlua#L975)할 때 세션 ID, 단계 토큰, 요청 ID를 같이 보냅니다. [NpcDialogGuard](../SourceUpdates/abbb12c/RootDesk/MyDesk/Event/NpcDialogGuard.mlua)가 현재 대화에 연결된 이벤트인지 확인합니다. 서버는 실제로 실행한 분기의 보상만 지급하고, 이미 지급한 보상은 건너뜁니다.

응답을 기다리는 요청은 [NpcRequestState](../SourceUpdates/abbb12c/RootDesk/MyDesk/Event/NpcRequestState.mlua)에 보관했습니다. 응답이 없으면 같은 요청을 정해 둔 횟수만큼 다시 보냅니다. 응답을 받으면 [유실된 대화나 선택지를 다시 표시](../SourceUpdates/abbb12c/RootDesk/MyDesk/Event/NpcEventManager.mlua#L1156)하고, 재시도 한도를 넘으면 세션을 닫고 조작 제한을 풉니다.

## 이벤트 선택, 실행과 완료 기록

| 흐름 | 코드 |
| --- | --- |
| 활동과 상태에 따른 후보 판정 | [EventTriggerManager](../Source/RootDesk/MyDesk/Event/EventTriggerManager.mlua) |
| 대화, 선택지와 미니게임 실행 | [EventExecutor](../Source/RootDesk/MyDesk/Event/EventExecutor.mlua) |
| 실행 결과의 상태 반영 | [EventResultHandler](../Source/RootDesk/MyDesk/Event/EventResultHandler.mlua) |
| 완료 상태 관리와 저장 | [EventCompletionManager](../Source/RootDesk/MyDesk/Event/EventCompletionManager.mlua), [EventCompletionStorage](../Source/RootDesk/MyDesk/Event/EventCompletionStorage.mlua) |
| 데이터 구조 | [EventRow](../Source/RootDesk/MyDesk/Event/EventRow.mlua), [EventMaster](../Source/RootDesk/MyDesk/Event/EventMaster.mlua) |

조건을 바꿀 때 대화나 미니게임을 여는 코드까지 손대지 않도록, 이벤트 선택과 실행, 결과 반영을 나눴습니다. 필요한 결과를 다음 단계에 넘겨 캐릭터 상태와 완료 기록에 반영합니다.

## NPC 배치와 맵 이동

[NpcSpawnComponent](../Source/RootDesk/MyDesk/Event/NpcSpawnComponent.mlua)와 [DowntownEventContextManager](../Source/RootDesk/MyDesk/Event/DowntownEventContextManager.mlua)에서 현재 맵의 NPC가 어떤 이벤트를 열지 정합니다. NPC에게 다가갈 수 있는 위치는 [NpcTileBlockerComponent](../Source/RootDesk/MyDesk/Event/NpcTileBlockerComponent.mlua)에서 정합니다.

외출 장소를 고르면 [선택 화면](../Source/RootDesk/MyDesk/OutdoorMapTransitionUILogic.mlua)이 [이동을 요청](../Source/RootDesk/MyDesk/OutdoorMapTransitionLogic.mlua)합니다. 실제 맵 이동은 [MapTransitionHelper](../Source/RootDesk/MyDesk/Utils/MapTransitionHelper.mlua)에서 처리합니다.
