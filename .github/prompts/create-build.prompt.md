---
agent: "JS Build Engineer"
description: "Creates npm scripts, Jest tests, the dist/hello build and ci.sh/ci.bat."
---
# create-build

**Preconditions:** `src/hello.js` and `src/math.js` exist.

**Actions:** apply the [build-and-test](../skills/build-and-test/SKILL.md) skill.

**Expected files:** `package.json`, `package-lock.json`, `scripts/build.js`,
`tests/math.test.js`, `tests/hello.test.js`, `ci.sh`, `ci.bat`.

**Check:** `npm test` (the BasicAddition test passes) and `npm run build` (`dist/hello.js` exists).

**On failure:** show the full output of the failed command and stop. Never disable or skip tests.
