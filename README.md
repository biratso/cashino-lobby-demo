# Cashino Lobby Demo

A demo application for the Cashino lobby built with Expo, React Native, and TypeScript.

## Description

This project is a comprehensive demo showcasing the lobby interface for the Cashino gaming app. It features a modern UI with game listings, favorites management, regional recommendations, and a responsive design that works across iOS, Android, and web platforms using Expo.

## Features

- **Game Discovery**: Browse most popular games and region-specific recommendations
- **Favorites Management**: Add/remove games to/from favorites with persistent storage
- **Responsive Design**: Adaptive layout that adjusts to different screen sizes
- **Tab Navigation**: Switch between all games and favorites
- **Pull-to-Refresh**: Refresh game data with a simple gesture
- **Hero Banner**: Prominent display for featured content

## Installation

1. Ensure you have Node.js and Yarn installed.
2. Install Expo CLI globally: `npm install -g @expo/cli`
3. Clone or download this repository.
4. Navigate to the project directory and install dependencies:
   ```
   yarn install
   ```

## Usage

To start the development server:

```
yarn start
```

This will open the Expo DevTools in your browser. You can then run the app on:

- iOS Simulator: `yarn ios`
- Android Emulator: `yarn android`
- Web: `yarn web`

## Project Structure

```
cashino-lobby-demo/
├── .expo/                   # Expo build artifacts
├── assets/                  # Static assets
│   ├── adaptive-icon.png    # Android adaptive icon
│   ├── favicon.png          # Web favicon
│   ├── icon.png             # App icon
│   ├── logo.png             # App logo
│   └── splash-icon.png      # Splash screen icon
├── src/                     # Source code
│   ├── app/                 # App-level configuration
│   │   ├── navigation/      # Navigation setup
│   │   └── store/           # Redux store configuration
│   ├── features/            # Feature-based modules
│   │   ├── game/            # Game-related features
│   │   └── home/            # Home screen features
│   │       ├── components/  # UI components for home
│   │       ├── screens/     # Screen components
│   │       └── store/       # Redux slice for games
│   └── shared/              # Shared utilities
│       ├── components/      # Reusable UI components
│       ├── constants/       # App constants and mock data
│       ├── hooks/           # Custom React hooks
│       ├── services/        # External services (storage, etc.)
│       └── types/           # TypeScript type definitions
├── App.tsx                  # Main app component
├── app.json                 # Expo configuration
├── babel.config.js          # Babel configuration
├── index.ts                 # App entry point
├── metro.config.js          # Metro bundler config
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
└── README.md                # This file
```

## Architecture

This project follows a feature-based architecture with:

- **Redux Toolkit**: State management with memoized selectors
- **React Navigation**: Navigation between screens
- **Responsive Design**: Custom hooks for adaptive layouts
- **TypeScript**: Type-safe development
- **Expo**: Cross-platform development

## Technologies Used

- **Expo**: Framework for universal React applications
- **React Native**: Framework for building native apps using React
- **TypeScript**: Typed superset of JavaScript
- **React**: JavaScript library for building user interfaces
- **Redux Toolkit**: State management library
- **React Navigation**: Navigation library for React Native
- **AsyncStorage**: Persistent storage for favorites

## Contributing

Feel free to fork this repository and submit pull requests.

## License

This project is private.