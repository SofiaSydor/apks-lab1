---
agent: "JS Build Engineer"
description: "Creates the initial Hello World project using the project-scaffold skill."
---
# create-project

**Preconditions:** `git-init` has been run; `node -v` works.

**Actions:** apply the [project-scaffold](../skills/project-scaffold/SKILL.md) skill.

**Expected files:** `src/hello.js`, `src/math.js`, `README.md`.

**Check:** `node src/hello.js` prints `Hello World!` and exits with 0.

**On failure:** if a file already exists and was modified, do not overwrite it; show the diff and stop.
Running the command again must not change files that are already correct.
