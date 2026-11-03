# 소스 출처

[프로젝트](../README.md) / [전체 코드](CodeIndex.md)

원본 프로젝트의 `jw/polishing`, 커밋 `15dbc768b27869b8d4baaa682e82eb93e71ec044`를 기준으로 발췌했습니다. `Source/` 뒤 경로가 원본의 상대 경로이며, 파일별 원본 해시와 작성 이력은 [파일별 출처 목록](SourceManifest.json)에 기록했습니다.

미니게임, NPC와 이벤트 연결, 공연 제작 도구, 구매 재화 저장을 담당했습니다. 공동 모듈에는 다른 팀원의 작성과 수정이 포함되며 Git 작성자 목록만으로 단독 설계나 구현을 뜻하지 않습니다. 웹 시퀀서 UI는 AI의 도움으로 구현하고 편집 기능과 데이터 규칙 설계, 검토와 게임 통합을 맡았습니다.

게임 에셋, 플랫폼 SDK, DataSet 원본과 에디터 엔티티 설정을 제외한 소스 발췌본으로 단독 실행을 지원하지 않습니다. 코드의 기준 버전과 서비스 배포 버전은 구분됩니다.

| 파일 | Git 작성자 |
| --- | --- |
| [RootDesk/MyDesk/Activity/ActivityHandler.mlua](../Source/RootDesk/MyDesk/Activity/ActivityHandler.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Activity/ActivityManager.mlua](../Source/RootDesk/MyDesk/Activity/ActivityManager.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Activity/ActivityMaster.mlua](../Source/RootDesk/MyDesk/Activity/ActivityMaster.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Activity/ActivityStorage.mlua](../Source/RootDesk/MyDesk/Activity/ActivityStorage.mlua) | HGM2695 |
| [RootDesk/MyDesk/Actor/AI/ActorSpeechComponent.mlua](../Source/RootDesk/MyDesk/Actor/AI/ActorSpeechComponent.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Actor/AI/ActorSpeechMaster.mlua](../Source/RootDesk/MyDesk/Actor/AI/ActorSpeechMaster.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Actor/AI/EActorInteractionType.mlua](../Source/RootDesk/MyDesk/Actor/AI/EActorInteractionType.mlua) | HGM2695 |
| [RootDesk/MyDesk/Actor/AI/StaticActorSpeechComponent.mlua](../Source/RootDesk/MyDesk/Actor/AI/StaticActorSpeechComponent.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Actor/ActorMaster.mlua](../Source/RootDesk/MyDesk/Actor/ActorMaster.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Actor/Character/CharacterBaseCostume/CharacterBaseCostumeMaster.mlua](../Source/RootDesk/MyDesk/Actor/Character/CharacterBaseCostume/CharacterBaseCostumeMaster.mlua) | HGM2695 |
| [RootDesk/MyDesk/Actor/Character/CharacterBaseCostume/CharacterCostumeManager.mlua](../Source/RootDesk/MyDesk/Actor/Character/CharacterBaseCostume/CharacterCostumeManager.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Actor/Character/CharacterBaseCostume/CharacterCostumeStorage.mlua](../Source/RootDesk/MyDesk/Actor/Character/CharacterBaseCostume/CharacterCostumeStorage.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Actor/Character/CharacterBaseStat/CharacterBaseStatMaster.mlua](../Source/RootDesk/MyDesk/Actor/Character/CharacterBaseStat/CharacterBaseStatMaster.mlua) | HGM2695 |
| [RootDesk/MyDesk/Actor/Character/CharacterData.mlua](../Source/RootDesk/MyDesk/Actor/Character/CharacterData.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Actor/Character/CharacterFactory.mlua](../Source/RootDesk/MyDesk/Actor/Character/CharacterFactory.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Actor/Character/CharacterManager/CharacterManager.mlua](../Source/RootDesk/MyDesk/Actor/Character/CharacterManager/CharacterManager.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Actor/Character/CharacterManager/CharacterStatDelta.mlua](../Source/RootDesk/MyDesk/Actor/Character/CharacterManager/CharacterStatDelta.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Actor/Character/CharacterStorage.mlua](../Source/RootDesk/MyDesk/Actor/Character/CharacterStorage.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Actor/Character/CharacterType/CharacterTypeMaster.mlua](../Source/RootDesk/MyDesk/Actor/Character/CharacterType/CharacterTypeMaster.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Actor/Character/CharacterType/CharacterTypeRow.mlua](../Source/RootDesk/MyDesk/Actor/Character/CharacterType/CharacterTypeRow.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Actor/Character/Condition/ConditionMaster.mlua](../Source/RootDesk/MyDesk/Actor/Character/Condition/ConditionMaster.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Actor/Character/Condition/ECondition.mlua](../Source/RootDesk/MyDesk/Actor/Character/Condition/ECondition.mlua) | Jinwon |
| [RootDesk/MyDesk/Actor/Character/ECharacterStatType.mlua](../Source/RootDesk/MyDesk/Actor/Character/ECharacterStatType.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Actor/Character/Intimacy/IntimacyLevelMaster.mlua](../Source/RootDesk/MyDesk/Actor/Character/Intimacy/IntimacyLevelMaster.mlua) | HGM2695 |
| [RootDesk/MyDesk/Actor/Character/StatDefinitionModel.mlua](../Source/RootDesk/MyDesk/Actor/Character/StatDefinitionModel.mlua) | HGM2695 |
| [RootDesk/MyDesk/Actor/RuntimeActorManager.mlua](../Source/RootDesk/MyDesk/Actor/RuntimeActorManager.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Actor/RuntimeActorStorage.mlua](../Source/RootDesk/MyDesk/Actor/RuntimeActorStorage.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Currency/DiamondWalletChangedEvent.mlua](../Source/RootDesk/MyDesk/Currency/DiamondWalletChangedEvent.mlua) | Jinwon |
| [RootDesk/MyDesk/Currency/DiamondWalletData.mlua](../Source/RootDesk/MyDesk/Currency/DiamondWalletData.mlua) | Jinwon |
| [RootDesk/MyDesk/Currency/DiamondWalletLogic.mlua](../Source/RootDesk/MyDesk/Currency/DiamondWalletLogic.mlua) | Jinwon |
| [RootDesk/MyDesk/Currency/DiamondWalletOperationData.mlua](../Source/RootDesk/MyDesk/Currency/DiamondWalletOperationData.mlua) | Jinwon |
| [RootDesk/MyDesk/Currency/DiamondWalletResultData.mlua](../Source/RootDesk/MyDesk/Currency/DiamondWalletResultData.mlua) | Jinwon |
| [RootDesk/MyDesk/Currency/DiamondWalletStorage.mlua](../Source/RootDesk/MyDesk/Currency/DiamondWalletStorage.mlua) | Jinwon |
| [RootDesk/MyDesk/Currency/Testing/DiamondWalletVerificationLogic.mlua](../Source/RootDesk/MyDesk/Currency/Testing/DiamondWalletVerificationLogic.mlua) | Jinwon |
| [RootDesk/MyDesk/Dialog/DialogClosedEvent.mlua](../Source/RootDesk/MyDesk/Dialog/DialogClosedEvent.mlua) | HGM2695 |
| [RootDesk/MyDesk/Dialog/DialogMaster.mlua](../Source/RootDesk/MyDesk/Dialog/DialogMaster.mlua) | ERDASH, HGM2695, Jinwon |
| [RootDesk/MyDesk/Dialog/DialogOptionMaster.mlua](../Source/RootDesk/MyDesk/Dialog/DialogOptionMaster.mlua) | HGM2695 |
| [RootDesk/MyDesk/Dialog/DialogParser.mlua](../Source/RootDesk/MyDesk/Dialog/DialogParser.mlua) | HGM2695 |
| [RootDesk/MyDesk/Dialog/DialogPlayer.mlua](../Source/RootDesk/MyDesk/Dialog/DialogPlayer.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Dialog/DialogRichTextPlayer.mlua](../Source/RootDesk/MyDesk/Dialog/DialogRichTextPlayer.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Dialog/DialogTimedPlayer.mlua](../Source/RootDesk/MyDesk/Dialog/DialogTimedPlayer.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Dialog/DialogUILogic.mlua](../Source/RootDesk/MyDesk/Dialog/DialogUILogic.mlua) | ERDASH, HGM2695, Jinwon |
| [RootDesk/MyDesk/Dialog/IntimacyEpisodeMaster.mlua](../Source/RootDesk/MyDesk/Dialog/IntimacyEpisodeMaster.mlua) | HGM2695 |
| [RootDesk/MyDesk/Dialog/StaticActorDialogMaster.mlua](../Source/RootDesk/MyDesk/Dialog/StaticActorDialogMaster.mlua) | Jinwon |
| [RootDesk/MyDesk/Event/ChoiceEventUILogic.mlua](../Source/RootDesk/MyDesk/Event/ChoiceEventUILogic.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Event/DowntownEventContextManager.mlua](../Source/RootDesk/MyDesk/Event/DowntownEventContextManager.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Event/EEventType.mlua](../Source/RootDesk/MyDesk/Event/EEventType.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Event/EventCompletionManager.mlua](../Source/RootDesk/MyDesk/Event/EventCompletionManager.mlua) | Jinwon |
| [RootDesk/MyDesk/Event/EventCompletionStorage.mlua](../Source/RootDesk/MyDesk/Event/EventCompletionStorage.mlua) | Jinwon |
| [RootDesk/MyDesk/Event/EventExecutor.mlua](../Source/RootDesk/MyDesk/Event/EventExecutor.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Event/EventMaster.mlua](../Source/RootDesk/MyDesk/Event/EventMaster.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Event/EventResultHandler.mlua](../Source/RootDesk/MyDesk/Event/EventResultHandler.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Event/EventResultMaster.mlua](../Source/RootDesk/MyDesk/Event/EventResultMaster.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Event/EventRow.mlua](../Source/RootDesk/MyDesk/Event/EventRow.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Event/EventTriggerManager.mlua](../Source/RootDesk/MyDesk/Event/EventTriggerManager.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Event/EventTriggerRow.mlua](../Source/RootDesk/MyDesk/Event/EventTriggerRow.mlua) | Jinwon |
| [RootDesk/MyDesk/Event/NpcEventManager.mlua](../Source/RootDesk/MyDesk/Event/NpcEventManager.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Event/NpcEventTriggerComponent.mlua](../Source/RootDesk/MyDesk/Event/NpcEventTriggerComponent.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Event/NpcInteractionGateLogic.mlua](../Source/RootDesk/MyDesk/Event/NpcInteractionGateLogic.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Event/NpcSpawnComponent.mlua](../Source/RootDesk/MyDesk/Event/NpcSpawnComponent.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Event/NpcTileBlockerComponent.mlua](../Source/RootDesk/MyDesk/Event/NpcTileBlockerComponent.mlua) | Jinwon |
| [RootDesk/MyDesk/Item/ItemManager.mlua](../Source/RootDesk/MyDesk/Item/ItemManager.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Item/ItemMaster.mlua](../Source/RootDesk/MyDesk/Item/ItemMaster.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Item/ItemStorage.mlua](../Source/RootDesk/MyDesk/Item/ItemStorage.mlua) | HGM2695 |
| [RootDesk/MyDesk/Item/PhotoCardMaster.mlua](../Source/RootDesk/MyDesk/Item/PhotoCardMaster.mlua) | HGM2695 |
| [RootDesk/MyDesk/Localization/LocalizedNameTagComponent.mlua](../Source/RootDesk/MyDesk/Localization/LocalizedNameTagComponent.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/MiniGame/Client/MiniGameClientBehavior.mlua](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameClientBehavior.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Client/MiniGameClientHandlerRegistry.mlua](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameClientHandlerRegistry.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Client/MiniGameClientModel.mlua](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameClientModel.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/MiniGame/Client/MiniGameCommandClientHandler.mlua](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameCommandClientHandler.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Client/MiniGameCountClientHandler.mlua](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameCountClientHandler.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Client/MiniGameDalgonaClientHandler.mlua](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameDalgonaClientHandler.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Client/MiniGameDalgonaModel.mlua](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameDalgonaModel.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Client/MiniGameDalgonaPresenter.mlua](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameDalgonaPresenter.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Client/MiniGameDalgonaStageView.mlua](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameDalgonaStageView.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Client/MiniGameFishingClientHandler.mlua](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameFishingClientHandler.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Client/MiniGameFishingModel.mlua](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameFishingModel.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Client/MiniGameFishingPresenter.mlua](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameFishingPresenter.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Client/MiniGameFishingStageView.mlua](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameFishingStageView.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Client/MiniGameFishingVisual.mlua](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameFishingVisual.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Client/MiniGameFishingVisualPart.mlua](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameFishingVisualPart.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Client/MiniGameGaugeClientHandler.mlua](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameGaugeClientHandler.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Client/MiniGameLuckyCubeClientHandler.mlua](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameLuckyCubeClientHandler.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Client/MiniGameLuckyCubeModel.mlua](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameLuckyCubeModel.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Client/MiniGameLuckyCubePresenter.mlua](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameLuckyCubePresenter.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Client/MiniGameLuckyCubeStageView.mlua](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameLuckyCubeStageView.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Client/MiniGameShapeClientHandler.mlua](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameShapeClientHandler.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/MiniGame/Client/MiniGameSnailLadderClientHandler.mlua](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameSnailLadderClientHandler.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Client/MiniGameSnailLadderModel.mlua](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameSnailLadderModel.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Client/MiniGameSnailLadderPresenter.mlua](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameSnailLadderPresenter.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Client/MiniGameSnailLadderStageView.mlua](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameSnailLadderStageView.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Client/MiniGameTimingClientHandler.mlua](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameTimingClientHandler.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/MiniGame/Client/MiniGameTrainingStageView.mlua](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameTrainingStageView.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Client/MiniGameViewRegistry.mlua](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameViewRegistry.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/CommandInputLogic.mlua](../Source/RootDesk/MyDesk/MiniGame/CommandInputLogic.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Data/EMiniGameContextType.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/EMiniGameContextType.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Data/EMiniGameInputAction.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/EMiniGameInputAction.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Data/EMiniGameInputType.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/EMiniGameInputType.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Data/EMiniGameKind.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/EMiniGameKind.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Data/EMiniGameObjectiveType.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/EMiniGameObjectiveType.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Data/EMiniGameResultType.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/EMiniGameResultType.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Data/EMiniGameSettlementType.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/EMiniGameSettlementType.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Data/EMiniGameTimeMode.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/EMiniGameTimeMode.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Data/FishingRewardData.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/FishingRewardData.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Data/MiniGameCommandFeedbackData.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/MiniGameCommandFeedbackData.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Data/MiniGameCommandSessionState.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/MiniGameCommandSessionState.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Data/MiniGameDalgonaSessionState.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/MiniGameDalgonaSessionState.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Data/MiniGameDalgonaViewState.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/MiniGameDalgonaViewState.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Data/MiniGameDrawResultData.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/MiniGameDrawResultData.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Data/MiniGameFishingInputData.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/MiniGameFishingInputData.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Data/MiniGameFishingState.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/MiniGameFishingState.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Data/MiniGameFishingViewState.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/MiniGameFishingViewState.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Data/MiniGameHudState.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/MiniGameHudState.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Data/MiniGameInputProof.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/MiniGameInputProof.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Data/MiniGameLaunchContext.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/MiniGameLaunchContext.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Data/MiniGameLuckyCubeState.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/MiniGameLuckyCubeState.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Data/MiniGameResultData.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/MiniGameResultData.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Data/MiniGameSessionData.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/MiniGameSessionData.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Data/MiniGameSnailLadderState.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/MiniGameSnailLadderState.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Data/MiniGameStartOptions.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/MiniGameStartOptions.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Data/MiniGameTable.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/MiniGameTable.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Data/MiniGameViewContext.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/MiniGameViewContext.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/DragIndicator.mlua](../Source/RootDesk/MyDesk/MiniGame/DragIndicator.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/DragInputLogic.mlua](../Source/RootDesk/MyDesk/MiniGame/DragInputLogic.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/MashInputLogic.mlua](../Source/RootDesk/MyDesk/MiniGame/MashInputLogic.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/MiniGameCommandBox.mlua](../Source/RootDesk/MyDesk/MiniGame/MiniGameCommandBox.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/MiniGameCommandFlow.mlua](../Source/RootDesk/MyDesk/MiniGame/MiniGameCommandFlow.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/MiniGameDebugLogic.mlua](../Source/RootDesk/MyDesk/MiniGame/MiniGameDebugLogic.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/MiniGameInputEvent.mlua](../Source/RootDesk/MyDesk/MiniGame/MiniGameInputEvent.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/MiniGameInputHubLogic.mlua](../Source/RootDesk/MyDesk/MiniGame/MiniGameInputHubLogic.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/MiniGameManager.mlua](../Source/RootDesk/MyDesk/MiniGame/MiniGameManager.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/MiniGame/MiniGamePerformanceUILogic.mlua](../Source/RootDesk/MyDesk/MiniGame/MiniGamePerformanceUILogic.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/MiniGamePlayLogic.mlua](../Source/RootDesk/MyDesk/MiniGame/MiniGamePlayLogic.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/MiniGame/MiniGameResultEvent.mlua](../Source/RootDesk/MyDesk/MiniGame/MiniGameResultEvent.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/MiniGame/MiniGameUIRouter.mlua](../Source/RootDesk/MyDesk/MiniGame/MiniGameUIRouter.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Rule/MiniGameFishingRule.mlua](../Source/RootDesk/MyDesk/MiniGame/Rule/MiniGameFishingRule.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Rule/MiniGameInputRule.mlua](../Source/RootDesk/MyDesk/MiniGame/Rule/MiniGameInputRule.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Rule/MiniGameLuckyCubeRule.mlua](../Source/RootDesk/MyDesk/MiniGame/Rule/MiniGameLuckyCubeRule.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Rule/MiniGameObjectiveRule.mlua](../Source/RootDesk/MyDesk/MiniGame/Rule/MiniGameObjectiveRule.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Rule/MiniGamePhaseTimer.mlua](../Source/RootDesk/MyDesk/MiniGame/Rule/MiniGamePhaseTimer.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Rule/MiniGameResultResolver.mlua](../Source/RootDesk/MyDesk/MiniGame/Rule/MiniGameResultResolver.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Rule/MiniGameRuleEngine.mlua](../Source/RootDesk/MyDesk/MiniGame/Rule/MiniGameRuleEngine.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Rule/MiniGameRuleRegistry.mlua](../Source/RootDesk/MyDesk/MiniGame/Rule/MiniGameRuleRegistry.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Rule/MiniGameSettlementRule.mlua](../Source/RootDesk/MyDesk/MiniGame/Rule/MiniGameSettlementRule.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Rule/MiniGameSnailLadderRule.mlua](../Source/RootDesk/MyDesk/MiniGame/Rule/MiniGameSnailLadderRule.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Server/FishingRewardLogic.mlua](../Source/RootDesk/MyDesk/MiniGame/Server/FishingRewardLogic.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Server/FishingRewardStorage.mlua](../Source/RootDesk/MyDesk/MiniGame/Server/FishingRewardStorage.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Server/MiniGameClientResultServerHandler.mlua](../Source/RootDesk/MyDesk/MiniGame/Server/MiniGameClientResultServerHandler.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Server/MiniGameCommandServerHandler.mlua](../Source/RootDesk/MyDesk/MiniGame/Server/MiniGameCommandServerHandler.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Server/MiniGameContentService.mlua](../Source/RootDesk/MyDesk/MiniGame/Server/MiniGameContentService.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Server/MiniGameDalgonaServerHandler.mlua](../Source/RootDesk/MyDesk/MiniGame/Server/MiniGameDalgonaServerHandler.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Server/MiniGameFishingServerHandler.mlua](../Source/RootDesk/MyDesk/MiniGame/Server/MiniGameFishingServerHandler.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Server/MiniGameLuckyCubeServerHandler.mlua](../Source/RootDesk/MyDesk/MiniGame/Server/MiniGameLuckyCubeServerHandler.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Server/MiniGameServerHandlerRegistry.mlua](../Source/RootDesk/MyDesk/MiniGame/Server/MiniGameServerHandlerRegistry.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Server/MiniGameSessionService.mlua](../Source/RootDesk/MyDesk/MiniGame/Server/MiniGameSessionService.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/Server/MiniGameSnailLadderServerHandler.mlua](../Source/RootDesk/MyDesk/MiniGame/Server/MiniGameSnailLadderServerHandler.mlua) | Jinwon |
| [RootDesk/MyDesk/MiniGame/TimingInputLogic.mlua](../Source/RootDesk/MyDesk/MiniGame/TimingInputLogic.mlua) | Jinwon |
| [RootDesk/MyDesk/NewContent/NewContentManager.mlua](../Source/RootDesk/MyDesk/NewContent/NewContentManager.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/NewContent/NewContentStorage.mlua](../Source/RootDesk/MyDesk/NewContent/NewContentStorage.mlua) | HGM2695 |
| [RootDesk/MyDesk/OutdoorMapPortalComponent.mlua](../Source/RootDesk/MyDesk/OutdoorMapPortalComponent.mlua) | Jinwon |
| [RootDesk/MyDesk/OutdoorMapTransitionLogic.mlua](../Source/RootDesk/MyDesk/OutdoorMapTransitionLogic.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/OutdoorMapTransitionUILogic.mlua](../Source/RootDesk/MyDesk/OutdoorMapTransitionUILogic.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Performance/AudienceJumpComponent.mlua](../Source/RootDesk/MyDesk/Performance/AudienceJumpComponent.mlua) | Jinwon |
| [RootDesk/MyDesk/Performance/Data/EPerformanceCueType.mlua](../Source/RootDesk/MyDesk/Performance/Data/EPerformanceCueType.mlua) | Jinwon |
| [RootDesk/MyDesk/Performance/Data/EPerformanceUIPreset.mlua](../Source/RootDesk/MyDesk/Performance/Data/EPerformanceUIPreset.mlua) | Jinwon |
| [RootDesk/MyDesk/Performance/Data/PerformanceCueRow.mlua](../Source/RootDesk/MyDesk/Performance/Data/PerformanceCueRow.mlua) | Jinwon |
| [RootDesk/MyDesk/Performance/Data/PerformanceRoleAssignment.mlua](../Source/RootDesk/MyDesk/Performance/Data/PerformanceRoleAssignment.mlua) | Jinwon |
| [RootDesk/MyDesk/Performance/Data/PerformanceRow.mlua](../Source/RootDesk/MyDesk/Performance/Data/PerformanceRow.mlua) | Jinwon |
| [RootDesk/MyDesk/Performance/LightStickSwayComponent.mlua](../Source/RootDesk/MyDesk/Performance/LightStickSwayComponent.mlua) | Jinwon |
| [RootDesk/MyDesk/Performance/PerformanceConductor.mlua](../Source/RootDesk/MyDesk/Performance/PerformanceConductor.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Performance/PerformanceCostumeMaster.mlua](../Source/RootDesk/MyDesk/Performance/PerformanceCostumeMaster.mlua) | Jinwon |
| [RootDesk/MyDesk/Performance/PerformanceDebugLogic.mlua](../Source/RootDesk/MyDesk/Performance/PerformanceDebugLogic.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Performance/PerformanceEffectLogic.mlua](../Source/RootDesk/MyDesk/Performance/PerformanceEffectLogic.mlua) | Jinwon |
| [RootDesk/MyDesk/Performance/PerformanceMaster.mlua](../Source/RootDesk/MyDesk/Performance/PerformanceMaster.mlua) | Jinwon |
| [RootDesk/MyDesk/Performance/PerformancePhotocardUILogic.mlua](../Source/RootDesk/MyDesk/Performance/PerformancePhotocardUILogic.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Performance/PerformancePostFlowLogic.mlua](../Source/RootDesk/MyDesk/Performance/PerformancePostFlowLogic.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Performance/PerformanceResultManager.mlua](../Source/RootDesk/MyDesk/Performance/PerformanceResultManager.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Performance/PerformanceScoreUILogic.mlua](../Source/RootDesk/MyDesk/Performance/PerformanceScoreUILogic.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Performance/SpotlightSwayComponent.mlua](../Source/RootDesk/MyDesk/Performance/SpotlightSwayComponent.mlua) | Jinwon |
| [RootDesk/MyDesk/Player/PlayerDisableComponent.mlua](../Source/RootDesk/MyDesk/Player/PlayerDisableComponent.mlua) | Jinwon |
| [RootDesk/MyDesk/PlayerControlUIComponent.mlua](../Source/RootDesk/MyDesk/PlayerControlUIComponent.mlua) | Jinwon |
| [RootDesk/MyDesk/Progress/DefaultUILogic.mlua](../Source/RootDesk/MyDesk/Progress/DefaultUILogic.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Progress/EProgressStep.mlua](../Source/RootDesk/MyDesk/Progress/EProgressStep.mlua) | HGM2695 |
| [RootDesk/MyDesk/Progress/ProgressChangedEvent.mlua](../Source/RootDesk/MyDesk/Progress/ProgressChangedEvent.mlua) | HGM2695 |
| [RootDesk/MyDesk/Progress/ProgressData.mlua](../Source/RootDesk/MyDesk/Progress/ProgressData.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Progress/ProgressManager.mlua](../Source/RootDesk/MyDesk/Progress/ProgressManager.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Progress/ProgressStorage.mlua](../Source/RootDesk/MyDesk/Progress/ProgressStorage.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Progress/Schedule/ScheduleProgressUILogic.mlua](../Source/RootDesk/MyDesk/Progress/Schedule/ScheduleProgressUILogic.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Progress/Schedule/ScheduleUILogic.mlua](../Source/RootDesk/MyDesk/Progress/Schedule/ScheduleUILogic.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Progress/Schedule/SettlementCardUILogic.mlua](../Source/RootDesk/MyDesk/Progress/Schedule/SettlementCardUILogic.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Progress/Schedule/WeeklyPlanData.mlua](../Source/RootDesk/MyDesk/Progress/Schedule/WeeklyPlanData.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Progress/Schedule/WeeklySequenceScheduler.mlua](../Source/RootDesk/MyDesk/Progress/Schedule/WeeklySequenceScheduler.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Progress/StageSelect/CharacterSelectUILogic.mlua](../Source/RootDesk/MyDesk/Progress/StageSelect/CharacterSelectUILogic.mlua) | HGM2695 |
| [RootDesk/MyDesk/Progress/StageSelect/StageMaster.mlua](../Source/RootDesk/MyDesk/Progress/StageSelect/StageMaster.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Progress/StageSelect/StageSelectUILogic.mlua](../Source/RootDesk/MyDesk/Progress/StageSelect/StageSelectUILogic.mlua) | HGM2695 |
| [RootDesk/MyDesk/Progress/StageSelect/StageStartUILogic.mlua](../Source/RootDesk/MyDesk/Progress/StageSelect/StageStartUILogic.mlua) | HGM2695 |
| [RootDesk/MyDesk/Progress/StepEntryLogic.mlua](../Source/RootDesk/MyDesk/Progress/StepEntryLogic.mlua) | HGM2695 |
| [RootDesk/MyDesk/Resource/ImageResourceMetaMaster.mlua](../Source/RootDesk/MyDesk/Resource/ImageResourceMetaMaster.mlua) | HGM2695 |
| [RootDesk/MyDesk/Resource/ResourceMaster.mlua](../Source/RootDesk/MyDesk/Resource/ResourceMaster.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Shop/DiamondPackageData.mlua](../Source/RootDesk/MyDesk/Shop/DiamondPackageData.mlua) | Jinwon |
| [RootDesk/MyDesk/Shop/PurchaseUILogic.mlua](../Source/RootDesk/MyDesk/Shop/PurchaseUILogic.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Shop/ShopItemChangedEvent.mlua](../Source/RootDesk/MyDesk/Shop/ShopItemChangedEvent.mlua) | HGM2695 |
| [RootDesk/MyDesk/Shop/ShopItemManager.mlua](../Source/RootDesk/MyDesk/Shop/ShopItemManager.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Shop/ShopItemMaster.mlua](../Source/RootDesk/MyDesk/Shop/ShopItemMaster.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Shop/ShopItemRow.mlua](../Source/RootDesk/MyDesk/Shop/ShopItemRow.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Shop/ShopItemStorage.mlua](../Source/RootDesk/MyDesk/Shop/ShopItemStorage.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Shop/ShopUILogic.mlua](../Source/RootDesk/MyDesk/Shop/ShopUILogic.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Shop/WorldShopPurchaseLogic.mlua](../Source/RootDesk/MyDesk/Shop/WorldShopPurchaseLogic.mlua) | Jinwon |
| [RootDesk/MyDesk/Shop/WorldShopPurchaseRequestEvent.mlua](../Source/RootDesk/MyDesk/Shop/WorldShopPurchaseRequestEvent.mlua) | Jinwon |
| [RootDesk/MyDesk/Sound/SoundManager.mlua](../Source/RootDesk/MyDesk/Sound/SoundManager.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Sound/SoundStorage.mlua](../Source/RootDesk/MyDesk/Sound/SoundStorage.mlua) | HGM2695 |
| [RootDesk/MyDesk/TagTraining/TagTrainingManager.mlua](../Source/RootDesk/MyDesk/TagTraining/TagTrainingManager.mlua) | HGM2695 |
| [RootDesk/MyDesk/TagTraining/TagTrainingRules.mlua](../Source/RootDesk/MyDesk/TagTraining/TagTrainingRules.mlua) | HGM2695 |
| [RootDesk/MyDesk/TagTraining/TagTrainingUILogic.mlua](../Source/RootDesk/MyDesk/TagTraining/TagTrainingUILogic.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/TagTraining/TrainingCardStorage.mlua](../Source/RootDesk/MyDesk/TagTraining/TrainingCardStorage.mlua) | HGM2695 |
| [RootDesk/MyDesk/TagTraining/TrainingDataMaster.mlua](../Source/RootDesk/MyDesk/TagTraining/TrainingDataMaster.mlua) | HGM2695 |
| [RootDesk/MyDesk/Test/UIDebugLogic.mlua](../Source/RootDesk/MyDesk/Test/UIDebugLogic.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Tutorial/TutorialManager.mlua](../Source/RootDesk/MyDesk/Tutorial/TutorialManager.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Tutorial/TutorialStepData.mlua](../Source/RootDesk/MyDesk/Tutorial/TutorialStepData.mlua) | Jinwon |
| [RootDesk/MyDesk/Tutorial/TutorialStepMaster.mlua](../Source/RootDesk/MyDesk/Tutorial/TutorialStepMaster.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Tutorial/TutorialUILogic.mlua](../Source/RootDesk/MyDesk/Tutorial/TutorialUILogic.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/UI/LoadingUILogic.mlua](../Source/RootDesk/MyDesk/UI/LoadingUILogic.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/UI/LocalizedFormatTextComponent.mlua](../Source/RootDesk/MyDesk/UI/LocalizedFormatTextComponent.mlua) | HGM2695 |
| [RootDesk/MyDesk/UI/MainTitleUILogic.mlua](../Source/RootDesk/MyDesk/UI/MainTitleUILogic.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/UI/ResultPopupUILogic.mlua](../Source/RootDesk/MyDesk/UI/ResultPopupUILogic.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/UI/ScreenEffectUILogic.mlua](../Source/RootDesk/MyDesk/UI/ScreenEffectUILogic.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/UI/SmartPhone/SmartPhoneAlbumAppLogic.mlua](../Source/RootDesk/MyDesk/UI/SmartPhone/SmartPhoneAlbumAppLogic.mlua) | HGM2695 |
| [RootDesk/MyDesk/UI/SmartPhone/SmartPhoneCostumeAppLogic.mlua](../Source/RootDesk/MyDesk/UI/SmartPhone/SmartPhoneCostumeAppLogic.mlua) | HGM2695 |
| [RootDesk/MyDesk/UI/SmartPhone/SmartPhoneIdolAppLogic.mlua](../Source/RootDesk/MyDesk/UI/SmartPhone/SmartPhoneIdolAppLogic.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/UI/SmartPhone/SmartPhoneStatAppLogic.mlua](../Source/RootDesk/MyDesk/UI/SmartPhone/SmartPhoneStatAppLogic.mlua) | HGM2695 |
| [RootDesk/MyDesk/UI/SmartPhone/SmartPhoneUIUtil.mlua](../Source/RootDesk/MyDesk/UI/SmartPhone/SmartPhoneUIUtil.mlua) | HGM2695 |
| [RootDesk/MyDesk/UI/SmartPhoneUILogic.mlua](../Source/RootDesk/MyDesk/UI/SmartPhoneUILogic.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/UI/UIBlockerLogic.mlua](../Source/RootDesk/MyDesk/UI/UIBlockerLogic.mlua) | HGM2695 |
| [RootDesk/MyDesk/UI/UIToast.mlua](../Source/RootDesk/MyDesk/UI/UIToast.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/UI/UITween.mlua](../Source/RootDesk/MyDesk/UI/UITween.mlua) | Jinwon |
| [RootDesk/MyDesk/UI/UIVisibilityChangedEvent.mlua](../Source/RootDesk/MyDesk/UI/UIVisibilityChangedEvent.mlua) | HGM2695 |
| [RootDesk/MyDesk/UI/UIVisibilityNotifierLogic.mlua](../Source/RootDesk/MyDesk/UI/UIVisibilityNotifierLogic.mlua) | HGM2695 |
| [RootDesk/MyDesk/UserDataManager.mlua](../Source/RootDesk/MyDesk/UserDataManager.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Utils/AvatarActionStateUtil.mlua](../Source/RootDesk/MyDesk/Utils/AvatarActionStateUtil.mlua) | HGM2695 |
| [RootDesk/MyDesk/Utils/CameraBoundsUtil.mlua](../Source/RootDesk/MyDesk/Utils/CameraBoundsUtil.mlua) | HGM2695 |
| [RootDesk/MyDesk/Utils/CameraModifierComponent.mlua](../Source/RootDesk/MyDesk/Utils/CameraModifierComponent.mlua) | Jinwon |
| [RootDesk/MyDesk/Utils/DataStorageErrorUtil.mlua](../Source/RootDesk/MyDesk/Utils/DataStorageErrorUtil.mlua) | HGM2695 |
| [RootDesk/MyDesk/Utils/DataTableUtil.mlua](../Source/RootDesk/MyDesk/Utils/DataTableUtil.mlua) | HGM2695 |
| [RootDesk/MyDesk/Utils/DynamicYSortComponent.mlua](../Source/RootDesk/MyDesk/Utils/DynamicYSortComponent.mlua) | Jinwon |
| [RootDesk/MyDesk/Utils/EntityFadeComponent.mlua](../Source/RootDesk/MyDesk/Utils/EntityFadeComponent.mlua) | Jinwon |
| [RootDesk/MyDesk/Utils/LocaleTextUtil.mlua](../Source/RootDesk/MyDesk/Utils/LocaleTextUtil.mlua) | HGM2695 |
| [RootDesk/MyDesk/Utils/MapTransitionHelper.mlua](../Source/RootDesk/MyDesk/Utils/MapTransitionHelper.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Utils/MathUtil.mlua](../Source/RootDesk/MyDesk/Utils/MathUtil.mlua) | HGM2695 |
| [RootDesk/MyDesk/Utils/ParallaxScrollComponent.mlua](../Source/RootDesk/MyDesk/Utils/ParallaxScrollComponent.mlua) | Jinwon |
| [RootDesk/MyDesk/Utils/ScheduleStatTextUtil.mlua](../Source/RootDesk/MyDesk/Utils/ScheduleStatTextUtil.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Utils/SpinComponent.mlua](../Source/RootDesk/MyDesk/Utils/SpinComponent.mlua) | Jinwon |
| [RootDesk/MyDesk/Utils/StaticYSortComponent.mlua](../Source/RootDesk/MyDesk/Utils/StaticYSortComponent.mlua) | Jinwon |
| [RootDesk/MyDesk/Utils/TemplateTextFormatter.mlua](../Source/RootDesk/MyDesk/Utils/TemplateTextFormatter.mlua) | HGM2695, Jinwon |
| [RootDesk/MyDesk/Utils/UIScreenUtil.mlua](../Source/RootDesk/MyDesk/Utils/UIScreenUtil.mlua) | HGM2695 |
| [RootDesk/MyDesk/Utils/YSortLayerLogic.mlua](../Source/RootDesk/MyDesk/Utils/YSortLayerLogic.mlua) | Jinwon |
| [tools/performance-sequencer/index.html](../Source/tools/performance-sequencer/index.html) | Jinwon |
| [tools/performance-sequencer/serve.cjs](../Source/tools/performance-sequencer/serve.cjs) | Jinwon |
| [tools/performance-sequencer/start-sequencer.bat](../Source/tools/performance-sequencer/start-sequencer.bat) | Jinwon |
