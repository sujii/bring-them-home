export default {
  // Prettier
  "**/*": "prettier --write --ignore-unknown",
  // ESLint
  "**/*.{ts,d.ts,js,cjs,mjs}": "eslint --fix",
  // TypeScript
  "packages/*/src/**/*.ts": (filenames) => {
    const updatedPackages = new Set()
    const reGetPackageName = /packages\/(?<packageName>.+)\/src/
    for (const filename of filenames) {
      const found = filename.match(reGetPackageName)
      updatedPackages.add(found.groups.packageName)
    }
    return `yarn --filter ${[...updatedPackages].join(" --filter ")} type-check`
  },
}
