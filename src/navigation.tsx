import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './screens/MainScreen';
import GameScreen from './screens/GameScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{ headerShown: false }}
      name="MainScreen"
      component={MainScreen}
    />
    <Stack.Screen name="GameScreen" component={GameScreen} />
  </Stack.Navigator>
);

export default Navigation;
