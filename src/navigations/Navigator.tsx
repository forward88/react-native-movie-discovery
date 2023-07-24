import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/Home/Home';
import {DetailsScreen} from '../screens/Details/Details';
import {RootStackParamList} from '../MDTypes';
import {MD_PAGES} from '../utils/constants';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={MD_PAGES.home}>
        <Stack.Screen name={MD_PAGES.home} component={HomeScreen} />
        <Stack.Screen name={MD_PAGES.details} component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
