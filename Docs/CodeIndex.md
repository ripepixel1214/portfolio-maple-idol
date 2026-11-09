# 전체 코드 목록

[프로젝트](../README.md) / [소스 출처](SourceMap.md)

미니게임은 [실행과 입력 처리](MiniGames.md), 결제는 [거래 저장과 복구](Payments.md)에서 주요 함수를 볼 수 있습니다.

## 이후 수정한 코드

| 기능 | 코드 |
| --- | --- |
| 낚시, 야시장과 공통 세션 | [미니게임](../SourceUpdates/abbb12c/RootDesk/MyDesk/MiniGame/) |
| 대화 요청, 분기와 보상 검증 | [NPC와 이벤트](../SourceUpdates/abbb12c/RootDesk/MyDesk/Event/) |
| 지갑 저장과 수량형 상품 지급 | [재화](../SourceUpdates/abbb12c/RootDesk/MyDesk/Currency/), [상점](../SourceUpdates/abbb12c/RootDesk/MyDesk/Shop/), [아이템](../SourceUpdates/abbb12c/RootDesk/MyDesk/Item/) |
| 공연 재생과 데이터 편집 | [공연](../SourceUpdates/abbb12c/RootDesk/MyDesk/Performance/), [시퀀서](../SourceUpdates/abbb12c/tools/performance-sequencer/) |

아래는 제출한 포트폴리오에서 연결한 `Source/`의 파일입니다.

## Activity

- [RootDesk/MyDesk/Activity/ActivityHandler.mlua](../Source/RootDesk/MyDesk/Activity/ActivityHandler.mlua)
- [RootDesk/MyDesk/Activity/ActivityManager.mlua](../Source/RootDesk/MyDesk/Activity/ActivityManager.mlua)
- [RootDesk/MyDesk/Activity/ActivityMaster.mlua](../Source/RootDesk/MyDesk/Activity/ActivityMaster.mlua)
- [RootDesk/MyDesk/Activity/ActivityStorage.mlua](../Source/RootDesk/MyDesk/Activity/ActivityStorage.mlua)

## Actor

- [RootDesk/MyDesk/Actor/AI/ActorSpeechComponent.mlua](../Source/RootDesk/MyDesk/Actor/AI/ActorSpeechComponent.mlua)
- [RootDesk/MyDesk/Actor/AI/ActorSpeechMaster.mlua](../Source/RootDesk/MyDesk/Actor/AI/ActorSpeechMaster.mlua)
- [RootDesk/MyDesk/Actor/AI/EActorInteractionType.mlua](../Source/RootDesk/MyDesk/Actor/AI/EActorInteractionType.mlua)
- [RootDesk/MyDesk/Actor/AI/StaticActorSpeechComponent.mlua](../Source/RootDesk/MyDesk/Actor/AI/StaticActorSpeechComponent.mlua)
- [RootDesk/MyDesk/Actor/ActorMaster.mlua](../Source/RootDesk/MyDesk/Actor/ActorMaster.mlua)
- [RootDesk/MyDesk/Actor/Character/CharacterBaseCostume/CharacterBaseCostumeMaster.mlua](../Source/RootDesk/MyDesk/Actor/Character/CharacterBaseCostume/CharacterBaseCostumeMaster.mlua)
- [RootDesk/MyDesk/Actor/Character/CharacterBaseCostume/CharacterCostumeManager.mlua](../Source/RootDesk/MyDesk/Actor/Character/CharacterBaseCostume/CharacterCostumeManager.mlua)
- [RootDesk/MyDesk/Actor/Character/CharacterBaseCostume/CharacterCostumeStorage.mlua](../Source/RootDesk/MyDesk/Actor/Character/CharacterBaseCostume/CharacterCostumeStorage.mlua)
- [RootDesk/MyDesk/Actor/Character/CharacterBaseStat/CharacterBaseStatMaster.mlua](../Source/RootDesk/MyDesk/Actor/Character/CharacterBaseStat/CharacterBaseStatMaster.mlua)
- [RootDesk/MyDesk/Actor/Character/CharacterData.mlua](../Source/RootDesk/MyDesk/Actor/Character/CharacterData.mlua)
- [RootDesk/MyDesk/Actor/Character/CharacterFactory.mlua](../Source/RootDesk/MyDesk/Actor/Character/CharacterFactory.mlua)
- [RootDesk/MyDesk/Actor/Character/CharacterManager/CharacterManager.mlua](../Source/RootDesk/MyDesk/Actor/Character/CharacterManager/CharacterManager.mlua)
- [RootDesk/MyDesk/Actor/Character/CharacterManager/CharacterStatDelta.mlua](../Source/RootDesk/MyDesk/Actor/Character/CharacterManager/CharacterStatDelta.mlua)
- [RootDesk/MyDesk/Actor/Character/CharacterStorage.mlua](../Source/RootDesk/MyDesk/Actor/Character/CharacterStorage.mlua)
- [RootDesk/MyDesk/Actor/Character/CharacterType/CharacterTypeMaster.mlua](../Source/RootDesk/MyDesk/Actor/Character/CharacterType/CharacterTypeMaster.mlua)
- [RootDesk/MyDesk/Actor/Character/CharacterType/CharacterTypeRow.mlua](../Source/RootDesk/MyDesk/Actor/Character/CharacterType/CharacterTypeRow.mlua)
- [RootDesk/MyDesk/Actor/Character/Condition/ConditionMaster.mlua](../Source/RootDesk/MyDesk/Actor/Character/Condition/ConditionMaster.mlua)
- [RootDesk/MyDesk/Actor/Character/Condition/ECondition.mlua](../Source/RootDesk/MyDesk/Actor/Character/Condition/ECondition.mlua)
- [RootDesk/MyDesk/Actor/Character/ECharacterStatType.mlua](../Source/RootDesk/MyDesk/Actor/Character/ECharacterStatType.mlua)
- [RootDesk/MyDesk/Actor/Character/Intimacy/IntimacyLevelMaster.mlua](../Source/RootDesk/MyDesk/Actor/Character/Intimacy/IntimacyLevelMaster.mlua)
- [RootDesk/MyDesk/Actor/Character/StatDefinitionModel.mlua](../Source/RootDesk/MyDesk/Actor/Character/StatDefinitionModel.mlua)
- [RootDesk/MyDesk/Actor/RuntimeActorManager.mlua](../Source/RootDesk/MyDesk/Actor/RuntimeActorManager.mlua)
- [RootDesk/MyDesk/Actor/RuntimeActorStorage.mlua](../Source/RootDesk/MyDesk/Actor/RuntimeActorStorage.mlua)

