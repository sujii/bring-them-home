#!/bin/bash

rm -rf ./node_modules && rm -rf ./packages/*/node_modules && yarn config set version-git-message '-' && yarn unlink && yarn link && yarn install -W
