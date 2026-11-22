# Архітектура агента

## Яку проблему вирішує
Перетворює порожній репозиторій на перевірений JS-проєкт: код, тести, складання, CI. Без агента це 5–6 ручних кроків, у яких легко щось забути.

## Відповідність файлів ролям (GitHub Copilot у VS Code)
| Роль | Файл |
|---|---|
| Agent manifest | `.github/agents/build-engineer.agent.md` |
| Skills | `.github/skills/*/SKILL.md` |
| Commands | `.github/prompts/*.prompt.md` |
| Orchestrator | `.github/prompts/init.prompt.md` |

## Skills
- `project-scaffold` — каркас і Hello World;
- `build-and-test` — npm scripts, Jest, `dist/hello`, `ci.sh`/`ci.bat`;
- `github-actions` — workflow з матрицею трьох ОС.

## Commands
`git-init`, `create-project`, `create-build`, `create-actions`, `check`, `init`.

## Потік даних
git-init (.gitignore) → create-project (`src/`) → create-build (`package.json`, `tests/`, `ci.*`) → create-actions (`ci.yml`) → check (звіт OK/FAIL).
Кожен наступний крок використовує файли попереднього й не починає роботу, якщо їх немає.

## Обробка помилок оркестратором
`init` зупиняється на першому збої, показує команду та вивід і не заявляє про успіх без повного проходу `check`.
Повторний запуск не перезаписує змінені користувачем файли й не дублює налаштування.
