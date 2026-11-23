# Інструкція запуску

## Агент
1. VS Code + GitHub Copilot (Student), увійти під своїм акаунтом.
2. Copilot Chat → агент **JS Build Engineer**.
3. Прикріпити `.github/prompts/init.prompt.md`, попросити виконати сценарій.

## Проєкт (потрібен Node.js 20+)
| ОС | Повна перевірка | Окремі команди |
|---|---|---|
| Windows | `ci.bat` | `npm ci`, `npm test`, `npm run build`, `dist\hello.cmd` |
| Linux/macOS | `bash ./ci.sh` | `npm ci`, `npm test`, `npm run build`, `./dist/hello` |

Очікуваний результат: `Tests: 4 passed`, `Build OK`, `Hello World!`, код виходу 0.
Каталоги `node_modules/` і `dist/` не потрапляють у Git.
