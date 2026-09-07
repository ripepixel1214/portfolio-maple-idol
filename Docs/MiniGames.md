# 미니게임

[프로젝트](../README.md) / [전체 코드](CodeIndex.md)

## 입력과 규칙 분리

연속 입력, 타이밍 판정, 방향키 순차 입력과 드래그는 입력 처리 방식이 다르지만, 시작 준비, 시간 제한, 목표 판정과 종료 흐름은 반복됩니다. 입력, 목표, 시간 규칙과 실행 상황을 분리해 같은 실행 구조 안에서 조합하도록 구현했습니다.

| 역할 | 코드 |
| --- | --- |
| 게임별 조합 정의 | [MiniGameTable](../Source/RootDesk/MyDesk/MiniGame/Data/MiniGameTable.mlua) |
| 입력을 공통 행동으로 전달 | [MiniGameInputHubLogic](../Source/RootDesk/MyDesk/MiniGame/MiniGameInputHubLogic.mlua), [EMiniGameInputAction](../Source/RootDesk/MyDesk/MiniGame/Data/EMiniGameInputAction.mlua) |
| 입력과 목표 판정 | [MiniGameInputRule](../Source/RootDesk/MyDesk/MiniGame/Rule/MiniGameInputRule.mlua), [MiniGameObjectiveRule](../Source/RootDesk/MyDesk/MiniGame/Rule/MiniGameObjectiveRule.mlua) |
| 시간과 결과 처리 | [MiniGamePhaseTimer](../Source/RootDesk/MyDesk/MiniGame/Rule/MiniGamePhaseTimer.mlua), [MiniGameResultResolver](../Source/RootDesk/MyDesk/MiniGame/Rule/MiniGameResultResolver.mlua) |
| 규칙 실행 | [MiniGameRuleEngine](../Source/RootDesk/MyDesk/MiniGame/Rule/MiniGameRuleEngine.mlua) |

데이터 조합으로 기존 규칙을 재사용할 수 있지만, 새로운 입력이나 목표 자체가 필요하면 해당 코드도 추가해야 합니다. 모든 미니게임을 데이터만으로 만들 수 있다는 구조는 아닙니다.

## 세션과 화면의 수명

[MiniGameManager](../Source/RootDesk/MyDesk/MiniGame/MiniGameManager.mlua)에서 사용자별 세션과 준비 타임아웃, 종료를 관리하고, [MiniGamePlayLogic](../Source/RootDesk/MyDesk/MiniGame/MiniGamePlayLogic.mlua)이 규칙 실행을 연결합니다. 일반 이벤트와 공연 중 실행은 [MiniGameUIRouter](../Source/RootDesk/MyDesk/MiniGame/MiniGameUIRouter.mlua)를 통해 각각의 화면으로 연결했습니다.

- [MiniGameUILogic](../Source/RootDesk/MyDesk/MiniGame/MiniGameUILogic.mlua), [MiniGamePerformanceUILogic](../Source/RootDesk/MyDesk/MiniGame/MiniGamePerformanceUILogic.mlua): 일반 화면과 공연 화면
- [MiniGameCommandFlow](../Source/RootDesk/MyDesk/MiniGame/MiniGameCommandFlow.mlua), [MiniGameCommandBox](../Source/RootDesk/MyDesk/MiniGame/MiniGameCommandBox.mlua): 방향 입력 순서와 피드백
- [DragIndicator](../Source/RootDesk/MyDesk/MiniGame/DragIndicator.mlua): 드래그 표시
- [MiniGameResultData](../Source/RootDesk/MyDesk/MiniGame/Data/MiniGameResultData.mlua), [MiniGameStartOptions](../Source/RootDesk/MyDesk/MiniGame/Data/MiniGameStartOptions.mlua): 시작 옵션과 결과 전달 데이터

PC의 키보드와 모바일 터치 입력을 공통 행동에 연결해 규칙 코드를 공유했습니다. 기존 미니게임의 PC와 모바일 동작을 확인했습니다.

## 서버와 클라이언트의 판정 범위

`MiniGameManager.RequestCommandInput`은 실행 중인 Command 세션의 소유자, 허용 키와 입력 순번을 검사합니다. 마지막 처리 순번 이하의 입력은 무시하고, 누적 입력 이력에서 아직 처리하지 않은 구간을 순서대로 반영합니다. 현재 키와 이력이 일치하는지 확인하지만 실제 기기 입력 자체의 진위를 증명하는 검증은 아닙니다.

`RequestSubmitMiniGameResult`는 클라이언트 결과를 받는 별도 경로입니다. 실행 상태와 소유자를 검사하며, 서버 입력이 시작된 Command와 Selection은 이 경로를 거절합니다. 나머지 경로에는 클라이언트 계산 결과를 사용하는 경우가 있으므로 모든 미니게임의 결과를 서버가 재계산한다고 설명하지 않습니다.

`OnUpdate`는 준비 중인 Command 세션에 10초 타임아웃을 적용하고, 종료되거나 중단된 세션은 300초 후 테이블에서 제거합니다. `OnUserLeave`는 이탈 사용자의 활성 세션을 중단합니다. 준비 타임아웃을 모든 입력 유형에 공통 적용한 것으로 확대하지 않습니다.

## 최신 추가 기능

현재 프리셋에는 달고나 게임을 포함한 6개 정의가 있습니다. [DalgonaChallengeUILogic](../Source/RootDesk/MyDesk/MiniGame/DalgonaChallengeUILogic.mlua)와 [MiniGameDrawResultData](../Source/RootDesk/MyDesk/MiniGame/Data/MiniGameDrawResultData.mlua)를 통해 전용 화면과 결과 데이터를 확인할 수 있습니다.

달고나와 최신 변경은 서비스 미배포 상태입니다. 기존 출시 경험 및 PC, 모바일 확인 결과와 구분합니다. [MiniGameDebugLogic](../Source/RootDesk/MyDesk/MiniGame/MiniGameDebugLogic.mlua)은 개발 중 실행 진입점이며 자동 테스트 통과 보고서는 아닙니다.
