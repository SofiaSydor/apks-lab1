---
agent: "JS Build Engineer"
description: "Orchestrator: full scenario from an empty repository to a verified CI setup."
---
# init (orchestrator)

Run the steps **strictly in order**. After each step, verify its result.
If a step fails, **stop**, show the command and its output, and do not continue.

1. Prerequisites: `git --version`, `node -v`, `npm -v`. If anything is missing, stop.
2. [git-init](git-init.prompt.md)
3. [create-project](create-project.prompt.md)
4. [create-build](create-build.prompt.md)
5. [create-actions](create-actions.prompt.md)
6. [check](check.prompt.md) - mandatory, with real execution.

**Idempotency:** running `init` again must not destroy files or duplicate configuration.

**Final report:** changed files, executed commands with exit codes, result of `check`.
Do not report success until `check` has fully passed. Do not run `git push` and do not create a PR.
