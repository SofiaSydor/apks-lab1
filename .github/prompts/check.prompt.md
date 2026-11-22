---
agent: "JS Build Engineer"
description: "Verification only: does not modify the project."
---
# check

**Important:** this command must NOT create or modify files (except the temporary `dist/` and `node_modules/`, which Git ignores).

**Checks (actually run them, do not guess):**
1. The manifest, three skills and six prompt files exist.
2. `package.json`, `src/`, `tests/`, `ci.sh`, `ci.bat`, `.github/workflows/ci.yml` exist.
3. `npm test` exits with 0 and the output mentions `BasicAddition`.
4. `npm run build`, then `node dist/hello.js` prints `Hello World!`.
5. The workflow has all three operating systems and calls `ci.sh` / `ci.bat`; the YAML is valid.
6. `git status --short` does not list `node_modules/` or `dist/`; searching the configs for `token` or `password` finds nothing.

**Report:** a table "check - result (OK/FAIL) - command - exit code".
If any check is FAIL, the overall result is FAIL.