## Currency

- [RootDesk/MyDesk/Currency/DiamondWalletChangedEvent.mlua](../Source/RootDesk/MyDesk/Currency/DiamondWalletChangedEvent.mlua)
- [RootDesk/MyDesk/Currency/DiamondWalletData.mlua](../Source/RootDesk/MyDesk/Currency/DiamondWalletData.mlua)
- [RootDesk/MyDesk/Currency/DiamondWalletLogic.mlua](../Source/RootDesk/MyDesk/Currency/DiamondWalletLogic.mlua)
- [RootDesk/MyDesk/Currency/DiamondWalletOperationData.mlua](../Source/RootDesk/MyDesk/Currency/DiamondWalletOperationData.mlua)
- [RootDesk/MyDesk/Currency/DiamondWalletResultData.mlua](../Source/RootDesk/MyDesk/Currency/DiamondWalletResultData.mlua)
- [RootDesk/MyDesk/Currency/DiamondWalletStorage.mlua](../Source/RootDesk/MyDesk/Currency/DiamondWalletStorage.mlua)
- [RootDesk/MyDesk/Currency/Testing/DiamondWalletVerificationLogic.mlua](../Source/RootDesk/MyDesk/Currency/Testing/DiamondWalletVerificationLogic.mlua)

## Dialog

- [RootDesk/MyDesk/Dialog/DialogClosedEvent.mlua](../Source/RootDesk/MyDesk/Dialog/DialogClosedEvent.mlua)
- [RootDesk/MyDesk/Dialog/DialogMaster.mlua](../Source/RootDesk/MyDesk/Dialog/DialogMaster.mlua)
- [RootDesk/MyDesk/Dialog/DialogOptionMaster.mlua](../Source/RootDesk/MyDesk/Dialog/DialogOptionMaster.mlua)
- [RootDesk/MyDesk/Dialog/DialogParser.mlua](../Source/RootDesk/MyDesk/Dialog/DialogParser.mlua)
- [RootDesk/MyDesk/Dialog/DialogPlayer.mlua](../Source/RootDesk/MyDesk/Dialog/DialogPlayer.mlua)
- [RootDesk/MyDesk/Dialog/DialogRichTextPlayer.mlua](../Source/RootDesk/MyDesk/Dialog/DialogRichTextPlayer.mlua)
- [RootDesk/MyDesk/Dialog/DialogTimedPlayer.mlua](../Source/RootDesk/MyDesk/Dialog/DialogTimedPlayer.mlua)
- [RootDesk/MyDesk/Dialog/DialogUILogic.mlua](../Source/RootDesk/MyDesk/Dialog/DialogUILogic.mlua)
- [RootDesk/MyDesk/Dialog/IntimacyEpisodeMaster.mlua](../Source/RootDesk/MyDesk/Dialog/IntimacyEpisodeMaster.mlua)
- [RootDesk/MyDesk/Dialog/StaticActorDialogMaster.mlua](../Source/RootDesk/MyDesk/Dialog/StaticActorDialogMaster.mlua)

## Event

- [RootDesk/MyDesk/Event/ChoiceEventUILogic.mlua](../Source/RootDesk/MyDesk/Event/ChoiceEventUILogic.mlua)
- [RootDesk/MyDesk/Event/DowntownEventContextManager.mlua](../Source/RootDesk/MyDesk/Event/DowntownEventContextManager.mlua)
- [RootDesk/MyDesk/Event/EEventType.mlua](../Source/RootDesk/MyDesk/Event/EEventType.mlua)
- [RootDesk/MyDesk/Event/EventCompletionManager.mlua](../Source/RootDesk/MyDesk/Event/EventCompletionManager.mlua)
- [RootDesk/MyDesk/Event/EventCompletionStorage.mlua](../Source/RootDesk/MyDesk/Event/EventCompletionStorage.mlua)
- [RootDesk/MyDesk/Event/EventExecutor.mlua](../Source/RootDesk/MyDesk/Event/EventExecutor.mlua)
- [RootDesk/MyDesk/Event/EventMaster.mlua](../Source/RootDesk/MyDesk/Event/EventMaster.mlua)
- [RootDesk/MyDesk/Event/EventResultHandler.mlua](../Source/RootDesk/MyDesk/Event/EventResultHandler.mlua)
- [RootDesk/MyDesk/Event/EventResultMaster.mlua](../Source/RootDesk/MyDesk/Event/EventResultMaster.mlua)
- [RootDesk/MyDesk/Event/EventRow.mlua](../Source/RootDesk/MyDesk/Event/EventRow.mlua)
- [RootDesk/MyDesk/Event/EventTriggerManager.mlua](../Source/RootDesk/MyDesk/Event/EventTriggerManager.mlua)
- [RootDesk/MyDesk/Event/EventTriggerRow.mlua](../Source/RootDesk/MyDesk/Event/EventTriggerRow.mlua)
- [RootDesk/MyDesk/Event/NpcEventManager.mlua](../Source/RootDesk/MyDesk/Event/NpcEventManager.mlua)
- [RootDesk/MyDesk/Event/NpcEventTriggerComponent.mlua](../Source/RootDesk/MyDesk/Event/NpcEventTriggerComponent.mlua)
- [RootDesk/MyDesk/Event/NpcInteractionGateLogic.mlua](../Source/RootDesk/MyDesk/Event/NpcInteractionGateLogic.mlua)
- [RootDesk/MyDesk/Event/NpcSpawnComponent.mlua](../Source/RootDesk/MyDesk/Event/NpcSpawnComponent.mlua)
- [RootDesk/MyDesk/Event/NpcTileBlockerComponent.mlua](../Source/RootDesk/MyDesk/Event/NpcTileBlockerComponent.mlua)

