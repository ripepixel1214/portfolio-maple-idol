# 연출 제작과 다국어

[프로젝트](../README.md) / [전체 코드](CodeIndex.md)

## 타임라인 편집 도구

기획자가 시간 순서에 따라 복잡한 연출 데이터를 직접 편집할 수 있도록 웹 기반 [시퀀서](../Source/tools/performance-sequencer/index.html)를 제작했습니다. 연출의 시점과 속성을 화면에서 편집하고 게임에서 사용하는 데이터로 연결해, 데이터를 직접 수정하는 작업을 줄였습니다. 실제 기획자와 팀원이 사용했습니다.

연동 규칙의 설계, 검토와 게임 통합을 담당했으며 웹 UI 코드 작성에는 AI 보조를 활용했습니다. 지원되는 연출 유형의 편집은 도구에서 처리하지만 새로운 연출 기능에는 런타임 구현이 필요합니다.

### 편집 결과가 게임 데이터로 이어지는 경로

`index.html`의 `gatherHeader`, `gatherCues`가 편집 내용을 구성하고 `saveToProject`가 로컬 서버의 `/api/save`에 전달합니다. [serve.cjs](../Source/tools/performance-sequencer/serve.cjs)의 `handleSave`는 같은 공연 ID의 행을 교체하고 다른 공연의 행은 남겨 `PerformanceCueTable.csv`와 `PerformanceTable.csv`에 기록합니다. 이후 Maker에서 데이터를 새로고침하는 작업이 필요합니다.

도구 폴더에서 `node serve.cjs`를 실행한 뒤 `http://localhost:7788`을 엽니다. Node.js 기본 모듈만 사용합니다. 저장 위치는 서버 파일에서 두 단계 위의 `RootDesk/MyDesk/Performance/Data`이며, 이 발췌본에서는 `Source/RootDesk/MyDesk/Performance/Data`입니다. 원본 CSV는 포함하지 않았습니다. HTML을 직접 열 때는 CSV 가져오기와 내보내기를 사용하며 프로젝트 저장에는 서버가 필요합니다.

두 CSV는 순서대로 기록하며 하나의 트랜잭션으로 교체하지 않습니다.

## 게임의 연출 실행과 결과

[PerformanceCueRow](../Source/RootDesk/MyDesk/Performance/Data/PerformanceCueRow.mlua)와 [EPerformanceCueType](../Source/RootDesk/MyDesk/Performance/Data/EPerformanceCueType.mlua)에 연출 데이터와 유형을 정의하고, [PerformanceConductor](../Source/RootDesk/MyDesk/Performance/PerformanceConductor.mlua)에서 실행하도록 연결했습니다.

`PerformanceConductor.OnUpdate`는 로컬 재생 시간과 다음 큐 인덱스를 기준으로 실행 시점이 된 큐를 `DispatchCue`에 넘깁니다. 연출 유형별 처리는 핸들러로 분기합니다. 편집 도구의 미리보기와 게임 엔티티, 카메라 및 미니게임을 사용하는 실제 공연 재생은 구분됩니다.

| 역할 | 코드 |
| --- | --- |
| 연출 효과 | [PerformanceEffectLogic](../Source/RootDesk/MyDesk/Performance/PerformanceEffectLogic.mlua) |
| 결과 계산과 표시 연결 | [PerformanceResultManager](../Source/RootDesk/MyDesk/Performance/PerformanceResultManager.mlua), [PerformanceScoreUILogic](../Source/RootDesk/MyDesk/Performance/PerformanceScoreUILogic.mlua) |
| 결과 이후 화면과 이동 | [PerformancePostFlowLogic](../Source/RootDesk/MyDesk/Performance/PerformancePostFlowLogic.mlua), [PerformancePhotocardUILogic](../Source/RootDesk/MyDesk/Performance/PerformancePhotocardUILogic.mlua) |
| 반복 연출 컴포넌트 | [AudienceJumpComponent](../Source/RootDesk/MyDesk/Performance/AudienceJumpComponent.mlua), [LightStickSwayComponent](../Source/RootDesk/MyDesk/Performance/LightStickSwayComponent.mlua), [SpotlightSwayComponent](../Source/RootDesk/MyDesk/Performance/SpotlightSwayComponent.mlua) |

## 언어 변경과 화면 갱신

[LocalizationLogic](../Source/RootDesk/MyDesk/Localization/LocalizationLogic.mlua)에 텍스트 조회와 캐시를 모으고, 언어 변경을 화면 갱신으로 연결했습니다. [LocalizedTextComponent](../Source/RootDesk/MyDesk/Localization/LocalizedTextComponent.mlua)는 일반 텍스트, [LocalizedNameTagComponent](../Source/RootDesk/MyDesk/Localization/LocalizedNameTagComponent.mlua)는 이름표에 적용했습니다.

[LocalizationMasterRefreshLogic](../Source/RootDesk/MyDesk/Localization/LocalizationMasterRefreshLogic.mlua)에서 관련 데이터를 갱신하고, [TemplateTextFormatter](../Source/RootDesk/MyDesk/Utils/TemplateTextFormatter.mlua)에서 변수 치환과 서식 태그를 공통 처리하도록 했습니다. 대화 시스템의 다국어 연동은 [Dialog](../Source/RootDesk/MyDesk/Dialog/)에 수록했습니다.
