# 메이플 아이돌 키우기

활동과 미니게임을 통해 캐릭터를 성장시키는 육성 시뮬레이션입니다. MapleStory Worlds에서 PC와 모바일로 출시했고, 출시 이후 사용자 피드백과 플레이 중 확인한 문제를 반영해 개선했습니다.

**[게임 플레이](https://maplestoryworlds.nexon.com/ko/play/5264b689de3f40ecbf786ca024daea82/)**

## 게임 소개 영상 (PV)

[![메이플 아이돌 키우기 PV](https://img.youtube.com/vi/ICh-ejmLbco/hqdefault.jpg)](https://www.youtube.com/watch?v=ICh-ejmLbco)

메이플 아이돌 키우기 PV

| 구분 | 내용 |
| --- | --- |
| 개발 | 2026.06 시작, 출시 후 개선 |
| 팀 | 5명 |
| 환경 | MapleStory Worlds, mLua |
| 플랫폼 | PC, 모바일 |
| 수상 | 2026 메커톤 일반인 2회차 대상 |
| 주요 담당 | NPC 이벤트 진행, 미니게임, 연출 제작 도구, 다국어 처리 |

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

## 협업과 출시 이후 개선

기획자와 팀원이 복잡한 연출 데이터를 직접 편집할 수 있도록 웹 기반 시퀀서 도구를 제작했습니다. 도구와 게임의 연동 규칙을 맞추고, 기존 연출 유형의 편집 작업을 도구에서 처리할 수 있도록 했습니다.

- [시퀀서 화면과 편집 코드](Source/tools/performance-sequencer/index.html): 연동 규칙 설계, 검토 및 통합, 웹 UI 코드 작성에 AI 보조 활용

언어 변경 시 표시 텍스트를 갱신하는 다국어 처리도 구현했습니다.

- [다국어 처리 코드](Source/RootDesk/MyDesk/Localization/LocalizationLogic.mlua)
