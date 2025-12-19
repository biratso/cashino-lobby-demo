import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '@shared/types';
import HomeScreen from '@features/home/screens/HomeScreen';
import GamePlayScreen from '@features/game/screens/GamePlayScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="GamePlay" component={GamePlayScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;