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
import IndexHome from './src/screen/IndexHome';
import ProductDetailPage from './src/screen/ProductDetailPage';



const Stack = createNativeStackNavigator();
const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* <Stack.Screen name="TabBar" component={TabBar} />
        <Stack.Screen name="AppointmentHistory" component={AppointmentHitory} /> */}
        <Stack.Screen name="IndexHome" component={IndexHome} />
        <Stack.Screen name="ProductDetailPage" component={ProductDetailPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

const styles = StyleSheet.create({

});

export default App;
