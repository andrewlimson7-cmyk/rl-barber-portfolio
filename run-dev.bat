@echo off
setlocal enabledelayedexpansion

REM Set PATH to include Node.js
set PATH=C:\Program Files\nodejs;%PATH%

cd /d "C:\Users\PC 5\portfolio.html"
call npm run dev
