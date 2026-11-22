---
agent: "JS Build Engineer"
description: "Creates the CI workflow for Windows, Linux and macOS."
---
# create-actions

**Preconditions:** `ci.sh` and `ci.bat` exist.

**Actions:** apply the [github-actions](../skills/github-actions/SKILL.md) skill.

**Expected file:** `.github/workflows/ci.yml`.

**Check:** the YAML parses; `ubuntu-latest`, `windows-latest`, `macos-latest` are present; only `ci.sh` / `ci.bat` are invoked.

**On failure:** if the workflow already exists and differs, do not overwrite it; show the difference and stop.
