# 메이플 아이돌 키우기

제한된 기간 동안 활동과 미니게임으로 캐릭터를 육성하고, 최종 공연 목표에 도전하는 아이돌 육성 시뮬레이션입니다. PC와 모바일로 출시한 뒤 사용자 피드백과 실제 플레이에서 확인한 문제를 업데이트에 반영했습니다.

| 구분 | 내용 |
| --- | --- |
| 개발 | 2026.06 시작, 출시 후 개선 |
| 팀 | 5명 |
| 환경 | MapleStory Worlds, mLua |
| 플랫폼 | PC, 모바일 |
| 수상 | 2026 메커톤 일반인 2회차 대상 |
| 주요 담당 | NPC 이벤트 진행, 이벤트 실행 구조, 미니게임, 연출 제작 도구, 다국어 처리 |
| 게임 실행 | [MapleStory Worlds](https://maplestoryworlds.nexon.com/ko/play/5264b689de3f40ecbf786ca024daea82/) |

## 게임 소개 영상

<p align="center">
  <a href="https://www.youtube.com/watch?v=ICh-ejmLbco">
    <img src="https://img.youtube.com/vi/ICh-ejmLbco/hqdefault.jpg" alt="메이플 아이돌 키우기 소개 영상">
  </a>
  <br>
  <sub>메이플 아이돌 키우기 PV</sub>
</p>

## 핵심 구현

### 1. 중복 요청과 이전 단계 요청을 검증하는 NPC 상호작용

사용자가 입력을 반복하거나 이전 단계의 요청이 늦게 도착했을 때, 같은 진행 상태를 다시 변경하지 않도록 서버 검증을 구현했습니다. 요청자와 현재 진행 상태를 확인하고, 세션과 진행 단계를 식별하는 값을 함께 검사하도록 했습니다.

단계 검증뿐 아니라 시작 도중 실패한 요청의 정리 범위도 나누었습니다. 첫 이벤트 실행 전 내부 오류인 경우에만 활동에 소모한 자원을 되돌리는 경로를 두었습니다.

- [NpcEventManager](Source/RootDesk/MyDesk/Event/NpcEventManager.mlua)
- [상호작용 진입점](Source/RootDesk/MyDesk/Event/NpcEventTriggerComponent.mlua)

### 2. 입력과 게임 규칙을 분리한 미니게임 실행 구조

연속 입력, 타이밍 판정, 방향 입력, 드래그처럼 입력 방식이 다른 미니게임을 공통 실행 흐름으로 연결했습니다. 입력 수집과 목표 판정, 시간 제한, 결과 처리를 분리하여 입력이 다른 게임도 시작과 종료 처리를 공유하도록 했습니다.

PC와 모바일에서의 동작을 확인했고, 일반 이벤트와 연출 중 실행되는 미니게임에 공통 구조를 사용했습니다.

- [세션 관리](Source/RootDesk/MyDesk/MiniGame/MiniGameManager.mlua)
- [입력 전달](Source/RootDesk/MyDesk/MiniGame/MiniGameInputHubLogic.mlua)
- [규칙 실행](Source/RootDesk/MyDesk/MiniGame/Rule/MiniGameRuleEngine.mlua)
- [입력 방식](Source/RootDesk/MyDesk/MiniGame/Data/EMiniGameInputType.mlua), [목표](Source/RootDesk/MyDesk/MiniGame/Data/EMiniGameObjectiveType.mlua), [시간 규칙](Source/RootDesk/MyDesk/MiniGame/Data/EMiniGameTimeMode.mlua)

### 3. 판정과 실행, 결과 적용을 분리한 이벤트 파이프라인

활동과 캐릭터 상태, 발생 횟수, 확률, 우선순위를 조합해 실행할 이벤트를 판정하도록 구성했습니다. 판정 이후에는 대화, 선택지, 미니게임 실행과 결과 적용, 완료 기록을 분리하여 각 단계의 책임과 실패 지점을 구분했습니다.

NPC 상호작용과 일반 활동에서 같은 이벤트 실행 흐름을 사용하며, 결과가 적용된 뒤에만 완료 상태를 기록하도록 처리했습니다.

- [이벤트 조건 판정](Source/RootDesk/MyDesk/Event/EventTriggerManager.mlua)
- [실행 유형 분기](Source/RootDesk/MyDesk/Event/EventExecutor.mlua)
- [결과 적용](Source/RootDesk/MyDesk/Event/EventResultHandler.mlua), [완료 기록](Source/RootDesk/MyDesk/Event/EventCompletionManager.mlua)

## 협업과 출시 이후 개선

기획자와 팀원이 복잡한 연출 데이터를 직접 편집할 수 있도록 웹 기반 시퀀서 도구를 제작했습니다. 도구와 게임의 연동 규칙을 맞추고, 기존 연출 유형의 편집 작업을 도구에서 처리할 수 있도록 했습니다.

- [시퀀서 화면과 편집 코드](Source/tools/performance-sequencer/index.html): 연동 규칙 설계, 검토 및 통합, 웹 UI 코드 작성에 AI 보조 활용
- [게임 내 연출 실행](Source/RootDesk/MyDesk/Performance/PerformanceConductor.mlua)
- [연출 데이터 구조](Source/RootDesk/MyDesk/Performance/Data/PerformanceCueRow.mlua), [연출 유형](Source/RootDesk/MyDesk/Performance/Data/EPerformanceCueType.mlua)

언어 변경 시 표시 텍스트와 런타임 캐시를 갱신하고, 변수 치환과 서식 태그가 포함된 문장을 공통 처리하도록 구현했습니다.

- [다국어 데이터와 캐시](Source/RootDesk/MyDesk/Localization/LocalizationLogic.mlua), [캐시 갱신](Source/RootDesk/MyDesk/Localization/LocalizationMasterRefreshLogic.mlua)
- [표시 컴포넌트](Source/RootDesk/MyDesk/Localization/LocalizedTextComponent.mlua), [치환 문자열 처리](Source/RootDesk/MyDesk/Utils/TemplateTextFormatter.mlua)
