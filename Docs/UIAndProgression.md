# 튜토리얼과 UI 연동

[프로젝트](../README.md) / [전체 코드](CodeIndex.md)

## 튜토리얼 시작과 완료

플레이어가 정해진 맵에 도착하고 진행 조건을 충족하면 튜토리얼이 시작됩니다. [TutorialStepMaster](../Source/RootDesk/MyDesk/Tutorial/TutorialStepMaster.mlua)와 [TutorialStepData](../Source/RootDesk/MyDesk/Tutorial/TutorialStepData.mlua)에서 단계 정보를 읽습니다. [TutorialManager](../Source/RootDesk/MyDesk/Tutorial/TutorialManager.mlua)의 `BuildRegistry`에서 이를 준비하고 `EvaluateTriggers`와 `MeetsCondition`에서 시작 조건을 확인합니다.

`StartTrigger`에서 안내를 시작해 [TutorialUILogic](../Source/RootDesk/MyDesk/Tutorial/TutorialUILogic.mlua)에 표시합니다. `OnDialogClosed`와 `OnScenarioFinished`에서 대화나 시나리오가 끝났을 때 완료를 기록합니다. 시작 때 붙인 이벤트 구독은 `OnEndPlay`와 `DisconnectDialogClosed`에서 해제합니다.

[진행 상태 변경](../Source/RootDesk/MyDesk/Progress/ProgressChangedEvent.mlua), [대화 닫기](../Source/RootDesk/MyDesk/Dialog/DialogClosedEvent.mlua), [화면 표시 변경](../Source/RootDesk/MyDesk/UI/UIVisibilityChangedEvent.mlua)은 각 콜백에 넘기는 이벤트입니다.

## 스케줄과 정산 화면

[주간 스케줄 선택](../Source/RootDesk/MyDesk/Progress/Schedule/ScheduleUILogic.mlua), [실행 중 표시](../Source/RootDesk/MyDesk/Progress/Schedule/ScheduleProgressUILogic.mlua), [정산 카드](../Source/RootDesk/MyDesk/Progress/Schedule/SettlementCardUILogic.mlua) 화면을 게임 진행에 연결했습니다.

활동과 진행 기능은 팀과 함께 개발했고, 초기 UI를 만들고 이후 화면을 연결하는 일을 맡았습니다. [WeeklyPlanData](../Source/RootDesk/MyDesk/Progress/Schedule/WeeklyPlanData.mlua)에 주간 계획을 담고 [WeeklySequenceScheduler](../Source/RootDesk/MyDesk/Progress/Schedule/WeeklySequenceScheduler.mlua)가 실행 순서를 관리합니다.

## 입력, 대화와 화면 효과

| 기능 | 코드 |
| --- | --- |
| 플레이어 조작 제한 | [PlayerDisableComponent](../Source/RootDesk/MyDesk/Player/PlayerDisableComponent.mlua), [PlayerControlUIComponent](../Source/RootDesk/MyDesk/PlayerControlUIComponent.mlua) |
| 대화 표시와 다국어 연결 | [DialogUILogic](../Source/RootDesk/MyDesk/Dialog/DialogUILogic.mlua), [DialogRichTextPlayer](../Source/RootDesk/MyDesk/Dialog/DialogRichTextPlayer.mlua) |
| 전환과 안내 화면 | [LoadingUILogic](../Source/RootDesk/MyDesk/UI/LoadingUILogic.mlua), [ScreenEffectUILogic](../Source/RootDesk/MyDesk/UI/ScreenEffectUILogic.mlua), [UIToast](../Source/RootDesk/MyDesk/UI/UIToast.mlua) |
| 소리와 페이드 효과 | [SoundManager](../Source/RootDesk/MyDesk/Sound/SoundManager.mlua), [EntityFadeComponent](../Source/RootDesk/MyDesk/Utils/EntityFadeComponent.mlua) |

`Actor`, `Item`, `Shop`, `Progress`는 팀 공동 모듈입니다. 화면에 연결하는 데 필요한 코드를 수정했습니다. [파일별 Git 기록](SourceMap.md)
