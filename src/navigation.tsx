import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from './styles';
import MainScreen from './screens/MainScreen';
import GameScreen from './screens/GameScreen';

const Stack = createNativeStackNavigator<NavigationParams>();

const Navigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{ headerShown: false }}
      name="MainScreen"
      component={MainScreen}
    />
    <Stack.Screen
      name="GameScreen"
      component={GameScreen}
      options={({ route }) => ({
        title: route.params.title,
        headerStyle: {
          backgroundColor: Colors.background,
        },
        headerTintColor: Colors.heading,
        headerTitleStyle: {
          color: Colors.heading,
          fontSize: 25,
        },
      })}
    />
  </Stack.Navigator>
);

export default Navigation;
