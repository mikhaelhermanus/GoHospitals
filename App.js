import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screen/HomeScreen';
import TabBar from './src/component/TabBar';
import AppointmentHitory from './src/screen/AppointmentHistory';


const Stack = createNativeStackNavigator();
const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="TabBar" component={TabBar} />
        <Stack.Screen name="AppointmentHistory" component={AppointmentHitory} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

const styles = StyleSheet.create({

});

export default App;
