---
name: build-and-test
description: "Sets up npm scripts, Jest, the BasicAddition test, the dist/hello build and local ci.sh/ci.bat scripts."
---

# build-and-test

## When to use
The `create-build` command, or whenever `package.json`, `tests/` or `ci.*` is missing.

## Inputs
Existing `src/hello.js` and `src/math.js` (output of `project-scaffold`).

## Procedure
1. Create or update `package.json`: `scripts.start`, `scripts.build`, `scripts.test`; pin the `jest` version in `devDependencies`.
2. Create `scripts/build.js`: copies `src/*.js` into `dist/` and generates the launchers `dist/hello` (sh) and `dist/hello.cmd` (Windows).
3. Create `tests/math.test.js` with the `BasicAddition` test plus extra cases (zero, negative numbers), and `tests/hello.test.js` for the output of `main()`.
4. Run `npm install` to produce `package-lock.json`.
5. Create `ci.sh` and `ci.bat`: `npm ci` -> `npm test` -> `npm run build` -> run `dist/hello`. Any failure must produce a non-zero exit code.
6. Make sure `ci.sh` uses LF line endings and is executable.

## Outputs
`package.json`, `package-lock.json`, `scripts/build.js`, `tests/*.test.js`, `ci.sh`, `ci.bat`.

## Checks
- `npm test` exits with 0 and the output mentions `BasicAddition`;
- `npm run build` produces `dist/hello.js`;
- if a test expectation is deliberately broken, `ci.sh` exits with a non-zero code.

## Typical failure
`npm ci` fails because there is no lock file: run `npm install` and retry.
Jest finds no tests: check the `*.test.js` naming and the `tests/` directory.
