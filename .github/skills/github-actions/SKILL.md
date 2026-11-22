---
name: github-actions
description: "Creates .github/workflows/ci.yml with an ubuntu/windows/macos matrix that only calls ci.sh or ci.bat."
---

# github-actions

## When to use
The `create-actions` command, or whenever `.github/workflows/ci.yml` is missing.

## Inputs
Existing `ci.sh` and `ci.bat` (output of `build-and-test`).

## Procedure
1. Check that both scripts exist; otherwise stop.
2. Create a workflow named `CI` triggered by `push` and `pull_request` on `develop` and `master`.
3. Use a single job `build-test` with `strategy.matrix.os: [ubuntu-latest, windows-latest, macos-latest]`.
4. Steps: `actions/checkout`, `actions/setup-node` (Node 20), a Windows step (`ci.bat`), a Linux/macOS step (`bash ./ci.sh`), upload `dist/` as an artifact.
5. Do not add secrets or custom build logic to the YAML.

## Outputs
`.github/workflows/ci.yml`.

## Checks
- the YAML is valid;
- all three operating systems are present and `ci.sh` / `ci.bat` are called;
- no lines containing `token`, `password` or `secret`.

## Typical failure
The workflow already exists and differs: do not overwrite it, show the diff and stop.
Windows job fails because of `bash`: make sure the Windows step uses `shell: cmd`.
