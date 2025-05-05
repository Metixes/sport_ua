# ⚽️ Football League Table App

An interactive and responsive football league table built with modern web technologies. The application replicates a real-world tournament table with UI/UX enhancements and backend data integration.

## 🛠 Tech Stack

- **TypeScript**
- **Vite**
- **Vue 3 + PrimeVue**
- **Pinia**
- **Axios**
- **SCSS**
- **Vue Router**

## 🎯 Features

### 📊 Dynamic Table

- Displays football team statistics grouped by league.
- Data is fetched from the backend and cached using **Pinia**.
- Clicking on tabs (`Общая`, `Дома`, `В гостях`) triggers random sorting for points/games.
- Tooltip on team ranking index shows qualification info.
- Reusable UI component for showing team form (`W`, `D`, `L`) with icon-based styling.

### 🧩 Legend Component

- Provides visual explanations of table icons and abbreviations.
- Supports flexible types like dots/abbreviations via props.

### 📱 Mobile-Friendly

- Responsive layout works across all screen sizes.
- Includes placeholder burger menu for future navigation needs.

### ✨ Visual Enhancements

- Animated transitions when switching tab views.
- Adheres to design mockups with clean, semantic HTML structure on the base.

## 🖼 Preview

![App Screenshot](./src/assets/screenshots/de2030d3-3b75-484c-b209-f331ded4ba1f.png)

## ⚙️ Project Setup

````bash
npm install

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
````

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
