@echo off
call npm ci
if errorlevel 1 exit /b %errorlevel%

call npm test
if errorlevel 1 exit /b %errorlevel%

call npm run build
if errorlevel 1 exit /b %errorlevel%

node dist\hello.js
exit /b %errorlevel%
