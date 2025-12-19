import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import { store } from '@app/store';
import RootNavigator from '@app/navigation/RootNavigator';

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <StatusBar style="light" />
        <RootNavigator />
      </PaperProvider>
    </Provider>
  );
}