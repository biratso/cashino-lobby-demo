import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { Figtree_700Bold } from '@expo-google-fonts/figtree';
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import { store } from '@app/store';
import RootNavigator from '@app/navigation/RootNavigator';

export default function App() {
  const [fontsLoaded] = useFonts({
    Figtree: Figtree_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PaperProvider>
        <StatusBar style="light" />
        <RootNavigator />
      </PaperProvider>
    </Provider>
  );
}