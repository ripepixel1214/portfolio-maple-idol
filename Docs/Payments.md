# 결제와 재화 저장

[프로젝트](../README.md) / [전체 코드](CodeIndex.md)

## 플랫폼 구매 콜백과 지급

유료 결제에서는 같은 구매 통지가 다시 오거나 저장 응답이 시간 초과돼도 실제 저장은 끝났을 수 있습니다. 구매 ID를 기준으로 반영 여부를 확인하고, 남은 지급과 기록을 이어서 처리하도록 구성했습니다.

[OnBeginPlay](../Source/RootDesk/MyDesk/Shop/WorldShopPurchaseLogic.mlua#L21)에서 `WorldShopService.SetProcessPurchaseCallback`에 콜백을 등록합니다. [ProcessPurchase](../Source/RootDesk/MyDesk/Shop/WorldShopPurchaseLogic.mlua#L50)는 플랫폼 구매 정보로 상품을 확인하고 [TryProcessPurchase](../Source/RootDesk/MyDesk/Currency/DiamondWalletLogic.mlua#L94)에 전달합니다. 지갑 저장 결과는 플랫폼 콜백의 반환값으로 연결했습니다.

## 잔액과 거래의 조건부 저장

[ApplyOperation](../Source/RootDesk/MyDesk/Currency/DiamondWalletStorage.mlua#L265)은 읽어 온 지갑과 동일 거래의 처리 이력을 확인합니다. 새 잔액과 미완료 거래를 함께 직렬화하고 `UserDataStorage.UpdateAndWait(key, expectedValue, newValue)`로 읽었던 값이 현재 값과 일치할 때만 갱신합니다.

같은 거래가 이미 반영돼 있으면 잔액을 다시 변경하지 않고 거래 내용과 남은 처리를 확인합니다. 충돌이나 시간 초과가 발생하면 지갑과 거래 기록을 재조회한 뒤 재처리 여부를 판단합니다.

| 데이터 | 역할 |
| --- | --- |
| [DiamondWalletData](../Source/RootDesk/MyDesk/Currency/DiamondWalletData.mlua) | 잔액, 갱신 번호와 미완료 거래 |
| [DiamondWalletOperationData](../Source/RootDesk/MyDesk/Currency/DiamondWalletOperationData.mlua) | 거래 ID와 종류, 차감과 지급액, 상품과 캐릭터 ID |
| [DiamondWalletResultData](../Source/RootDesk/MyDesk/Currency/DiamondWalletResultData.mlua) | 저장 결과와 확인한 지갑 상태 |

## 미완료 거래 복구

[FinalizePendingOperation](../Source/RootDesk/MyDesk/Currency/DiamondWalletStorage.mlua#L221)은 필요한 상품 지급과 별도 거래 기록을 확인한 뒤 지갑에서 미완료 거래를 제거합니다. [DeliverDiamondShopPurchase](../Source/RootDesk/MyDesk/Shop/ShopItemStorage.mlua#L413)는 지급 대상의 보유 정보에 같은 거래를 멱등 반영합니다.

유료 재화 충전은 지갑 반영 후 성공을 반환하고 남은 거래 기록을 이후 복구합니다. 상점 구매는 상품 지급과 기록 확인까지 완료 조건에 포함합니다. 저장이나 지급을 확인하지 못하면 복구 정보를 유지하고 다음 거래나 로드에서 이어갑니다.

## 수량형 상품 지급과 구매 재시도

[DiamondWalletOperationData](../SourceUpdates/abbb12c/RootDesk/MyDesk/Currency/DiamondWalletOperationData.mlua)는 지급할 아이템이나 캐릭터 목록이 비어 있으면 해당 필드를 직렬화에서 생략합니다. 수량형 상품을 구매할 때는 차감액과 지급할 아이템별 수량을 같은 거래에 기록합니다.

저장이 끝난 구매 요청이 다시 오면 [ApplyOperation](../SourceUpdates/abbb12c/RootDesk/MyDesk/Currency/DiamondWalletStorage.mlua#L275)이 이미 처리한 거래를 찾아 남은 처리를 이어갑니다. 확률형 상품의 응답에는 저장된 지급 목록을 사용해 재시도에도 같은 구매 결과를 반환합니다. [DeliverDiamondShopPurchase](../SourceUpdates/abbb12c/RootDesk/MyDesk/Shop/ShopItemStorage.mlua#L441)는 캐릭터와 상품 보유 정보를 반영한 뒤 같은 거래 ID로 수량형 지급을 요청합니다. [ItemStorage](../SourceUpdates/abbb12c/RootDesk/MyDesk/Item/ItemStorage.mlua)가 지급 내역을 대조해 같은 수량을 다시 더하지 않도록 합니다.

## 일반 상점과 검증 코드

일반 상점 구매는 [ShopItemStorage](../Source/RootDesk/MyDesk/Shop/ShopItemStorage.mlua)의 `TransactSetAndWait` 경로에서 잔액과 상품 보유 정보, 필요한 캐릭터 데이터를 묶어 저장합니다. 유료 지갑의 조건부 갱신과 미완료 거래 복구는 별도 경로입니다.

[RunStorageScenarios](../Source/RootDesk/MyDesk/Currency/Testing/DiamondWalletVerificationLogic.mlua#L16)에는 중복 거래, 저장 전후 시간 초과, CAS 충돌과 거래 기록 실패를 주입하는 시나리오를 정리했습니다.
