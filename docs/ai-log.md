# Журнал взаємодії з AI

Інструмент: GitHub Copilot (Student), VS Code, агент JS Build Engineer.
Допоміжно для планування кроків і розбору помилок користувалась чат-асистентом Claude.

## Запити і результати
| № | Запит | Результат |
|---|---|---|
| 1 | Агент JS Build Engineer + прикріплений `init.prompt.md`: «Execute this scenario» | Агент перевірив git/node/npm, виконав git-init, створив `src/`, `package.json`, `scripts/build.js`, тести, `ci.sh`, `ci.bat`, `ci.yml`; запустив `check` |
| 2 | Перевірка після `init` | `npm test` 4/4, `npm run build`, `Hello World!`, код 0 |
| 3 | Навмисно зламаний тест (агент зробив сам у `check`) | `ci.sh` і `ci.bat` повернули код 1, тест відновлено, повторно 4/4 |

## Помилки і виправлення
1. **`git update-index --chmod=+x ci.sh`**: Git відповів, що файлу немає в індексі. Агент сам повторив команду з `--add`; `ci.sh` отримав режим `100755`.
2. **Ruby для перевірки YAML**: Ruby не встановлений. Агент поставив PyYAML (`pip install --user`), хоча manifest вимагає ставити залежності лише локально. Рішення: прийняла як відхилення, зафіксувала; планується уточнити `check`, щоб YAML перевірявся без сторонніх мов.
3. **Відхилений push** (`workflow` scope): токен у Windows не мав права змінювати workflow. Видалила збережений запис `git:https://github.com` через `cmdkey`, увійшла знову, push пройшов.
4. **Розрив команди в терміналі**: частина `git commit` виконалась окремо, тому `package.json` і `scripts/` потрапили в CI-коміт. Історію не переписувала.

## Спостереження
- Попередження Git про `LF → CRLF` не впливають на роботу.
- `npm warn deprecated` у CI походять із залежностей Jest, не з нашого коду.

## Перевірка результату
- Локально: `npm test`, `npm run build`, `ci.bat`.
- GitHub Actions: PR `lab1/finish`, три job (ubuntu, windows, macos) успішні, 3 артефакти.