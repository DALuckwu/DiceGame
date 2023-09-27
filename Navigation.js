import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DiceGame from './components/DiceGames';
import HistoryScreen from './components/HistoryScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={DiceGame} />
        <Stack.Screen name="History" component={HistoryScreen} /> {/* Adicione a tela de histórico */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
