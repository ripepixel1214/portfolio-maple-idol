# 메이플 아이돌 키우기

활동과 미니게임으로 아이돌을 키워 최종 공연에 도전하는 육성 시뮬레이션입니다. PC와 모바일로 출시했습니다.

<table align="center" width="100%">
  <tr>
    <th width="360">구분</th>
    <th width="840">내용</th>
  </tr>
  <tr>
    <td>개발</td>
    <td>2026.06~ (출시 후 개선 중)</td>
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
    <td>미니게임, NPC 대화와 이벤트, 결제와 재화 저장, 공연 시퀀서, 다국어와 UI</td>
  </tr>
  <tr>
    <td>게임 실행</td>
    <td><a href="https://maplestoryworlds.nexon.com/ko/play/5264b689de3f40ecbf786ca024daea82/">MapleStory Worlds</a></td>
  </tr>
</table>

## 주요 기여

- **NPC 대화:** 같은 버튼을 두 번 누르거나 이전 단계 요청이 늦게 들어와도 대화가 다시 진행되지 않도록, 서버에서 요청자와 현재 단계를 확인하게 했습니다.
- **미니게임:** 게임을 추가할 때마다 시작과 종료를 다시 만들지 않도록 공통 API를 만들었습니다. 낚시는 서버 상태를 받는 주기와 화면을 그리는 주기를 나눴습니다.
- **결제:** 저장 응답을 못 받아도 잔액은 이미 바뀌었을 수 있어서, 거래 ID로 반영 여부부터 확인했습니다. 지갑에 반영된 거래는 남은 지급과 기록만 이어가게 했습니다.
- **공연 시퀀서:** 기획자가 카메라, 캐릭터 동작, 효과음의 시점을 타임라인에서 편집해 게임에 넣을 수 있도록 웹 도구를 만들었습니다.
- **이벤트와 화면:** 이벤트 조건 확인, 실행, 결과 반영을 나눴습니다. 튜토리얼, 화면 전환과 다국어 표시도 게임 진행에 맞춰 작업했습니다.

## 구현 상세와 코드

<table align="center" width="100%">
  <tr>
    <th width="360">기능</th>
    <th width="840">설명</th>
  </tr>
  <tr>
    <td><a href="Docs/Events.md">NPC와 이벤트 진행</a></td>
    <td>대화 요청 확인, 선택지와 보상, 맵 이동</td>
  </tr>
  <tr>
    <td><a href="Docs/MiniGames.md">미니게임</a></td>
    <td>공통 시작과 종료, 낚시 화면 갱신, 서버 판정</td>
  </tr>
  <tr>
    <td><a href="Docs/Payments.md">결제와 재화 저장</a></td>
    <td>구매 콜백, 잔액 저장, 남은 지급 복구</td>
  </tr>
  <tr>
    <td><a href="Docs/ToolsAndLocalization.md">연출 제작과 다국어</a></td>
    <td>타임라인 편집, 게임에서 공연 재생, 다국어 표시</td>
  </tr>
  <tr>
    <td><a href="Docs/UIAndProgression.md">튜토리얼과 UI 연동</a></td>
    <td>튜토리얼, 주간 스케줄, 대화 화면</td>
  </tr>
  <tr>
    <td><a href="Docs/CodeIndex.md">전체 코드 목록</a></td>
    <td>기능별 코드 파일</td>
  </tr>
  <tr>
    <td><a href="Docs/SourceMap.md">소스 출처</a></td>
    <td>원본 버전과 파일별 Git 기록</td>
  </tr>
</table>

## 게임 소개 영상

<table align="center" width="100%"><tr><td width="1200" align="center">
  <a href="https://www.youtube.com/watch?v=ICh-ejmLbco">
    <img src="https://img.youtube.com/vi/ICh-ejmLbco/hqdefault.jpg" alt="메이플 아이돌 키우기 소개 영상" width="100%">
  </a>
</td></tr></table>
