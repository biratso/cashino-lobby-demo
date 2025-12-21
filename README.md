
# Cashino Lobby Demo

## Quick Links

- **[Android APK (Install via Expo)](https://expo.dev/accounts/birat077/projects/casino-lobby-demo/builds/d7cf0301-c509-4827-a6fc-66c1047afdbf)**
- **[Web App](https://casino-lobby-demo.expo.app/)**
- **[Demo Video](https://go.screenmal.com/watch/cTlrbxnYJvD)**
- **[Source Code (GitHub)](https://github.com/biratso/cashino-lobby-demo)**

A demo application for the Cashino lobby built with Expo, React Native, and TypeScript.

## Description

This project is a comprehensive demo showcasing the lobby interface for the Cashino gaming app. It features a modern UI with game listings, favorites management, regional recommendations, and a responsive design that works across iOS, Android, and web platforms using Expo.

## Features

- **Game Discovery**: Browse most popular games and region-specific recommendations
- **Favorites Management**: Add/remove games to/from favorites with persistent storage
- **Responsive Design**: Adaptive layout that adjusts to different screen sizes
- **Landscape-Only Game Screen**: Dedicated gameplay screen locked to landscape orientation for immersive experience
- **Floating Bottom Controls**: Modular, visually polished controls that float above the game area and adapt spacing for larger devices
- **Safe Area Insets**: Insets applied only in landscape mode for a seamless, device-safe UI
- **Orientation Overlay (Web)**: Overlay prompt for users to rotate their device to landscape on web
- **Modular Components**: Clean, maintainable codebase with reusable UI components (e.g., BottomControls, CoinSwitcher, GradientText)
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
├── assets/                  # Static assets and icons
│   ├── icons/               # SVG and PNG icons for UI
│   ├── logo.png             # App logo
│   └── ...                  # Other images
├── src/                     # Source code
│   ├── app/                 # App-level configuration
│   │   ├── navigation/      # Navigation setup (RootNavigator, etc.)
│   │   └── store/           # Redux store configuration
│   ├── features/            # Feature-based modules
│   │   ├── game/            # Game screen and related logic
│   │   │   └── screens/     # GamePlayScreen and modular controls
│   │   └── home/            # Home screen features
│   │       ├── components/  # Home UI components (Header, HeroBanner, etc.)
│   │       ├── screens/     # HomeScreen
│   │       └── store/       # Redux slice for games
│   └── shared/              # Shared utilities and UI
│       ├── components/      # Reusable UI (CoinSwitcher, GradientText, BottomControls, etc.)
│       ├── constants/       # Theme, mock data, etc.
│       ├── hooks/           # Custom React hooks (e.g., useResponsive)
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