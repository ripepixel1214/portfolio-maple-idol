@echo off
chcp 65001 >nul
title Performance Sequencer Server
cd /d "%~dp0"
echo.
echo   ==================================================
echo    Performance Sequencer  =^>  http://localhost:7788
echo    이 창은 종료 X!
echo   ==================================================
echo.
start "" http://localhost:7788
node serve.cjs
echo.
echo   Server stopped (or port 7788 already in use).
pause