## Item

- [RootDesk/MyDesk/Item/ItemManager.mlua](../Source/RootDesk/MyDesk/Item/ItemManager.mlua)
- [RootDesk/MyDesk/Item/ItemMaster.mlua](../Source/RootDesk/MyDesk/Item/ItemMaster.mlua)
- [RootDesk/MyDesk/Item/ItemStorage.mlua](../Source/RootDesk/MyDesk/Item/ItemStorage.mlua)
- [RootDesk/MyDesk/Item/PhotoCardMaster.mlua](../Source/RootDesk/MyDesk/Item/PhotoCardMaster.mlua)

## Localization

- [RootDesk/MyDesk/Localization/LocalizedNameTagComponent.mlua](../Source/RootDesk/MyDesk/Localization/LocalizedNameTagComponent.mlua)

## MiniGame

- [RootDesk/MyDesk/MiniGame/Client/MiniGameClientBehavior.mlua](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameClientBehavior.mlua)
- [RootDesk/MyDesk/MiniGame/Client/MiniGameClientHandlerRegistry.mlua](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameClientHandlerRegistry.mlua)
- [RootDesk/MyDesk/MiniGame/Client/MiniGameClientModel.mlua](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameClientModel.mlua)
- [RootDesk/MyDesk/MiniGame/Client/MiniGameCommandClientHandler.mlua](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameCommandClientHandler.mlua)
- [RootDesk/MyDesk/MiniGame/Client/MiniGameCountClientHandler.mlua](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameCountClientHandler.mlua)
- [RootDesk/MyDesk/MiniGame/Client/MiniGameDalgonaClientHandler.mlua](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameDalgonaClientHandler.mlua)
- [RootDesk/MyDesk/MiniGame/Client/MiniGameDalgonaModel.mlua](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameDalgonaModel.mlua)
- [RootDesk/MyDesk/MiniGame/Client/MiniGameDalgonaPresenter.mlua](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameDalgonaPresenter.mlua)
- [RootDesk/MyDesk/MiniGame/Client/MiniGameDalgonaStageView.mlua](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameDalgonaStageView.mlua)
- [RootDesk/MyDesk/MiniGame/Client/MiniGameFishingClientHandler.mlua](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameFishingClientHandler.mlua)
- [RootDesk/MyDesk/MiniGame/Client/MiniGameFishingModel.mlua](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameFishingModel.mlua)
- [RootDesk/MyDesk/MiniGame/Client/MiniGameFishingPresenter.mlua](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameFishingPresenter.mlua)
- [RootDesk/MyDesk/MiniGame/Client/MiniGameFishingStageView.mlua](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameFishingStageView.mlua)
- [RootDesk/MyDesk/MiniGame/Client/MiniGameFishingVisual.mlua](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameFishingVisual.mlua)
- [RootDesk/MyDesk/MiniGame/Client/MiniGameFishingVisualPart.mlua](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameFishingVisualPart.mlua)
- [RootDesk/MyDesk/MiniGame/Client/MiniGameGaugeClientHandler.mlua](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameGaugeClientHandler.mlua)
- [RootDesk/MyDesk/MiniGame/Client/MiniGameLuckyCubeClientHandler.mlua](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameLuckyCubeClientHandler.mlua)
- [RootDesk/MyDesk/MiniGame/Client/MiniGameLuckyCubeModel.mlua](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameLuckyCubeModel.mlua)
- [RootDesk/MyDesk/MiniGame/Client/MiniGameLuckyCubePresenter.mlua](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameLuckyCubePresenter.mlua)
- [RootDesk/MyDesk/MiniGame/Client/MiniGameLuckyCubeStageView.mlua](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameLuckyCubeStageView.mlua)
- [RootDesk/MyDesk/MiniGame/Client/MiniGameShapeClientHandler.mlua](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameShapeClientHandler.mlua)
- [RootDesk/MyDesk/MiniGame/Client/MiniGameSnailLadderClientHandler.mlua](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameSnailLadderClientHandler.mlua)
- [RootDesk/MyDesk/MiniGame/Client/MiniGameSnailLadderModel.mlua](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameSnailLadderModel.mlua)
- [RootDesk/MyDesk/MiniGame/Client/MiniGameSnailLadderPresenter.mlua](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameSnailLadderPresenter.mlua)
- [RootDesk/MyDesk/MiniGame/Client/MiniGameSnailLadderStageView.mlua](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameSnailLadderStageView.mlua)
- [RootDesk/MyDesk/MiniGame/Client/MiniGameTimingClientHandler.mlua](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameTimingClientHandler.mlua)
- [RootDesk/MyDesk/MiniGame/Client/MiniGameTrainingStageView.mlua](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameTrainingStageView.mlua)
- [RootDesk/MyDesk/MiniGame/Client/MiniGameViewRegistry.mlua](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameViewRegistry.mlua)
- [RootDesk/MyDesk/MiniGame/CommandInputLogic.mlua](../Source/RootDesk/MyDesk/MiniGame/CommandInputLogic.mlua)
- [RootDesk/MyDesk/MiniGame/Data/EMiniGameContextType.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/EMiniGameContextType.mlua)
- [RootDesk/MyDesk/MiniGame/Data/EMiniGameInputAction.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/EMiniGameInputAction.mlua)
- [RootDesk/MyDesk/MiniGame/Data/EMiniGameInputType.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/EMiniGameInputType.mlua)
- [RootDesk/MyDesk/MiniGame/Data/EMiniGameKind.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/EMiniGameKind.mlua)
- [RootDesk/MyDesk/MiniGame/Data/EMiniGameObjectiveType.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/EMiniGameObjectiveType.mlua)
- [RootDesk/MyDesk/MiniGame/Data/EMiniGameResultType.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/EMiniGameResultType.mlua)
- [RootDesk/MyDesk/MiniGame/Data/EMiniGameSettlementType.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/EMiniGameSettlementType.mlua)
- [RootDesk/MyDesk/MiniGame/Data/EMiniGameTimeMode.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/EMiniGameTimeMode.mlua)
- [RootDesk/MyDesk/MiniGame/Data/FishingRewardData.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/FishingRewardData.mlua)
- [RootDesk/MyDesk/MiniGame/Data/MiniGameCommandFeedbackData.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/MiniGameCommandFeedbackData.mlua)
- [RootDesk/MyDesk/MiniGame/Data/MiniGameCommandSessionState.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/MiniGameCommandSessionState.mlua)
- [RootDesk/MyDesk/MiniGame/Data/MiniGameDalgonaSessionState.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/MiniGameDalgonaSessionState.mlua)
- [RootDesk/MyDesk/MiniGame/Data/MiniGameDalgonaViewState.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/MiniGameDalgonaViewState.mlua)
- [RootDesk/MyDesk/MiniGame/Data/MiniGameDrawResultData.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/MiniGameDrawResultData.mlua)
- [RootDesk/MyDesk/MiniGame/Data/MiniGameFishingInputData.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/MiniGameFishingInputData.mlua)
- [RootDesk/MyDesk/MiniGame/Data/MiniGameFishingState.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/MiniGameFishingState.mlua)
- [RootDesk/MyDesk/MiniGame/Data/MiniGameFishingViewState.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/MiniGameFishingViewState.mlua)
- [RootDesk/MyDesk/MiniGame/Data/MiniGameHudState.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/MiniGameHudState.mlua)
- [RootDesk/MyDesk/MiniGame/Data/MiniGameInputProof.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/MiniGameInputProof.mlua)
- [RootDesk/MyDesk/MiniGame/Data/MiniGameLaunchContext.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/MiniGameLaunchContext.mlua)
- [RootDesk/MyDesk/MiniGame/Data/MiniGameLuckyCubeState.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/MiniGameLuckyCubeState.mlua)
- [RootDesk/MyDesk/MiniGame/Data/MiniGameResultData.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/MiniGameResultData.mlua)
- [RootDesk/MyDesk/MiniGame/Data/MiniGameSessionData.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/MiniGameSessionData.mlua)
- [RootDesk/MyDesk/MiniGame/Data/MiniGameSnailLadderState.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/MiniGameSnailLadderState.mlua)
- [RootDesk/MyDesk/MiniGame/Data/MiniGameStartOptions.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/MiniGameStartOptions.mlua)
- [RootDesk/MyDesk/MiniGame/Data/MiniGameTable.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/MiniGameTable.mlua)
- [RootDesk/MyDesk/MiniGame/Data/MiniGameViewContext.mlua](../Source/RootDesk/MyDesk/MiniGame/Data/MiniGameViewContext.mlua)
- [RootDesk/MyDesk/MiniGame/DragIndicator.mlua](../Source/RootDesk/MyDesk/MiniGame/DragIndicator.mlua)
- [RootDesk/MyDesk/MiniGame/DragInputLogic.mlua](../Source/RootDesk/MyDesk/MiniGame/DragInputLogic.mlua)
- [RootDesk/MyDesk/MiniGame/MashInputLogic.mlua](../Source/RootDesk/MyDesk/MiniGame/MashInputLogic.mlua)
- [RootDesk/MyDesk/MiniGame/MiniGameCommandBox.mlua](../Source/RootDesk/MyDesk/MiniGame/MiniGameCommandBox.mlua)
- [RootDesk/MyDesk/MiniGame/MiniGameCommandFlow.mlua](../Source/RootDesk/MyDesk/MiniGame/MiniGameCommandFlow.mlua)
- [RootDesk/MyDesk/MiniGame/MiniGameDebugLogic.mlua](../Source/RootDesk/MyDesk/MiniGame/MiniGameDebugLogic.mlua)
- [RootDesk/MyDesk/MiniGame/MiniGameInputEvent.mlua](../Source/RootDesk/MyDesk/MiniGame/MiniGameInputEvent.mlua)
- [RootDesk/MyDesk/MiniGame/MiniGameInputHubLogic.mlua](../Source/RootDesk/MyDesk/MiniGame/MiniGameInputHubLogic.mlua)
- [RootDesk/MyDesk/MiniGame/MiniGameManager.mlua](../Source/RootDesk/MyDesk/MiniGame/MiniGameManager.mlua)
- [RootDesk/MyDesk/MiniGame/MiniGamePerformanceUILogic.mlua](../Source/RootDesk/MyDesk/MiniGame/MiniGamePerformanceUILogic.mlua)
- [RootDesk/MyDesk/MiniGame/MiniGamePlayLogic.mlua](../Source/RootDesk/MyDesk/MiniGame/MiniGamePlayLogic.mlua)
- [RootDesk/MyDesk/MiniGame/MiniGameResultEvent.mlua](../Source/RootDesk/MyDesk/MiniGame/MiniGameResultEvent.mlua)
- [RootDesk/MyDesk/MiniGame/MiniGameUIRouter.mlua](../Source/RootDesk/MyDesk/MiniGame/MiniGameUIRouter.mlua)
- [RootDesk/MyDesk/MiniGame/Rule/MiniGameFishingRule.mlua](../Source/RootDesk/MyDesk/MiniGame/Rule/MiniGameFishingRule.mlua)
- [RootDesk/MyDesk/MiniGame/Rule/MiniGameInputRule.mlua](../Source/RootDesk/MyDesk/MiniGame/Rule/MiniGameInputRule.mlua)
- [RootDesk/MyDesk/MiniGame/Rule/MiniGameLuckyCubeRule.mlua](../Source/RootDesk/MyDesk/MiniGame/Rule/MiniGameLuckyCubeRule.mlua)
- [RootDesk/MyDesk/MiniGame/Rule/MiniGameObjectiveRule.mlua](../Source/RootDesk/MyDesk/MiniGame/Rule/MiniGameObjectiveRule.mlua)
- [RootDesk/MyDesk/MiniGame/Rule/MiniGamePhaseTimer.mlua](../Source/RootDesk/MyDesk/MiniGame/Rule/MiniGamePhaseTimer.mlua)
- [RootDesk/MyDesk/MiniGame/Rule/MiniGameResultResolver.mlua](../Source/RootDesk/MyDesk/MiniGame/Rule/MiniGameResultResolver.mlua)
- [RootDesk/MyDesk/MiniGame/Rule/MiniGameRuleEngine.mlua](../Source/RootDesk/MyDesk/MiniGame/Rule/MiniGameRuleEngine.mlua)
- [RootDesk/MyDesk/MiniGame/Rule/MiniGameRuleRegistry.mlua](../Source/RootDesk/MyDesk/MiniGame/Rule/MiniGameRuleRegistry.mlua)
- [RootDesk/MyDesk/MiniGame/Rule/MiniGameSettlementRule.mlua](../Source/RootDesk/MyDesk/MiniGame/Rule/MiniGameSettlementRule.mlua)
- [RootDesk/MyDesk/MiniGame/Rule/MiniGameSnailLadderRule.mlua](../Source/RootDesk/MyDesk/MiniGame/Rule/MiniGameSnailLadderRule.mlua)
- [RootDesk/MyDesk/MiniGame/Server/FishingRewardLogic.mlua](../Source/RootDesk/MyDesk/MiniGame/Server/FishingRewardLogic.mlua)
- [RootDesk/MyDesk/MiniGame/Server/FishingRewardStorage.mlua](../Source/RootDesk/MyDesk/MiniGame/Server/FishingRewardStorage.mlua)
- [RootDesk/MyDesk/MiniGame/Server/MiniGameClientResultServerHandler.mlua](../Source/RootDesk/MyDesk/MiniGame/Server/MiniGameClientResultServerHandler.mlua)
- [RootDesk/MyDesk/MiniGame/Server/MiniGameCommandServerHandler.mlua](../Source/RootDesk/MyDesk/MiniGame/Server/MiniGameCommandServerHandler.mlua)
- [RootDesk/MyDesk/MiniGame/Server/MiniGameContentService.mlua](../Source/RootDesk/MyDesk/MiniGame/Server/MiniGameContentService.mlua)
- [RootDesk/MyDesk/MiniGame/Server/MiniGameDalgonaServerHandler.mlua](../Source/RootDesk/MyDesk/MiniGame/Server/MiniGameDalgonaServerHandler.mlua)
- [RootDesk/MyDesk/MiniGame/Server/MiniGameFishingServerHandler.mlua](../Source/RootDesk/MyDesk/MiniGame/Server/MiniGameFishingServerHandler.mlua)
- [RootDesk/MyDesk/MiniGame/Server/MiniGameLuckyCubeServerHandler.mlua](../Source/RootDesk/MyDesk/MiniGame/Server/MiniGameLuckyCubeServerHandler.mlua)
- [RootDesk/MyDesk/MiniGame/Server/MiniGameServerHandlerRegistry.mlua](../Source/RootDesk/MyDesk/MiniGame/Server/MiniGameServerHandlerRegistry.mlua)
- [RootDesk/MyDesk/MiniGame/Server/MiniGameSessionService.mlua](../Source/RootDesk/MyDesk/MiniGame/Server/MiniGameSessionService.mlua)
- [RootDesk/MyDesk/MiniGame/Server/MiniGameSnailLadderServerHandler.mlua](../Source/RootDesk/MyDesk/MiniGame/Server/MiniGameSnailLadderServerHandler.mlua)
- [RootDesk/MyDesk/MiniGame/TimingInputLogic.mlua](../Source/RootDesk/MyDesk/MiniGame/TimingInputLogic.mlua)

