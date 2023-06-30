# Suloke App

## Table of Contents

- [App Structure](#app-structure)
- [Installation and Usage](#installation-and-usage)
- [State Management](#state-management)
- [Components](#components)
- [Styling](#styling)
- [Customization](#customization)

## App Structure

The app follows the standard structure of a React application, with components organized in the `src/components` directory. The state is managed using Redux Toolkit, with slices stored in the `src/redux/slices` directory.

## Installation and Usage

1. Clone the repository.
2. Run `npm install` to install the required dependencies.
3. Run `npm start` to start the development server.
4. Open your browser and navigate to `http://localhost:3000`.

## State Management

The app uses Redux Toolkit for state management. The following state slices are used in the app:

- `languageSlice`: Manages the current language of the app.
- `themeSlice`: Manages the current theme (light or dark mode) of the app.
- `screenSizeSlice`: Manages the current screenSize of the app.

To access or modify the state, you can use Redux hooks (`useSelector` and `useDispatch`) within your components.

## Components

The app consists of the following components:

- `Carousel`: Renders the carousel with the slides as React components.
- `LanguageToggle`: Renders the language toggle buttons and handles language change events.
- `Layout`: Renders the main layout of the app, including the `Carousel`, `LanguageToggle`, `ThemeToggle`, and `NavigationControls` components.
- `NavigationControls`: Renders navigation controls to move between slides in the carousel.
- `ThemeToggle`: Renders the light/dark mode toggle button and handles theme change events.

## Styling

The styles for the app can be found at the App.css file

## Customization

### Adding/Removing Slides

To add or remove slides, update the `slides` array in the `Layout` component. Each slide in the array should be a React component that you want to display in the carousel.

### Modifying State Variables

To modify the state variables, such as the current language or theme, use the `useDispatch` Redux hook within your components and dispatch the corresponding action from the respective slice.

### Customizing Styles

To customize the styles, update the CSS files in App.css file

### Adding/Removing Languages

To add or remove languages, add a new .json file to the locales folder, and update the `resources` object in the `src/utils/i18next
