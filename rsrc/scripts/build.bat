@ECHO OFF

REM This script executes "ng build --prod" which compiles a production-ready build of the web app.
REM
REM NOTE: This script is unnecessary if the user is using "deploy.bat" to deploy the web app directly
REM       to GitHub pages.
REM
REM Required software:
REM   - Node.js      -  https://nodejs.org/
REM   - Angular CLI  -  https://cli.angular.io/

ng build --prod