## NewContent

- [RootDesk/MyDesk/NewContent/NewContentManager.mlua](../Source/RootDesk/MyDesk/NewContent/NewContentManager.mlua)
- [RootDesk/MyDesk/NewContent/NewContentStorage.mlua](../Source/RootDesk/MyDesk/NewContent/NewContentStorage.mlua)

## OutdoorMapPortalComponent.mlua

- [RootDesk/MyDesk/OutdoorMapPortalComponent.mlua](../Source/RootDesk/MyDesk/OutdoorMapPortalComponent.mlua)

## OutdoorMapTransitionLogic.mlua

- [RootDesk/MyDesk/OutdoorMapTransitionLogic.mlua](../Source/RootDesk/MyDesk/OutdoorMapTransitionLogic.mlua)

## OutdoorMapTransitionUILogic.mlua

- [RootDesk/MyDesk/OutdoorMapTransitionUILogic.mlua](../Source/RootDesk/MyDesk/OutdoorMapTransitionUILogic.mlua)

## Performance

- [RootDesk/MyDesk/Performance/AudienceJumpComponent.mlua](../Source/RootDesk/MyDesk/Performance/AudienceJumpComponent.mlua)
- [RootDesk/MyDesk/Performance/Data/EPerformanceCueType.mlua](../Source/RootDesk/MyDesk/Performance/Data/EPerformanceCueType.mlua)
- [RootDesk/MyDesk/Performance/Data/EPerformanceUIPreset.mlua](../Source/RootDesk/MyDesk/Performance/Data/EPerformanceUIPreset.mlua)
- [RootDesk/MyDesk/Performance/Data/PerformanceCueRow.mlua](../Source/RootDesk/MyDesk/Performance/Data/PerformanceCueRow.mlua)
- [RootDesk/MyDesk/Performance/Data/PerformanceRoleAssignment.mlua](../Source/RootDesk/MyDesk/Performance/Data/PerformanceRoleAssignment.mlua)
- [RootDesk/MyDesk/Performance/Data/PerformanceRow.mlua](../Source/RootDesk/MyDesk/Performance/Data/PerformanceRow.mlua)
- [RootDesk/MyDesk/Performance/LightStickSwayComponent.mlua](../Source/RootDesk/MyDesk/Performance/LightStickSwayComponent.mlua)
- [RootDesk/MyDesk/Performance/PerformanceConductor.mlua](../Source/RootDesk/MyDesk/Performance/PerformanceConductor.mlua)
- [RootDesk/MyDesk/Performance/PerformanceCostumeMaster.mlua](../Source/RootDesk/MyDesk/Performance/PerformanceCostumeMaster.mlua)
- [RootDesk/MyDesk/Performance/PerformanceDebugLogic.mlua](../Source/RootDesk/MyDesk/Performance/PerformanceDebugLogic.mlua)
- [RootDesk/MyDesk/Performance/PerformanceEffectLogic.mlua](../Source/RootDesk/MyDesk/Performance/PerformanceEffectLogic.mlua)
- [RootDesk/MyDesk/Performance/PerformanceMaster.mlua](../Source/RootDesk/MyDesk/Performance/PerformanceMaster.mlua)
- [RootDesk/MyDesk/Performance/PerformancePhotocardUILogic.mlua](../Source/RootDesk/MyDesk/Performance/PerformancePhotocardUILogic.mlua)
- [RootDesk/MyDesk/Performance/PerformancePostFlowLogic.mlua](../Source/RootDesk/MyDesk/Performance/PerformancePostFlowLogic.mlua)
- [RootDesk/MyDesk/Performance/PerformanceResultManager.mlua](../Source/RootDesk/MyDesk/Performance/PerformanceResultManager.mlua)
- [RootDesk/MyDesk/Performance/PerformanceScoreUILogic.mlua](../Source/RootDesk/MyDesk/Performance/PerformanceScoreUILogic.mlua)
- [RootDesk/MyDesk/Performance/SpotlightSwayComponent.mlua](../Source/RootDesk/MyDesk/Performance/SpotlightSwayComponent.mlua)

