# README Карта

- **[README Карта](#readme-карта)**
- **[В проекте используем](#в-проекте-используется)**
- **[Cтруктура файлов](#cтруктура-файлов)**

# В проекте используем
- ### Технологии
  - **[React](https://ru.reactjs.org/)**
  - **[SCSS](https://sass-lang.com/)**
- ### Расширения - VS Code
  - **[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)**
  - **[Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)**
- ### Снипиты - VS Code
  - **[Wrapped in | React snippets](https://marketplace.visualstudio.com/items?itemName=wrapped-in.wrapped-in-react-snippets)**
- ### ESLint config
  - **Точка с запятой: желательно**
  - **Размер tab: 2**
  - **Подсветка неиспользуемых переменных**
  - **npm run lint:fix - исправит всё выше написанное**
- ### NPM Пакеты
  - **react: 18.1.0**
  - **remixicon-react: 1.0.0**
  - **sass: 1.52.1**
  - **wrapped-in-localstorage: 1.0.61**

# Cтруктура файлов

```
  project/
  ┃
  ┣━ publick/
  ┃  ┗━ index.html
  ┃
  ┣━ src/
  ┃  ┃
  ┃  ┣━ conponents/
  ┃  ┃  ┃
  ┃  ┃  ┣━ ui/
  ┃  ┃  ┃  ┣━ Example1.ui.jsx
  ┃  ┃  ┃  ┣━ Example1.ui.scss
  ┃  ┃  ┃  ┃
  ┃  ┃  ┃  ┣━ Example2.ui.jsx
  ┃  ┃  ┃  ┣━ Example2.ui.scss
  ┃  ┃  ┃  ┃
  ┃  ┃  ┃  ┗━ index.js
  ┃  ┃  ┃
  ┃  ┃  ┗━ Example1/
  ┃  ┃     ┣━ Example1.component.jsx
  ┃  ┃     ┗━ Example1.component.scss
  ┃  ┃
  ┃  ┣━ layout
  ┃  ┃  ┣━ Layout.jsx
  ┃  ┃  ┗━ Layout.scss
  ┃  ┃
  ┃  ┃
  ┃  ┣━ pages/
  ┃  ┃  ┣━ Example1.page.jsx
  ┃  ┃  ┣━ Example1.page.css
  ┃  ┃  ┃
  ┃  ┃  ┣━ Example2.page.jsx
  ┃  ┃  ┣━ Example2.page.scss
  ┃  ┃  ┃
  ┃  ┃  ┗━ index.js
  ┃  ┃
  ┃  ┣━ scss/
  ┃  ┃  ┣━ _Variables.scss
  ┃  ┃  ┗━ ...scss
  ┃  ┃
  ┃  ┣━ styles/
  ┃  ┃  ┣━ global.scss
  ┃  ┃  ┣━ index.scss
  ┃  ┃  ┗━ App.scss
  ┃  ┃
  ┃  ┣━ App.jsx
  ┃  ┗━ index.js
  ┃
  ┣━ .eslintrc
  ┣━ .gitignore
  ┣━ LICENSE
  ┣━ package-loock.json
  ┣━ package.json
  ┗━ README.md
```