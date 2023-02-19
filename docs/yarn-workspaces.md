```sh
.
├── Makefile
├── middleware/
│   ├── cypress/
│   └── swagger/
├── package.json
├── [[packages/]]              # packages root
│   ├── [api-client/]          # enable publish to npm package
│   │   └── package.json
│   ├── [app/]                 # enable publish to npm package
│   │   ├── package.json
│   │   ├── public/
│   │   ├── src/
│   │   ├── tsconfig.json
│   │   ├── vue.config.js
│   │   └── vite.config.ts
│   └── [storybook-server/]    # enable publish to npm package
│       └── package.json
├── README.md
├── tsconfig.json
└── yarn.lock
```

```js
#!/bin/bash

# make auto-clean script
# to build yarn workspaces
yarn autoclean --force -W && yarn config set version-git-message '-' && yarn unlink && yarn link && yarn install -W
```