## Player

- [RootDesk/MyDesk/Player/PlayerDisableComponent.mlua](../Source/RootDesk/MyDesk/Player/PlayerDisableComponent.mlua)

## PlayerControlUIComponent.mlua

- [RootDesk/MyDesk/PlayerControlUIComponent.mlua](../Source/RootDesk/MyDesk/PlayerControlUIComponent.mlua)

## Progress

- [RootDesk/MyDesk/Progress/DefaultUILogic.mlua](../Source/RootDesk/MyDesk/Progress/DefaultUILogic.mlua)
- [RootDesk/MyDesk/Progress/EProgressStep.mlua](../Source/RootDesk/MyDesk/Progress/EProgressStep.mlua)
- [RootDesk/MyDesk/Progress/ProgressChangedEvent.mlua](../Source/RootDesk/MyDesk/Progress/ProgressChangedEvent.mlua)
- [RootDesk/MyDesk/Progress/ProgressData.mlua](../Source/RootDesk/MyDesk/Progress/ProgressData.mlua)
- [RootDesk/MyDesk/Progress/ProgressManager.mlua](../Source/RootDesk/MyDesk/Progress/ProgressManager.mlua)
- [RootDesk/MyDesk/Progress/ProgressStorage.mlua](../Source/RootDesk/MyDesk/Progress/ProgressStorage.mlua)
- [RootDesk/MyDesk/Progress/Schedule/ScheduleProgressUILogic.mlua](../Source/RootDesk/MyDesk/Progress/Schedule/ScheduleProgressUILogic.mlua)
- [RootDesk/MyDesk/Progress/Schedule/ScheduleUILogic.mlua](../Source/RootDesk/MyDesk/Progress/Schedule/ScheduleUILogic.mlua)
- [RootDesk/MyDesk/Progress/Schedule/SettlementCardUILogic.mlua](../Source/RootDesk/MyDesk/Progress/Schedule/SettlementCardUILogic.mlua)
- [RootDesk/MyDesk/Progress/Schedule/WeeklyPlanData.mlua](../Source/RootDesk/MyDesk/Progress/Schedule/WeeklyPlanData.mlua)
- [RootDesk/MyDesk/Progress/Schedule/WeeklySequenceScheduler.mlua](../Source/RootDesk/MyDesk/Progress/Schedule/WeeklySequenceScheduler.mlua)
- [RootDesk/MyDesk/Progress/StageSelect/CharacterSelectUILogic.mlua](../Source/RootDesk/MyDesk/Progress/StageSelect/CharacterSelectUILogic.mlua)
- [RootDesk/MyDesk/Progress/StageSelect/StageMaster.mlua](../Source/RootDesk/MyDesk/Progress/StageSelect/StageMaster.mlua)
- [RootDesk/MyDesk/Progress/StageSelect/StageSelectUILogic.mlua](../Source/RootDesk/MyDesk/Progress/StageSelect/StageSelectUILogic.mlua)
- [RootDesk/MyDesk/Progress/StageSelect/StageStartUILogic.mlua](../Source/RootDesk/MyDesk/Progress/StageSelect/StageStartUILogic.mlua)
- [RootDesk/MyDesk/Progress/StepEntryLogic.mlua](../Source/RootDesk/MyDesk/Progress/StepEntryLogic.mlua)

