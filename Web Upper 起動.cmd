@echo off
setlocal
cd /d "%~dp0"
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0create-windows-shortcut.ps1" >nul 2>nul
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0launch-web-upper.ps1"
endlocal
