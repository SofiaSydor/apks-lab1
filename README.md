# Лабораторна робота №1 — AI-агент для розробки та CI/CD

- **Студент:** Сидор Софія Юріївна
- **Група:** КІ-409
- **Варіант:** 21 → JavaScript, npm scripts, Jest

Проєкт: консольний Hello World на Node.js з функцією `add` і юніт-тестами.
Все створено AI-агентом **JS Build Engineer** (GitHub Copilot, VS Code).

## Як запустити агента
1. Відкрити репозиторій у VS Code, перемкнутись на гілку `feature/develop/js-project`.
2. У Copilot Chat обрати агента **JS Build Engineer**.
3. Прикріпити `.github/prompts/init.prompt.md` і написати: «Виконай цей сценарій».
4. Перевірка окремо: прикріпити `check.prompt.md`.

## Як запустити проєкт
Див. [docs/usage.md](docs/usage.md). Коротко: `bash ./ci.sh` (Linux/macOS) або `ci.bat` (Windows).

Документація: [архітектура](docs/architecture.md) · [використання](docs/usage.md) · [журнал AI](docs/ai-log.md)