## Resource

- [RootDesk/MyDesk/Resource/ImageResourceMetaMaster.mlua](../Source/RootDesk/MyDesk/Resource/ImageResourceMetaMaster.mlua)
- [RootDesk/MyDesk/Resource/ResourceMaster.mlua](../Source/RootDesk/MyDesk/Resource/ResourceMaster.mlua)

## Shop

- [RootDesk/MyDesk/Shop/DiamondPackageData.mlua](../Source/RootDesk/MyDesk/Shop/DiamondPackageData.mlua)
- [RootDesk/MyDesk/Shop/PurchaseUILogic.mlua](../Source/RootDesk/MyDesk/Shop/PurchaseUILogic.mlua)
- [RootDesk/MyDesk/Shop/ShopItemChangedEvent.mlua](../Source/RootDesk/MyDesk/Shop/ShopItemChangedEvent.mlua)
- [RootDesk/MyDesk/Shop/ShopItemManager.mlua](../Source/RootDesk/MyDesk/Shop/ShopItemManager.mlua)
- [RootDesk/MyDesk/Shop/ShopItemMaster.mlua](../Source/RootDesk/MyDesk/Shop/ShopItemMaster.mlua)
- [RootDesk/MyDesk/Shop/ShopItemRow.mlua](../Source/RootDesk/MyDesk/Shop/ShopItemRow.mlua)
- [RootDesk/MyDesk/Shop/ShopItemStorage.mlua](../Source/RootDesk/MyDesk/Shop/ShopItemStorage.mlua)
- [RootDesk/MyDesk/Shop/ShopUILogic.mlua](../Source/RootDesk/MyDesk/Shop/ShopUILogic.mlua)
- [RootDesk/MyDesk/Shop/WorldShopPurchaseLogic.mlua](../Source/RootDesk/MyDesk/Shop/WorldShopPurchaseLogic.mlua)
- [RootDesk/MyDesk/Shop/WorldShopPurchaseRequestEvent.mlua](../Source/RootDesk/MyDesk/Shop/WorldShopPurchaseRequestEvent.mlua)

