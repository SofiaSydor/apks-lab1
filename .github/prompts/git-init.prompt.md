---
agent: "JS Build Engineer"
description: "Checks the Git repository, updates .gitignore, shows the status."
---
# git-init

**Preconditions:** the current folder is the root of a Git repository (`git rev-parse --show-toplevel`).
If it is not, run `git init` and say so.

**Actions:**
1. Run `git status --short --branch` and show the result.
2. Create `.gitignore` if missing; if it exists, append only the missing lines: `node_modules/`, `dist/`, `coverage/`, `.env`.
3. If the active branch is `develop`, suggest creating `feature/develop/js-project` (do not push).

**Expected result:** `.gitignore` contains the 4 rules, none duplicated.

**Check:** `git check-ignore node_modules dist` lists both paths.

**On failure:** if Git is not installed, stop and explain what needs to be installed.
