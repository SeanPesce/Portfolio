#!/usr/bin/env bash

# This script executes "ng build --prod" which compiles a production-ready build of the web app.
# 
# NOTE: This script is unnecessary if the user is using "deploy.sh" to deploy the web app directly
#       to GitHub pages.
#
#
# ##############################
# ######### IMPORTANT: #########
# To run this script on Windows, open PowerShell and use the following command: "bash ./build.sh"
#
#
#
# Required software:
#   - Node.js      -  https://nodejs.org/
#   - Angular CLI  -  https://cli.angular.io/

ng build --prod
