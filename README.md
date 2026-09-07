# 메이플 아이돌 키우기

활동과 미니게임으로 캐릭터를 육성하고 최종 공연 목표에 도전하는 아이돌 육성 시뮬레이션입니다. PC와 모바일로 출시한 뒤 사용자 피드백과 실제 플레이에서 확인한 문제를 업데이트에 반영했습니다.

<table align="center">
  <tr>
    <th>구분</th>
    <th>내용</th>
  </tr>
  <tr>
    <td>개발</td>
    <td>2026.06~출시 후 개선 중</td>
  </tr>
  <tr>
    <td>팀</td>
    <td>5명</td>
  </tr>
  <tr>
    <td>환경</td>
    <td>MapleStory Worlds, mLua</td>
  </tr>
  <tr>
    <td>플랫폼</td>
    <td>PC, 모바일</td>
  </tr>
  <tr>
    <td>수상</td>
    <td>2026 메커톤 일반인 2회차 대상</td>
  </tr>
  <tr>
    <td>담당</td>
    <td>NPC 이벤트, 미니게임, 이벤트 실행, 연출 제작 도구, 다국어와 UI 연동</td>
  </tr>
  <tr>
    <td>게임 실행</td>
    <td><a href="https://maplestoryworlds.nexon.com/ko/play/5264b689de3f40ecbf786ca024daea82/">MapleStory Worlds</a></td>
  </tr>
</table>

## 주요 기여

- **NPC 진행 검증:** 서버에서 요청자와 세션, 진행 단계를 확인해 중복 요청과 지난 단계 요청이 진행 상태에 반영되지 않도록 했습니다.
- **미니게임 공통 실행:** 입력 방식, 목표, 시간 규칙과 실행 상황을 분리하고 PC와 모바일 입력을 같은 게임 규칙에 연결했습니다.
- **연출 제작 도구:** 기획자가 시간 순서에 따라 연출을 편집하는 웹 도구를 제작하고 게임의 연출 실행 코드에 연결했습니다.
- **콘텐츠 연동:** 이벤트 판정과 실행, 결과 적용을 구분하고 다국어 표시, 튜토리얼과 화면 전환을 연결했습니다.

## 구현 상세와 코드

<table align="center">
  <tr>
    <th>기능</th>
    <th>설명</th>
  </tr>
  <tr>
    <td><a href="Docs/Events.md">NPC와 이벤트 진행</a></td>
    <td>요청 검증, 세션, 실행과 완료 기록, 맵 이동</td>
  </tr>
  <tr>
    <td><a href="Docs/MiniGames.md">미니게임</a></td>
    <td>입력과 규칙, 세션 수명, PC와 모바일 UI, 최신 추가 기능</td>
  </tr>
  <tr>
    <td><a href="Docs/ToolsAndLocalization.md">연출 제작과 다국어</a></td>
    <td>타임라인 도구, 연출 실행과 결과, 언어 전환</td>
  </tr>
  <tr>
    <td><a href="Docs/UIAndProgression.md">튜토리얼과 UI 연동</a></td>
    <td>튜토리얼, 스케줄, 대화와 공동 모듈 연동</td>
  </tr>
  <tr>
    <td><a href="Docs/CodeIndex.md">전체 코드 목록</a></td>
    <td>기능별 파일 탐색</td>
  </tr>
  <tr>
    <td><a href="Docs/SourceMap.md">소스 출처</a></td>
    <td>원본 경로, 기준 커밋과 공동 작업</td>
  </tr>
</table>

달고나 미니게임과 최신 변경 사항은 서비스 미배포 상태입니다.

## 게임 소개 영상

<table align="center" width="100%"><tr><td width="15%"></td><td width="70%" align="center">
  <a href="https://www.youtube.com/watch?v=ICh-ejmLbco">
    <img src="https://img.youtube.com/vi/ICh-ejmLbco/hqdefault.jpg" alt="메이플 아이돌 키우기 소개 영상" width="100%">
  </a>
  <br>
  <sub>메이플 아이돌 키우기 PV</sub>
</td><td width="15%"></td></tr></table>
