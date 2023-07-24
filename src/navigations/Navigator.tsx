import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/Home/Home';
import {DetailsScreen} from '../screens/Details/Details';

const StackNavigator = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Home'}>
        <StackNavigator.Screen name="Home" component={HomeScreen} />
        <StackNavigator.Screen name="Details" component={DetailsScreen} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}
