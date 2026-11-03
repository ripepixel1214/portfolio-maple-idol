# 미니게임

[프로젝트](../README.md) / [전체 코드](CodeIndex.md)

## 공통 실행과 게임별 확장

조작과 보상 방식이 다른 미니게임을 추가할 때 시작 준비와 종료, 사용자 이탈 처리를 반복 구현하지 않도록 공통 실행 흐름과 게임별 규칙을 분리했습니다. 이 구조에 달고나, 주사위, 낚시와 사다리 미니게임을 추가했습니다.

[StartMiniGameEvent](../Source/RootDesk/MyDesk/Event/EventExecutor.mlua#L163)는 게임 ID, 사용자 ID와 이벤트 ID를 시작 옵션으로 구성합니다. [Start](../Source/RootDesk/MyDesk/MiniGame/Server/MiniGameContentService.mlua#L26)에서 공통 세션을 시작하고, 종료 결과의 세션 ID와 이벤트 ID를 확인해 NPC 후속 처리를 이어갑니다. 야시장 게임은 로비 승인과 시작 조건을 확인하는 경로로 연결됩니다.

| 역할 | 코드 |
| --- | --- |
| 사용자별 실행 상태와 준비, 종료, 이탈 관리 | [MiniGameSessionService](../Source/RootDesk/MyDesk/MiniGame/Server/MiniGameSessionService.mlua#L231) |
| 게임 종류에 맞는 서버 로직 선택 | [MiniGameServerHandlerRegistry](../Source/RootDesk/MyDesk/MiniGame/Server/MiniGameServerHandlerRegistry.mlua#L6) |
| 게임별 클라이언트 실행 연결 | [MiniGameClientHandlerRegistry](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameClientHandlerRegistry.mlua) |
| 화면 선택과 표시 수명 | [MiniGameUIRouter](../Source/RootDesk/MyDesk/MiniGame/MiniGameUIRouter.mlua), [MiniGameViewRegistry](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameViewRegistry.mlua) |
| 프리셋, 입력과 목표 규칙 | [MiniGameTable](../Source/RootDesk/MyDesk/MiniGame/Data/MiniGameTable.mlua), [MiniGameRuleEngine](../Source/RootDesk/MyDesk/MiniGame/Rule/MiniGameRuleEngine.mlua) |

새 게임은 종류별 서버 로직과 클라이언트 화면, 등록 정보를 추가합니다. PC의 키보드와 모바일 터치 입력은 공통 행동으로 전달하고, 실행 상태와 화면 표시를 분리했습니다.

## RPC 요청자와 입력 검증

[RequestFishingInput](../Source/RootDesk/MyDesk/MiniGame/MiniGameManager.mlua#L5)은 MSW의 서버 실행 메서드에서 `senderUserId`로 소유 세션을 조회합니다. 활성 상태와 게임 종류를 확인한 뒤 [HandleInput](../Source/RootDesk/MyDesk/MiniGame/Server/MiniGameFishingServerHandler.mlua#L55)으로 넘겨 입력 순번과 행동, 좌표 범위를 검사합니다.

시작 옵션과 실행 정보, 입력과 상태는 내부에서 Struct로 사용하고 RPC 경계에서 `ToPlainTable`로 변환합니다. 수신 측은 새로운 Struct로 복원하고 서버에서 요청자의 소유권과 값 범위를 확인합니다.

## 낚시의 입력과 화면 갱신

낚시는 조준 위치와 발사 입력을 서버에 전달하고, 서버가 계산한 진행과 적중 상태를 화면에 반영합니다. 서버 상태를 받을 때만 그리면 표시 주기도 수신 간격을 따르므로, 마지막 수신 상태와 경과 시간을 보관하고 화면은 매 프레임 갱신하도록 나눴습니다.

- [Update](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameFishingModel.mlua#L114): 변경된 조준만 예약해 0.05초 간격으로 전송합니다.
- [Send](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameFishingPresenter.mlua#L81): 입력을 RPC로 전달합니다. 발사와 시작 등의 행동은 이동 전송 주기와 별도로 보냅니다.
- [ApplyState](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameFishingModel.mlua#L75): 세션 ID와 갱신 번호를 확인해 다른 세션이나 이전 상태를 제외합니다.
- [OnUpdate](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameFishingPresenter.mlua#L116), [MiniGameFishingStageView](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameFishingStageView.mlua): 입력 주기와 프레임 표시를 연결하고, 수신 상태에서 경과한 시간을 사용해 물고기의 위치를 표시합니다.

표시 개체와 적중 효과는 풀에서 재사용합니다. [Reset](../Source/RootDesk/MyDesk/MiniGame/Client/MiniGameFishingVisual.mlua#L59)에서 표시 상태를 초기화하고, 배치 갱신이 끝난 개체를 노출하도록 구성했습니다.

## 입력 기록으로 결과 재계산

연타, 타이밍, 게이지와 도형 입력은 [MiniGameInputProof](../Source/RootDesk/MyDesk/MiniGame/Data/MiniGameInputProof.mlua)로 기록해 제출합니다. 서버는 [ResolveClientResult](../Source/RootDesk/MyDesk/MiniGame/Server/MiniGameClientResultServerHandler.mlua#L63)에서 시간 순서, 입력 개수와 좌표를 확인하고 규칙을 다시 실행해 성공 여부와 점수를 계산합니다.

[HandleClientResult](../Source/RootDesk/MyDesk/MiniGame/Server/MiniGameSessionService.mlua#L496)는 소유 세션과 실행 상태를 확인하고 재계산된 결과를 확정합니다. 서버에서 직접 진행하는 낚시 등의 게임과 입력 기록을 제출하는 게임은 종류별로 분리했습니다.

## 출시 후 피드백에 따른 개선

출시 후 커맨드 미니게임이 원활하게 동작하지 않는다는 사용자 피드백을 받아, 리소스 준비와 서버, 클라이언트의 입력 처리 로직을 개선했습니다.

- [MiniGameCommandBox.BindArrowSprite](../Source/RootDesk/MyDesk/MiniGame/MiniGameCommandBox.mlua#L177): 현재 표시 코드에서는 아이콘의 리소스 바인딩과 표시 갱신을 분리합니다.
- [MiniGameInputHubLogic.EmitForChannel](../Source/RootDesk/MyDesk/MiniGame/MiniGameInputHubLogic.mlua#L152): 입력을 세션, 채널과 행동을 가진 공통 이벤트로 전달합니다.
- [MiniGameManager.RequestCommandInput](../Source/RootDesk/MyDesk/MiniGame/MiniGameManager.mlua#L385): 세션 소유자, 허용 키와 순번을 확인하고, 누적 입력 이력에서 미처리 구간을 순서대로 반영합니다.

입력 이벤트는 [MiniGamePlayLogic.OnInputEvent](../Source/RootDesk/MyDesk/MiniGame/MiniGamePlayLogic.mlua#L325)에서 게임별 클라이언트 처리로 전달하고, 커맨드 입력의 서버 판정은 [MiniGameCommandServerHandler](../Source/RootDesk/MyDesk/MiniGame/Server/MiniGameCommandServerHandler.mlua)로 연결합니다.
