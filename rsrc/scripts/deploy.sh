#!/usr/bin/env bash

# This script executes "ng build --prod" which compiles a production-ready build of the web app,
# and then runs "angular-cli-ghpages --repo=https://$GITHUB_USERNAME:$GITHUB_PASSWORD@github.com/$GITHUB_REPOSITORY.git"
# to deploy the web app to GitHub pages.
#
#
# ##############################
# ######### IMPORTANT: #########
# To run this script on Windows, open PowerShell and use the following command: "bash ./deploy.sh"
#
#
#
# Required software:
#   - Node.js              -  https://nodejs.org/
#   - Angular CLI          -  https://cli.angular.io/
#   - angular-cli-ghpages  -  https://www.npmjs.com/package/angular-cli-ghpages

gh_user_file="GH_USER"
gh_pw_file="GH_PW"
gh_repo_file="GH_REPO"

# @TODO: Properly test this script on Linux
echo
echo "WARNING: This script hasn't been tested in a proper Linux environment."

# Compile production-ready build
echo
echo Building...
echo ng build --prod
bash -c "ng build --prod"
echo

# Read GitHub data & build command
read -r gh_pages_cmd<$gh_user_file
gh_pages_cmd="angular-cli-ghpages --repo=https://$gh_pages_cmd:"
gh_pages_cmd_public=$gh_pages_cmd********@github.com/
read -r gh_data_tmp<$gh_pw_file
gh_pages_cmd=$gh_pages_cmd$gh_data_tmp@github.com/
read -r gh_data_tmp<$gh_repo_file
gh_pages_cmd=$gh_pages_cmd$gh_data_tmp.git
gh_pages_cmd_public=$gh_pages_cmd_public$gh_data_tmp.git

# Deploy to GitHub pages
echo Deploying...
echo $gh_pages_cmd_public
bash -c "$gh_pages_cmd"
echo


# Erase existing command string
gh_pages_cmd=$gh_pages_cmd_public