## Sound

- [RootDesk/MyDesk/Sound/SoundManager.mlua](../Source/RootDesk/MyDesk/Sound/SoundManager.mlua)
- [RootDesk/MyDesk/Sound/SoundStorage.mlua](../Source/RootDesk/MyDesk/Sound/SoundStorage.mlua)

## TagTraining

- [RootDesk/MyDesk/TagTraining/TagTrainingManager.mlua](../Source/RootDesk/MyDesk/TagTraining/TagTrainingManager.mlua)
- [RootDesk/MyDesk/TagTraining/TagTrainingRules.mlua](../Source/RootDesk/MyDesk/TagTraining/TagTrainingRules.mlua)
- [RootDesk/MyDesk/TagTraining/TagTrainingUILogic.mlua](../Source/RootDesk/MyDesk/TagTraining/TagTrainingUILogic.mlua)
- [RootDesk/MyDesk/TagTraining/TrainingCardStorage.mlua](../Source/RootDesk/MyDesk/TagTraining/TrainingCardStorage.mlua)
- [RootDesk/MyDesk/TagTraining/TrainingDataMaster.mlua](../Source/RootDesk/MyDesk/TagTraining/TrainingDataMaster.mlua)

## Test

- [RootDesk/MyDesk/Test/UIDebugLogic.mlua](../Source/RootDesk/MyDesk/Test/UIDebugLogic.mlua)

## Tutorial

- [RootDesk/MyDesk/Tutorial/TutorialManager.mlua](../Source/RootDesk/MyDesk/Tutorial/TutorialManager.mlua)
- [RootDesk/MyDesk/Tutorial/TutorialStepData.mlua](../Source/RootDesk/MyDesk/Tutorial/TutorialStepData.mlua)
- [RootDesk/MyDesk/Tutorial/TutorialStepMaster.mlua](../Source/RootDesk/MyDesk/Tutorial/TutorialStepMaster.mlua)
- [RootDesk/MyDesk/Tutorial/TutorialUILogic.mlua](../Source/RootDesk/MyDesk/Tutorial/TutorialUILogic.mlua)

## UI

