# 소스 출처

[프로젝트](../README.md) / [전체 코드](CodeIndex.md)

원본 `D:/SecondBigbang`의 커밋 `83faf19ae75873e211ba1a81aa217e00e8e4321f`에서 발췌했습니다. 파일의 `Source/` 뒤 경로가 원본 저장소의 상대 경로입니다. 각 파일의 LF 정규화 SHA-256과 기준 커밋은 [파일별 출처 목록](SourceManifest.json)에 기록했습니다.

NPC, 미니게임, 공연과 UI 구현, 공동 모듈의 수정 및 연동을 담당했습니다. 도구의 웹 UI 작성에는 AI 보조를 사용했고 연동 규칙 설계, 검토와 게임 통합을 담당했습니다.

게임 에셋, 플랫폼 SDK, DataSet 원본 CSV와 에디터 엔티티 설정이 없는 소스 발췌본으로, 단독 실행은 지원하지 않습니다.

기준 커밋에는 서비스 미배포 변경이 포함됩니다.

| 파일 | Git 작성자 | 기여 구분 |
| --- | --- | --- |
| [RootDesk/MyDesk/Activity/ActivityHandler.mlua](../Source/RootDesk/MyDesk/Activity/ActivityHandler.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Activity/ActivityManager.mlua](../Source/RootDesk/MyDesk/Activity/ActivityManager.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Activity/ActivityMaster.mlua](../Source/RootDesk/MyDesk/Activity/ActivityMaster.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Actor/AI/ActorSpeechComponent.mlua](../Source/RootDesk/MyDesk/Actor/AI/ActorSpeechComponent.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Actor/AI/ActorSpeechMaster.mlua](../Source/RootDesk/MyDesk/Actor/AI/ActorSpeechMaster.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Actor/AI/EActorInteractionType.mlua](../Source/RootDesk/MyDesk/Actor/AI/EActorInteractionType.mlua) | HGM2695 | 보조 의존 코드 및 도구 연동 |
| [RootDesk/MyDesk/Actor/AI/StaticActorSpeechComponent.mlua](../Source/RootDesk/MyDesk/Actor/AI/StaticActorSpeechComponent.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Actor/ActorMaster.mlua](../Source/RootDesk/MyDesk/Actor/ActorMaster.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Actor/Character/CharacterBaseCostume/CharacterCostumeManager.mlua](../Source/RootDesk/MyDesk/Actor/Character/CharacterBaseCostume/CharacterCostumeManager.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Actor/Character/CharacterData.mlua](../Source/RootDesk/MyDesk/Actor/Character/CharacterData.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Actor/Character/CharacterFactory.mlua](../Source/RootDesk/MyDesk/Actor/Character/CharacterFactory.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Actor/Character/CharacterManager/CharacterManager.mlua](../Source/RootDesk/MyDesk/Actor/Character/CharacterManager/CharacterManager.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Actor/Character/CharacterManager/CharacterStatDelta.mlua](../Source/RootDesk/MyDesk/Actor/Character/CharacterManager/CharacterStatDelta.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Actor/Character/CharacterStorage.mlua](../Source/RootDesk/MyDesk/Actor/Character/CharacterStorage.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Actor/Character/CharacterType/CharacterTypeMaster.mlua](../Source/RootDesk/MyDesk/Actor/Character/CharacterType/CharacterTypeMaster.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Actor/Character/CharacterType/CharacterTypeRow.mlua](../Source/RootDesk/MyDesk/Actor/Character/CharacterType/CharacterTypeRow.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Actor/Character/Condition/ConditionMaster.mlua](../Source/RootDesk/MyDesk/Actor/Character/Condition/ConditionMaster.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Actor/Character/Condition/ECondition.mlua](../Source/RootDesk/MyDesk/Actor/Character/Condition/ECondition.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Actor/Character/ECharacterStatType.mlua](../Source/RootDesk/MyDesk/Actor/Character/ECharacterStatType.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Actor/RuntimeActorManager.mlua](../Source/RootDesk/MyDesk/Actor/RuntimeActorManager.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Dialog/DialogClosedEvent.mlua](../Source/RootDesk/MyDesk/Dialog/DialogClosedEvent.mlua) | HGM2695 | 보조 의존 코드 및 도구 연동 |
| [RootDesk/MyDesk/Dialog/DialogMaster.mlua](../Source/RootDesk/MyDesk/Dialog/DialogMaster.mlua) | ERDASH, HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Dialog/DialogParser.mlua](../Source/RootDesk/MyDesk/Dialog/DialogParser.mlua) | HGM2695 | 보조 의존 코드 및 도구 연동 |
| [RootDesk/MyDesk/Dialog/DialogPlayer.mlua](../Source/RootDesk/MyDesk/Dialog/DialogPlayer.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Dialog/DialogRichTextPlayer.mlua](../Source/RootDesk/MyDesk/Dialog/DialogRichTextPlayer.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Dialog/DialogTimedPlayer.mlua](../Source/RootDesk/MyDesk/Dialog/DialogTimedPlayer.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Dialog/DialogUILogic.mlua](../Source/RootDesk/MyDesk/Dialog/DialogUILogic.mlua) | ERDASH, HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Dialog/StaticActorDialogMaster.mlua](../Source/RootDesk/MyDesk/Dialog/StaticActorDialogMaster.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Event/ChoiceEventUILogic.mlua](../Source/RootDesk/MyDesk/Event/ChoiceEventUILogic.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Event/DowntownEventContextManager.mlua](../Source/RootDesk/MyDesk/Event/DowntownEventContextManager.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Event/EEventType.mlua](../Source/RootDesk/MyDesk/Event/EEventType.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Event/EventCompletionManager.mlua](../Source/RootDesk/MyDesk/Event/EventCompletionManager.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Event/EventCompletionStorage.mlua](../Source/RootDesk/MyDesk/Event/EventCompletionStorage.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Event/EventExecutor.mlua](../Source/RootDesk/MyDesk/Event/EventExecutor.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Event/EventMaster.mlua](../Source/RootDesk/MyDesk/Event/EventMaster.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Event/EventResultHandler.mlua](../Source/RootDesk/MyDesk/Event/EventResultHandler.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Event/EventResultMaster.mlua](../Source/RootDesk/MyDesk/Event/EventResultMaster.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Event/EventRow.mlua](../Source/RootDesk/MyDesk/Event/EventRow.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Event/EventTriggerManager.mlua](../Source/RootDesk/MyDesk/Event/EventTriggerManager.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Event/EventTriggerRow.mlua](../Source/RootDesk/MyDesk/Event/EventTriggerRow.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Event/NpcEventManager.mlua](../Source/RootDesk/MyDesk/Event/NpcEventManager.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Event/NpcEventTriggerComponent.mlua](../Source/RootDesk/MyDesk/Event/NpcEventTriggerComponent.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Event/NpcInteractionGateLogic.mlua](../Source/RootDesk/MyDesk/Event/NpcInteractionGateLogic.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Event/NpcSpawnComponent.mlua](../Source/RootDesk/MyDesk/Event/NpcSpawnComponent.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Event/NpcTileBlockerComponent.mlua](../Source/RootDesk/MyDesk/Event/NpcTileBlockerComponent.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Goal/GameGoalMaster.mlua](../Source/RootDesk/MyDesk/Goal/GameGoalMaster.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Item/ItemManager.mlua](../Source/RootDesk/MyDesk/Item/ItemManager.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Item/ItemMaster.mlua](../Source/RootDesk/MyDesk/Item/ItemMaster.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Localization/LanguageChangedEvent.mlua](../Source/RootDesk/MyDesk/Localization/LanguageChangedEvent.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Localization/LocalizationLogic.mlua](../Source/RootDesk/MyDesk/Localization/LocalizationLogic.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Localization/LocalizationMasterRefreshLogic.mlua](../Source/RootDesk/MyDesk/Localization/LocalizationMasterRefreshLogic.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Localization/LocalizedNameTagComponent.mlua](../Source/RootDesk/MyDesk/Localization/LocalizedNameTagComponent.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Localization/LocalizedTextComponent.mlua](../Source/RootDesk/MyDesk/Localization/LocalizedTextComponent.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/MiniGame/CommandInputLogic.mlua](../Source/RootDesk/MyDesk/MiniGame/CommandInputLogic.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/MiniGame/DalgonaChallengeUILogic.mlua](../Source/RootDesk/MyDesk/MiniGame/DalgonaChallengeUILogic.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/MiniGame/Data/EMiniGameContextType.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/EMiniGameContextType.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/MiniGame/Data/EMiniGameInputAction.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/EMiniGameInputAction.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/MiniGame/Data/EMiniGameInputType.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/EMiniGameInputType.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/MiniGame/Data/EMiniGameObjectiveType.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/EMiniGameObjectiveType.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/MiniGame/Data/EMiniGameResultType.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/EMiniGameResultType.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/MiniGame/Data/EMiniGameSettlementType.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/EMiniGameSettlementType.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/MiniGame/Data/EMiniGameTimeMode.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/EMiniGameTimeMode.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/MiniGame/Data/MiniGameCommandFeedbackData.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/MiniGameCommandFeedbackData.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/MiniGame/Data/MiniGameDrawResultData.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/MiniGameDrawResultData.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/MiniGame/Data/MiniGameHudState.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/MiniGameHudState.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/MiniGame/Data/MiniGameLaunchContext.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/MiniGameLaunchContext.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/MiniGame/Data/MiniGameResultData.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/MiniGameResultData.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/MiniGame/Data/MiniGameStartOptions.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/MiniGameStartOptions.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/MiniGame/Data/MiniGameTable.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/MiniGameTable.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/MiniGame/DragIndicator.mlua](../Source/RootDesk/MyDesk/MiniGame/DragIndicator.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/MiniGame/DragInputLogic.mlua](../Source/RootDesk/MyDesk/MiniGame/DragInputLogic.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/MiniGame/MashInputLogic.mlua](../Source/RootDesk/MyDesk/MiniGame/MashInputLogic.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/MiniGame/MiniGameCommandBox.mlua](../Source/RootDesk/MyDesk/MiniGame/MiniGameCommandBox.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/MiniGame/MiniGameCommandFlow.mlua](../Source/RootDesk/MyDesk/MiniGame/MiniGameCommandFlow.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/MiniGame/MiniGameDebugLogic.mlua](../Source/RootDesk/MyDesk/MiniGame/MiniGameDebugLogic.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/MiniGame/MiniGameInputEvent.mlua](../Source/RootDesk/MyDesk/MiniGame/MiniGameInputEvent.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/MiniGame/MiniGameInputHubLogic.mlua](../Source/RootDesk/MyDesk/MiniGame/MiniGameInputHubLogic.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/MiniGame/MiniGameManager.mlua](../Source/RootDesk/MyDesk/MiniGame/MiniGameManager.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/MiniGame/MiniGamePerformanceUILogic.mlua](../Source/RootDesk/MyDesk/MiniGame/MiniGamePerformanceUILogic.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/MiniGame/MiniGamePlayLogic.mlua](../Source/RootDesk/MyDesk/MiniGame/MiniGamePlayLogic.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/MiniGame/MiniGameResultEvent.mlua](../Source/RootDesk/MyDesk/MiniGame/MiniGameResultEvent.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/MiniGame/MiniGameUILogic.mlua](../Source/RootDesk/MyDesk/MiniGame/MiniGameUILogic.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/MiniGame/MiniGameUIRouter.mlua](../Source/RootDesk/MyDesk/MiniGame/MiniGameUIRouter.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/MiniGame/Rule/MiniGameInputRule.mlua](../Source/RootDesk/MyDesk/MiniGame/Rule/MiniGameInputRule.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/MiniGame/Rule/MiniGameObjectiveRule.mlua](../Source/RootDesk/MyDesk/MiniGame/Rule/MiniGameObjectiveRule.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/MiniGame/Rule/MiniGamePhaseTimer.mlua](../Source/RootDesk/MyDesk/MiniGame/Rule/MiniGamePhaseTimer.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/MiniGame/Rule/MiniGameResultResolver.mlua](../Source/RootDesk/MyDesk/MiniGame/Rule/MiniGameResultResolver.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/MiniGame/Rule/MiniGameRuleEngine.mlua](../Source/RootDesk/MyDesk/MiniGame/Rule/MiniGameRuleEngine.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/MiniGame/Rule/MiniGameRuleRegistry.mlua](../Source/RootDesk/MyDesk/MiniGame/Rule/MiniGameRuleRegistry.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/MiniGame/Rule/MiniGameSettlementRule.mlua](../Source/RootDesk/MyDesk/MiniGame/Rule/MiniGameSettlementRule.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/MiniGame/TimingInputLogic.mlua](../Source/RootDesk/MyDesk/MiniGame/TimingInputLogic.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/NewContent/NewContentManager.mlua](../Source/RootDesk/MyDesk/NewContent/NewContentManager.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/OutdoorMapPortalComponent.mlua](../Source/RootDesk/MyDesk/OutdoorMapPortalComponent.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/OutdoorMapTransitionLogic.mlua](../Source/RootDesk/MyDesk/OutdoorMapTransitionLogic.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/OutdoorMapTransitionUILogic.mlua](../Source/RootDesk/MyDesk/OutdoorMapTransitionUILogic.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Performance/AudienceJumpComponent.mlua](../Source/RootDesk/MyDesk/Performance/AudienceJumpComponent.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Performance/Data/EPerformanceCueType.mlua](../Source/RootDesk/MyDesk/Performance/Data/EPerformanceCueType.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Performance/Data/EPerformanceUIPreset.mlua](../Source/RootDesk/MyDesk/Performance/Data/EPerformanceUIPreset.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Performance/Data/PerformanceCueRow.mlua](../Source/RootDesk/MyDesk/Performance/Data/PerformanceCueRow.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Performance/Data/PerformanceRoleAssignment.mlua](../Source/RootDesk/MyDesk/Performance/Data/PerformanceRoleAssignment.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Performance/Data/PerformanceRow.mlua](../Source/RootDesk/MyDesk/Performance/Data/PerformanceRow.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Performance/LightStickSwayComponent.mlua](../Source/RootDesk/MyDesk/Performance/LightStickSwayComponent.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Performance/PerformanceConductor.mlua](../Source/RootDesk/MyDesk/Performance/PerformanceConductor.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Performance/PerformanceCostumeMaster.mlua](../Source/RootDesk/MyDesk/Performance/PerformanceCostumeMaster.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Performance/PerformanceDebugLogic.mlua](../Source/RootDesk/MyDesk/Performance/PerformanceDebugLogic.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Performance/PerformanceEffectLogic.mlua](../Source/RootDesk/MyDesk/Performance/PerformanceEffectLogic.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Performance/PerformanceMaster.mlua](../Source/RootDesk/MyDesk/Performance/PerformanceMaster.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Performance/PerformancePhotocardUILogic.mlua](../Source/RootDesk/MyDesk/Performance/PerformancePhotocardUILogic.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Performance/PerformancePostFlowLogic.mlua](../Source/RootDesk/MyDesk/Performance/PerformancePostFlowLogic.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Performance/PerformanceResultManager.mlua](../Source/RootDesk/MyDesk/Performance/PerformanceResultManager.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Performance/PerformanceScoreUILogic.mlua](../Source/RootDesk/MyDesk/Performance/PerformanceScoreUILogic.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Performance/SpotlightSwayComponent.mlua](../Source/RootDesk/MyDesk/Performance/SpotlightSwayComponent.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Player/PlayerDisableComponent.mlua](../Source/RootDesk/MyDesk/Player/PlayerDisableComponent.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/PlayerControlUIComponent.mlua](../Source/RootDesk/MyDesk/PlayerControlUIComponent.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Progress/DefaultUILogic.mlua](../Source/RootDesk/MyDesk/Progress/DefaultUILogic.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Progress/EProgressStep.mlua](../Source/RootDesk/MyDesk/Progress/EProgressStep.mlua) | HGM2695 | 보조 의존 코드 및 도구 연동 |
| [RootDesk/MyDesk/Progress/ProgressChangedEvent.mlua](../Source/RootDesk/MyDesk/Progress/ProgressChangedEvent.mlua) | HGM2695 | 보조 의존 코드 및 도구 연동 |
| [RootDesk/MyDesk/Progress/ProgressData.mlua](../Source/RootDesk/MyDesk/Progress/ProgressData.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Progress/ProgressManager.mlua](../Source/RootDesk/MyDesk/Progress/ProgressManager.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Progress/ProgressStorage.mlua](../Source/RootDesk/MyDesk/Progress/ProgressStorage.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Progress/Schedule/ScheduleProgressUILogic.mlua](../Source/RootDesk/MyDesk/Progress/Schedule/ScheduleProgressUILogic.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Progress/Schedule/ScheduleUILogic.mlua](../Source/RootDesk/MyDesk/Progress/Schedule/ScheduleUILogic.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Progress/Schedule/SettlementCardUILogic.mlua](../Source/RootDesk/MyDesk/Progress/Schedule/SettlementCardUILogic.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Progress/Schedule/WeeklyPlanData.mlua](../Source/RootDesk/MyDesk/Progress/Schedule/WeeklyPlanData.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Progress/Schedule/WeeklySequenceScheduler.mlua](../Source/RootDesk/MyDesk/Progress/Schedule/WeeklySequenceScheduler.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Resource/ResourceMaster.mlua](../Source/RootDesk/MyDesk/Resource/ResourceMaster.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Shop/ShopItemManager.mlua](../Source/RootDesk/MyDesk/Shop/ShopItemManager.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Shop/ShopItemMaster.mlua](../Source/RootDesk/MyDesk/Shop/ShopItemMaster.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Shop/ShopUILogic.mlua](../Source/RootDesk/MyDesk/Shop/ShopUILogic.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Sound/SoundManager.mlua](../Source/RootDesk/MyDesk/Sound/SoundManager.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Test/UIDebugLogic.mlua](../Source/RootDesk/MyDesk/Test/UIDebugLogic.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Tutorial/TutorialManager.mlua](../Source/RootDesk/MyDesk/Tutorial/TutorialManager.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Tutorial/TutorialStepData.mlua](../Source/RootDesk/MyDesk/Tutorial/TutorialStepData.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Tutorial/TutorialStepMaster.mlua](../Source/RootDesk/MyDesk/Tutorial/TutorialStepMaster.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Tutorial/TutorialUILogic.mlua](../Source/RootDesk/MyDesk/Tutorial/TutorialUILogic.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/UI/LoadingUILogic.mlua](../Source/RootDesk/MyDesk/UI/LoadingUILogic.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/UI/MainTitleUILogic.mlua](../Source/RootDesk/MyDesk/UI/MainTitleUILogic.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/UI/ResultPopupUILogic.mlua](../Source/RootDesk/MyDesk/UI/ResultPopupUILogic.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/UI/ScreenEffectUILogic.mlua](../Source/RootDesk/MyDesk/UI/ScreenEffectUILogic.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/UI/SmartPhoneUILogic.mlua](../Source/RootDesk/MyDesk/UI/SmartPhoneUILogic.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/UI/UIBlockerLogic.mlua](../Source/RootDesk/MyDesk/UI/UIBlockerLogic.mlua) | HGM2695 | 보조 의존 코드 및 도구 연동 |
| [RootDesk/MyDesk/UI/UIToast.mlua](../Source/RootDesk/MyDesk/UI/UIToast.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/UI/UIVisibilityChangedEvent.mlua](../Source/RootDesk/MyDesk/UI/UIVisibilityChangedEvent.mlua) | HGM2695 | 보조 의존 코드 및 도구 연동 |
| [RootDesk/MyDesk/UI/UIVisibilityNotifierLogic.mlua](../Source/RootDesk/MyDesk/UI/UIVisibilityNotifierLogic.mlua) | HGM2695 | 보조 의존 코드 및 도구 연동 |
| [RootDesk/MyDesk/Utils/AvatarActionStateUtil.mlua](../Source/RootDesk/MyDesk/Utils/AvatarActionStateUtil.mlua) | HGM2695 | 보조 의존 코드 및 도구 연동 |
| [RootDesk/MyDesk/Utils/CameraBoundsUtil.mlua](../Source/RootDesk/MyDesk/Utils/CameraBoundsUtil.mlua) | HGM2695 | 보조 의존 코드 및 도구 연동 |
| [RootDesk/MyDesk/Utils/CameraModifierComponent.mlua](../Source/RootDesk/MyDesk/Utils/CameraModifierComponent.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Utils/DataStorageErrorUtil.mlua](../Source/RootDesk/MyDesk/Utils/DataStorageErrorUtil.mlua) | HGM2695 | 보조 의존 코드 및 도구 연동 |
| [RootDesk/MyDesk/Utils/DataTableUtil.mlua](../Source/RootDesk/MyDesk/Utils/DataTableUtil.mlua) | HGM2695 | 보조 의존 코드 및 도구 연동 |
| [RootDesk/MyDesk/Utils/DynamicYSortComponent.mlua](../Source/RootDesk/MyDesk/Utils/DynamicYSortComponent.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Utils/EntityFadeComponent.mlua](../Source/RootDesk/MyDesk/Utils/EntityFadeComponent.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Utils/MapTransitionHelper.mlua](../Source/RootDesk/MyDesk/Utils/MapTransitionHelper.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Utils/MathUtil.mlua](../Source/RootDesk/MyDesk/Utils/MathUtil.mlua) | HGM2695 | 보조 의존 코드 및 도구 연동 |
| [RootDesk/MyDesk/Utils/ParallaxScrollComponent.mlua](../Source/RootDesk/MyDesk/Utils/ParallaxScrollComponent.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Utils/ScheduleStatTextUtil.mlua](../Source/RootDesk/MyDesk/Utils/ScheduleStatTextUtil.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Utils/SpinComponent.mlua](../Source/RootDesk/MyDesk/Utils/SpinComponent.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Utils/StaticYSortComponent.mlua](../Source/RootDesk/MyDesk/Utils/StaticYSortComponent.mlua) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [RootDesk/MyDesk/Utils/TemplateTextFormatter.mlua](../Source/RootDesk/MyDesk/Utils/TemplateTextFormatter.mlua) | HGM2695, Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [tools/performance-sequencer/index.html](../Source/tools/performance-sequencer/index.html) | Jinwon | 담당 구현 또는 공동 수정과 연동 |
| [tools/performance-sequencer/serve.cjs](../Source/tools/performance-sequencer/serve.cjs) | Jinwon | 보조 의존 코드 및 도구 연동 |
| [tools/performance-sequencer/start-sequencer.bat](../Source/tools/performance-sequencer/start-sequencer.bat) | Jinwon | 보조 의존 코드 및 도구 연동 |
