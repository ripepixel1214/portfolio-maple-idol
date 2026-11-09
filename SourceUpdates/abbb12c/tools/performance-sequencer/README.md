# 공연 시퀀서

Windows에서는 start-sequencer.bat을 실행합니다. 다른 환경에서는 이 폴더에서 Node.js 22 이상으로 node serve.cjs를 실행하고 http://127.0.0.1:7788 을 엽니다.

1. 작업 전에 Git으로 팀의 최신 공연 CSV를 받습니다.
2. 시퀀서에서 공연을 불러오거나 기존 공연 큐 CSV를 가져와 편집합니다.
3. 프로젝트에 저장하면 로컬의 PerformanceTable.csv와 PerformanceCueTable.csv에 반영됩니다. 변경된 CSV를 검토한 뒤 Git으로 커밋하고 공유합니다.
4. Maker에서는 Refresh로 로컬 CSV를 반영합니다.

저장 전 로컬 공연이 바뀌었다는 메시지가 나오면, 편집한 큐를 CSV로 내보내 보관한 후 최신 공연을 다시 불러옵니다.
