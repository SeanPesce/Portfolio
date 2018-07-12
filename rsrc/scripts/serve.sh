#!/usr/bin/env bash

# This script executes "ng serve -o --host 0.0.0.0" for testing web applications on the local network.
#
# ##############################
# ######### IMPORTANT: #########
# To run this script on Windows, open PowerShell and use the following command: "bash ./serve.sh"
#
#
#
# Required software:
#   - Node.js      -  https://nodejs.org/
#   - Angular CLI  -  https://cli.angular.io/

tmp_ips_file="serve.bat.tmp.txt"

# Find all IPv4 addresses referenced in ipconfig and save to temporary file:
ip route get 1 | awk '{print $NF;exit}' | sed 's/\r$//' > $tmp_ips_file

# Read first IPv4 address from temporary IPs file
read -r ipv4_addr<$tmp_ips_file
# Delete temporary IPs file
rm -f $tmp_ips_file
# Build full host address
ipv4_addr="http://$ipv4_addr:4200"


echo
#echo To connect from this device, open your web browser and navigate to:
#echo   http://localhost:4200
#echo
echo "To connect from another device on the network, open your web browser and navigate to:"
echo "    $ipv4_addr"
echo

ng serve -o --host 0.0.0.0
