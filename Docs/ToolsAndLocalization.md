# 연출 제작과 다국어

[프로젝트](../README.md) / [전체 코드](CodeIndex.md)

## 타임라인 편집 도구

공연을 고칠 때 연출 데이터를 직접 수정하는 작업을 줄이려고 웹 [시퀀서](../SourceUpdates/abbb12c/tools/performance-sequencer/index.html)를 만들었습니다. 기획자와 팀원은 타임라인에서 카메라, 캐릭터 표정과 효과음의 시점을 바꾸고 편집한 공연을 게임에 넣었습니다.

웹 UI를 만들 때 AI를 활용했습니다. 편집 기능과 저장 규칙을 정하고, 코드를 검토해 게임에 연결하는 작업을 맡았습니다. 새로운 연출 종류를 추가할 때는 게임 쪽 재생 코드도 필요합니다.

### 편집한 연출을 게임에 넣기

저장 버튼을 누르면 두 CSV에서 같은 공연 ID의 행만 바꿉니다. 불러온 뒤 원본 공연이 바뀌었으면 저장을 멈춰 다른 사람의 편집을 덮어쓰지 않게 했습니다. 이때 작업한 큐를 먼저 내보낸 다음 최신 공연을 다시 불러올 수 있습니다. 프로젝트에 저장한 결과는 Maker에서 Refresh로 반영합니다.

`gatherHeader`와 `gatherCues`가 편집 내용을 모으고, `saveToProject`가 `/api/save`로 보냅니다. [serve.cjs](../SourceUpdates/abbb12c/tools/performance-sequencer/serve.cjs)에서 요청을 받습니다. [csv-store.cjs](../SourceUpdates/abbb12c/tools/performance-sequencer/csv-store.cjs)는 `PerformanceTable.csv`와 `PerformanceCueTable.csv`를 임시 파일에 쓴 뒤 하나씩 교체합니다. 도중에 실패하면 이미 바꾼 파일을 백업에서 되돌리게 했습니다.

Windows에서는 [start-sequencer.bat](../SourceUpdates/abbb12c/tools/performance-sequencer/start-sequencer.bat)을 실행합니다. [실행 안내](../SourceUpdates/abbb12c/tools/performance-sequencer/README.md)대로 Node.js 22 이상에서 `node serve.cjs`를 실행하고 `http://127.0.0.1:7788`을 열 수도 있습니다. 공개본에서도 CSV를 가져와 편집하고 내보낼 수 있습니다. 프로젝트에 직접 저장하려면 `RootDesk/MyDesk/Performance/Data`에 원본 CSV 두 개가 필요합니다.

![공연 연출을 트랙별로 배치한 시퀀서 화면](../Media/sequencer-timeline.jpg)

![센터 캐릭터의 표정과 적용 시간을 편집하는 속성 패널](../Media/sequencer-expression.jpg)

[첫 데뷔 스테이지 공연 재생 영상 (30초)](../Media/performance-demo.mp4)

## 게임의 연출 실행과 결과

연출 시점과 종류는 [PerformanceCueRow](../SourceUpdates/abbb12c/RootDesk/MyDesk/Performance/Data/PerformanceCueRow.mlua)와 [EPerformanceCueType](../Source/RootDesk/MyDesk/Performance/Data/EPerformanceCueType.mlua)에 담습니다. [PerformanceConductor](../SourceUpdates/abbb12c/RootDesk/MyDesk/Performance/PerformanceConductor.mlua)가 게임에서 이 큐를 읽습니다.

`PerformanceConductor.OnUpdate`는 로컬 재생 시간과 다음 큐의 순번을 확인합니다. 시작 시점이 된 큐는 `DispatchCue`에서 종류에 맞는 핸들러로 넘겨 게임의 캐릭터, 카메라와 UI에 반영합니다. 위의 영상은 게임에서 재생한 장면입니다.

| 역할 | 코드 |
| --- | --- |
| 연출 효과 | [PerformanceEffectLogic](../Source/RootDesk/MyDesk/Performance/PerformanceEffectLogic.mlua) |
| 점수 계산과 결과 화면 | [PerformanceResultManager](../Source/RootDesk/MyDesk/Performance/PerformanceResultManager.mlua), [PerformanceScoreUILogic](../Source/RootDesk/MyDesk/Performance/PerformanceScoreUILogic.mlua) |
| 공연이 끝난 뒤 포토카드와 이동 | [PerformancePostFlowLogic](../Source/RootDesk/MyDesk/Performance/PerformancePostFlowLogic.mlua), [PerformancePhotocardUILogic](../Source/RootDesk/MyDesk/Performance/PerformancePhotocardUILogic.mlua) |
| 반복 연출 컴포넌트 | [AudienceJumpComponent](../Source/RootDesk/MyDesk/Performance/AudienceJumpComponent.mlua), [LightStickSwayComponent](../Source/RootDesk/MyDesk/Performance/LightStickSwayComponent.mlua), [SpotlightSwayComponent](../Source/RootDesk/MyDesk/Performance/SpotlightSwayComponent.mlua) |

## 언어 표시와 화면 연동

[LocaleTextUtil](../Source/RootDesk/MyDesk/Utils/LocaleTextUtil.mlua)은 플랫폼의 `LocalizationService`에서 현재 언어에 맞는 문구를 가져옵니다. [LocalizedFormatTextComponent](../Source/RootDesk/MyDesk/UI/LocalizedFormatTextComponent.mlua)는 문구에 게임 중 바뀌는 값을 채우고, [LocalizedNameTagComponent](../Source/RootDesk/MyDesk/Localization/LocalizedNameTagComponent.mlua)는 이름표를 갱신합니다.

다국어를 처음 연결한 뒤 팀에서 함께 수정했습니다. 대화에 문구를 표시하는 코드는 [Dialog](../Source/RootDesk/MyDesk/Dialog/)에 있고, 문구에 값을 넣는 처리는 [TemplateTextFormatter](../Source/RootDesk/MyDesk/Utils/TemplateTextFormatter.mlua)에서 합니다.
