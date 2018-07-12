@ECHO OFF

REM This script executes "ng build --prod" which compiles a production-ready build of the web app,
REM and then runs "angular-cli-ghpages --repo=https://%GITHUB_USERNAME%:%GITHUB_PASSWORD%@github.com/%GITHUB_REPOSITORY%.git"
REM to deploy the web app to GitHub pages.
REM
REM Required software:
REM   - Node.js              -  https://nodejs.org/
REM   - Angular CLI          -  https://cli.angular.io/
REM   - angular-cli-ghpages  -  https://www.npmjs.com/package/angular-cli-ghpages

SET gh_user_file=GH_USER
SET gh_pw_file=GH_PW
SET gh_repo_file=GH_REPO


REM Compile production-ready build
ECHO:
ECHO Building...
ECHO ng build --prod
cmd /C ng build --prod
ECHO:

REM Read GitHub data & build command
SET /p gh_pages_cmd=< %gh_user_file%
SET gh_pages_cmd=angular-cli-ghpages --repo=https://%gh_pages_cmd%:
SET gh_pages_cmd_public=%gh_pages_cmd%********@github.com/
SET /p gh_data_tmp=< %gh_pw_file%
SET gh_pages_cmd=%gh_pages_cmd%%gh_data_tmp%@github.com/
SET /p gh_data_tmp=< %gh_repo_file%
SET gh_pages_cmd=%gh_pages_cmd%%gh_data_tmp%.git
SET gh_pages_cmd_public=%gh_pages_cmd_public%%gh_data_tmp%.git

REM Deploy to GitHub pages
ECHO Deploying...
ECHO %gh_pages_cmd_public%
cmd /C %gh_pages_cmd%
ECHO:

REM Erase existing command string
SET gh_pages_cmd=%gh_pages_cmd_public%
