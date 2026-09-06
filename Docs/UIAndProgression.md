# 튜토리얼과 UI 연동

[프로젝트](../README.md) / [전체 코드](CodeIndex.md)

## 튜토리얼 시작과 완료

[TutorialStepMaster](../Source/RootDesk/MyDesk/Tutorial/TutorialStepMaster.mlua)와 [TutorialStepData](../Source/RootDesk/MyDesk/Tutorial/TutorialStepData.mlua)에 튜토리얼 정보를 연결하고, [TutorialManager](../Source/RootDesk/MyDesk/Tutorial/TutorialManager.mlua)에서 맵과 진행 상태를 확인해 시작하도록 구현했습니다.

대화 종료와 시나리오 완료를 진행에 연결하고, [TutorialUILogic](../Source/RootDesk/MyDesk/Tutorial/TutorialUILogic.mlua)에서 안내를 표시합니다. 이벤트 구독과 해제는 시작, 종료 수명주기에 맞춰 처리했습니다.

`TutorialManager.BuildRegistry`에서 정의를 준비하고 `EvaluateTriggers`, `MeetsCondition`에서 현재 진행과 맵 조건을 확인합니다. `StartTrigger`에서 시작한 대화의 종료는 `OnDialogClosed`, 시나리오 종료는 `OnScenarioFinished`에서 받아 완료 처리로 연결합니다. `OnEndPlay`와 `DisconnectDialogClosed`에서 구독을 해제합니다. [ProgressChangedEvent](../Source/RootDesk/MyDesk/Progress/ProgressChangedEvent.mlua), [DialogClosedEvent](../Source/RootDesk/MyDesk/Dialog/DialogClosedEvent.mlua), [UIVisibilityChangedEvent](../Source/RootDesk/MyDesk/UI/UIVisibilityChangedEvent.mlua)를 함께 수록해 콜백의 전달 데이터를 확인할 수 있게 했습니다.

## 스케줄과 정산 화면

[ScheduleUILogic](../Source/RootDesk/MyDesk/Progress/Schedule/ScheduleUILogic.mlua)의 주간 선택 화면, [ScheduleProgressUILogic](../Source/RootDesk/MyDesk/Progress/Schedule/ScheduleProgressUILogic.mlua)의 진행 표시, [SettlementCardUILogic](../Source/RootDesk/MyDesk/Progress/Schedule/SettlementCardUILogic.mlua)의 정산 표현을 연결했습니다.

[WeeklyPlanData](../Source/RootDesk/MyDesk/Progress/Schedule/WeeklyPlanData.mlua)와 [WeeklySequenceScheduler](../Source/RootDesk/MyDesk/Progress/Schedule/WeeklySequenceScheduler.mlua)는 이 화면 흐름을 따라가기 위한 데이터와 실행 코드입니다. Progress와 Activity에는 팀 공동 구현이 포함되며 초기 UI 작업과 후속 연동 기여를 구분합니다.

## 입력, 대화와 화면 효과

| 기능 | 코드 |
| --- | --- |
| 플레이어 조작 제한 | [PlayerDisableComponent](../Source/RootDesk/MyDesk/Player/PlayerDisableComponent.mlua), [PlayerControlUIComponent](../Source/RootDesk/MyDesk/PlayerControlUIComponent.mlua) |
| 대화 표시와 다국어 연결 | [DialogUILogic](../Source/RootDesk/MyDesk/Dialog/DialogUILogic.mlua), [DialogRichTextPlayer](../Source/RootDesk/MyDesk/Dialog/DialogRichTextPlayer.mlua) |
| 전환과 안내 화면 | [LoadingUILogic](../Source/RootDesk/MyDesk/UI/LoadingUILogic.mlua), [ScreenEffectUILogic](../Source/RootDesk/MyDesk/UI/ScreenEffectUILogic.mlua), [UIToast](../Source/RootDesk/MyDesk/UI/UIToast.mlua) |
| 소리와 표현 보조 | [SoundManager](../Source/RootDesk/MyDesk/Sound/SoundManager.mlua), [EntityFadeComponent](../Source/RootDesk/MyDesk/Utils/EntityFadeComponent.mlua) |

Actor, Item, Shop, Progress 등 공동 모듈도 수정과 연결에 사용한 파일을 수록했습니다. 이 파일들의 존재를 캐릭터, 아이템 또는 상점 시스템 전체의 단독 개발로 설명하지 않습니다. 구체적인 파일별 작성 이력은 [소스 출처](SourceMap.md)에서 확인할 수 있습니다.
