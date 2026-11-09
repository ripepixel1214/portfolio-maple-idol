# 결제와 재화 저장

[프로젝트](../README.md) / [전체 코드](CodeIndex.md)

## 플랫폼 구매 콜백과 지급

같은 구매 통지가 다시 들어오거나 저장 응답이 시간 초과되는 경우를 고려했습니다. 응답이 없었어도 잔액은 이미 바뀌었을 수 있어, 다시 지급하기 전에 구매 ID로 반영 여부부터 확인하도록 했습니다.

[OnBeginPlay](../Source/RootDesk/MyDesk/Shop/WorldShopPurchaseLogic.mlua#L21)에서 `WorldShopService.SetProcessPurchaseCallback`에 콜백을 등록합니다. [ProcessPurchase](../Source/RootDesk/MyDesk/Shop/WorldShopPurchaseLogic.mlua#L50)에서 구매 정보와 상품을 확인해 [TryProcessPurchase](../Source/RootDesk/MyDesk/Currency/DiamondWalletLogic.mlua#L94)에 넘깁니다. 지갑에 저장한 결과에 따라 구매 콜백에 성공 또는 실패를 돌려줍니다.

## 잔액과 거래의 조건부 저장

[ApplyOperation](../Source/RootDesk/MyDesk/Currency/DiamondWalletStorage.mlua#L265)은 지갑과 거래 기록에서 같은 거래를 먼저 찾습니다. 새 잔액과 미완료 거래는 하나로 직렬화합니다. `UserDataStorage.UpdateAndWait(key, expectedValue, newValue)`를 써서 읽어 온 값이 저장소의 현재 값과 같을 때만 갱신했습니다.

다른 거래가 먼저 값을 바꾸거나 응답이 시간 초과되면 지갑과 거래 기록을 다시 읽습니다. 이미 반영된 잔액은 그대로 두고 남은 지급과 기록만 이어갑니다.

| 데이터 | 역할 |
| --- | --- |
| [DiamondWalletData](../Source/RootDesk/MyDesk/Currency/DiamondWalletData.mlua) | 잔액, 갱신 번호와 미완료 거래 |
| [DiamondWalletOperationData](../Source/RootDesk/MyDesk/Currency/DiamondWalletOperationData.mlua) | 거래 ID와 종류, 차감과 지급액, 상품과 캐릭터 ID |
| [DiamondWalletResultData](../Source/RootDesk/MyDesk/Currency/DiamondWalletResultData.mlua) | 저장 결과와 확인한 지갑 상태 |

## 미완료 거래 복구

[FinalizePendingOperation](../Source/RootDesk/MyDesk/Currency/DiamondWalletStorage.mlua#L221)에서 필요한 상품 지급과 거래 기록을 확인한 뒤 지갑의 미완료 표시를 지웁니다. [DeliverDiamondShopPurchase](../Source/RootDesk/MyDesk/Shop/ShopItemStorage.mlua#L413)는 같은 거래가 다시 들어와도 이미 지급한 상품을 한 번 더 주지 않도록 보유 정보를 확인합니다.

재화 충전은 지갑 반영이 확인되면 성공을 반환하고 거래 기록은 이후에 마칠 수 있습니다. 상점 구매는 상품 지급과 기록을 확인한 뒤 성공을 반환합니다. 남은 일은 지갑에 보관해 다음 거래나 로드 때 이어갑니다.

## 수량형 상품 지급과 구매 재시도

[DiamondWalletOperationData](../SourceUpdates/abbb12c/RootDesk/MyDesk/Currency/DiamondWalletOperationData.mlua)를 직렬화할 때 비어 있는 아이템과 캐릭터 목록은 생략합니다. 수량형 상품은 차감할 재화와 아이템별 지급 수량을 같은 거래에 적습니다.

[ApplyOperation](../SourceUpdates/abbb12c/RootDesk/MyDesk/Currency/DiamondWalletStorage.mlua#L275)에서 이미 저장한 확률형 상품 구매를 찾으면 그때 결정한 상품을 돌려줍니다. [DeliverDiamondShopPurchase](../SourceUpdates/abbb12c/RootDesk/MyDesk/Shop/ShopItemStorage.mlua#L441)는 캐릭터와 상품 보유 정보를 반영한 뒤 같은 거래 ID로 수량 지급을 요청합니다. [ItemStorage](../SourceUpdates/abbb12c/RootDesk/MyDesk/Item/ItemStorage.mlua)에서 지급 내역을 확인해 같은 수량이 두 번 더해지지 않게 했습니다.

## 일반 상점과 검증 코드

일반 상점은 [ShopItemStorage](../Source/RootDesk/MyDesk/Shop/ShopItemStorage.mlua)의 `TransactSetAndWait`로 잔액, 상품 보유 정보와 필요한 캐릭터 데이터를 함께 저장합니다. 유료 지갑은 위의 조건부 저장과 복구를 사용합니다.

[거래 테스트 코드](../Source/RootDesk/MyDesk/Currency/Testing/DiamondWalletVerificationLogic.mlua#L16)에는 같은 거래를 다시 받은 경우, 저장 전후의 시간 초과, CAS 충돌과 거래 기록 실패를 넣었습니다.
