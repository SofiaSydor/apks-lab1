---
name: project-scaffold
description: "Creates a minimal JavaScript Hello World project with an addition module. Use when src/hello.js is missing from the repository."
---

# project-scaffold

## When to use
The `create-project` command, or whenever `src/hello.js` or `src/math.js` is missing.

## Inputs
| Parameter | Default |
|---|---|
| project name | `hello-js` |
| language | JavaScript (Node.js 20+, CommonJS) |

## Procedure
1. Create `src/`, `tests/`, `scripts/`, `docs/` if they do not exist.
2. Create `src/math.js` with an `add(a, b)` function exported via `module.exports`.
3. Create `src/hello.js`: prints `Hello World!`; `main()` is exported and only runs automatically when the file is executed directly (`require.main === module`).
4. Create `README.md` (full name, group, variant, description, how to run the agent) if missing.
5. Add `node_modules/`, `dist/`, `coverage/`, `.env` to `.gitignore`, only the lines that are not already there.

## Outputs
`src/hello.js`, `src/math.js`, `README.md`, `.gitignore`.

## Checks
- `node src/hello.js` exits with 0 and prints `Hello World!`;
- both source files exist.

## Typical failure
A file already exists and differs from the template: do not overwrite it, show the diff and stop.
Node.js is not installed (`node -v` fails): report it and stop.
