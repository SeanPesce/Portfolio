@ECHO OFF

REM This script executes "ng serve -o --host 0.0.0.0" for testing web applications on the local network
REM
REM Required software:
REM   - Node.js      -  https://nodejs.org/
REM   - Angular CLI  -  https://cli.angular.io/

SET tmp_ips_file=serve.bat.tmp.txt

REM Find all IPv4 addresses referenced in ipconfig and save to temporary file:
ipconfig | findstr IPv4 > %tmp_ips_file%
REM Read first IPv4 address from temporary IPs file
SET /p ipv4_addr=< %tmp_ips_file%
REM Trim garbage characters
SET ipv4_addr=%ipv4_addr:~39%
REM Delete temporary IPs file
DEL /F /Q "%tmp_ips_file%" 2> nul > nul

ECHO:
REM ECHO To connect from this device, open your web browser and navigate to:
REM ECHO   http://localhost:4200
REM ECHO:
ECHO To connect from another device on the network, open your web browser and navigate to:
ECHO   http://%ipv4_addr%:4200
ECHO:

ng serve -o --host 0.0.0.0