- [RootDesk/MyDesk/UI/LoadingUILogic.mlua](../Source/RootDesk/MyDesk/UI/LoadingUILogic.mlua)
- [RootDesk/MyDesk/UI/LocalizedFormatTextComponent.mlua](../Source/RootDesk/MyDesk/UI/LocalizedFormatTextComponent.mlua)
- [RootDesk/MyDesk/UI/MainTitleUILogic.mlua](../Source/RootDesk/MyDesk/UI/MainTitleUILogic.mlua)
- [RootDesk/MyDesk/UI/ResultPopupUILogic.mlua](../Source/RootDesk/MyDesk/UI/ResultPopupUILogic.mlua)
- [RootDesk/MyDesk/UI/ScreenEffectUILogic.mlua](../Source/RootDesk/MyDesk/UI/ScreenEffectUILogic.mlua)
- [RootDesk/MyDesk/UI/SmartPhone/SmartPhoneAlbumAppLogic.mlua](../Source/RootDesk/MyDesk/UI/SmartPhone/SmartPhoneAlbumAppLogic.mlua)
- [RootDesk/MyDesk/UI/SmartPhone/SmartPhoneCostumeAppLogic.mlua](../Source/RootDesk/MyDesk/UI/SmartPhone/SmartPhoneCostumeAppLogic.mlua)
- [RootDesk/MyDesk/UI/SmartPhone/SmartPhoneIdolAppLogic.mlua](../Source/RootDesk/MyDesk/UI/SmartPhone/SmartPhoneIdolAppLogic.mlua)
- [RootDesk/MyDesk/UI/SmartPhone/SmartPhoneStatAppLogic.mlua](../Source/RootDesk/MyDesk/UI/SmartPhone/SmartPhoneStatAppLogic.mlua)
- [RootDesk/MyDesk/UI/SmartPhone/SmartPhoneUIUtil.mlua](../Source/RootDesk/MyDesk/UI/SmartPhone/SmartPhoneUIUtil.mlua)
- [RootDesk/MyDesk/UI/SmartPhoneUILogic.mlua](../Source/RootDesk/MyDesk/UI/SmartPhoneUILogic.mlua)
- [RootDesk/MyDesk/UI/UIBlockerLogic.mlua](../Source/RootDesk/MyDesk/UI/UIBlockerLogic.mlua)
- [RootDesk/MyDesk/UI/UIToast.mlua](../Source/RootDesk/MyDesk/UI/UIToast.mlua)
- [RootDesk/MyDesk/UI/UITween.mlua](../Source/RootDesk/MyDesk/UI/UITween.mlua)
- [RootDesk/MyDesk/UI/UIVisibilityChangedEvent.mlua](../Source/RootDesk/MyDesk/UI/UIVisibilityChangedEvent.mlua)
- [RootDesk/MyDesk/UI/UIVisibilityNotifierLogic.mlua](../Source/RootDesk/MyDesk/UI/UIVisibilityNotifierLogic.mlua)

## UserDataManager.mlua

- [RootDesk/MyDesk/UserDataManager.mlua](../Source/RootDesk/MyDesk/UserDataManager.mlua)

## Utils

- [RootDesk/MyDesk/Utils/AvatarActionStateUtil.mlua](../Source/RootDesk/MyDesk/Utils/AvatarActionStateUtil.mlua)
- [RootDesk/MyDesk/Utils/CameraBoundsUtil.mlua](../Source/RootDesk/MyDesk/Utils/CameraBoundsUtil.mlua)
- [RootDesk/MyDesk/Utils/CameraModifierComponent.mlua](../Source/RootDesk/MyDesk/Utils/CameraModifierComponent.mlua)
- [RootDesk/MyDesk/Utils/DataStorageErrorUtil.mlua](../Source/RootDesk/MyDesk/Utils/DataStorageErrorUtil.mlua)
- [RootDesk/MyDesk/Utils/DataTableUtil.mlua](../Source/RootDesk/MyDesk/Utils/DataTableUtil.mlua)
- [RootDesk/MyDesk/Utils/DynamicYSortComponent.mlua](../Source/RootDesk/MyDesk/Utils/DynamicYSortComponent.mlua)
- [RootDesk/MyDesk/Utils/EntityFadeComponent.mlua](../Source/RootDesk/MyDesk/Utils/EntityFadeComponent.mlua)
- [RootDesk/MyDesk/Utils/LocaleTextUtil.mlua](../Source/RootDesk/MyDesk/Utils/LocaleTextUtil.mlua)
- [RootDesk/MyDesk/Utils/MapTransitionHelper.mlua](../Source/RootDesk/MyDesk/Utils/MapTransitionHelper.mlua)
- [RootDesk/MyDesk/Utils/MathUtil.mlua](../Source/RootDesk/MyDesk/Utils/MathUtil.mlua)
- [RootDesk/MyDesk/Utils/ParallaxScrollComponent.mlua](../Source/RootDesk/MyDesk/Utils/ParallaxScrollComponent.mlua)
- [RootDesk/MyDesk/Utils/ScheduleStatTextUtil.mlua](../Source/RootDesk/MyDesk/Utils/ScheduleStatTextUtil.mlua)
- [RootDesk/MyDesk/Utils/SpinComponent.mlua](../Source/RootDesk/MyDesk/Utils/SpinComponent.mlua)
- [RootDesk/MyDesk/Utils/StaticYSortComponent.mlua](../Source/RootDesk/MyDesk/Utils/StaticYSortComponent.mlua)
- [RootDesk/MyDesk/Utils/TemplateTextFormatter.mlua](../Source/RootDesk/MyDesk/Utils/TemplateTextFormatter.mlua)
- [RootDesk/MyDesk/Utils/UIScreenUtil.mlua](../Source/RootDesk/MyDesk/Utils/UIScreenUtil.mlua)
- [RootDesk/MyDesk/Utils/YSortLayerLogic.mlua](../Source/RootDesk/MyDesk/Utils/YSortLayerLogic.mlua)

## tools

- [tools/performance-sequencer/index.html](../Source/tools/performance-sequencer/index.html)
- [tools/performance-sequencer/serve.cjs](../Source/tools/performance-sequencer/serve.cjs)
- [tools/performance-sequencer/start-sequencer.bat](../Source/tools/performance-sequencer/start-sequencer.bat)
