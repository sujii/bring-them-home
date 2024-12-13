#!/bin/bash

yarn autoclean --force -W && yarn config set version-git-message '-' && yarn unlink && yarn link && yarn install -W
