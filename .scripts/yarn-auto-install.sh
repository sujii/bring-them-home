#!/bin/bash

yarn config set version-git-message '-' && yarn unlink && yarn link && yarn install -W
echo '🧸💫 [ Finished ]: ✨ Installing yarn workspaces packages... ✨'
