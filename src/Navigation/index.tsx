import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../Screens/Home';
import AddExp from '../Screens/AddExp';
import Detail from '../Screens/Detail';

const Stack = createNativeStackNavigator();

const StackNavigators = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Add"
          component={AddExp}
          options={{headerShown: true}}
        />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigators;

const styles = StyleSheet.create({});
