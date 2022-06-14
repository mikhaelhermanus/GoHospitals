import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/HomeScreen';
import ProfileScreen from '../screen/ProfileScreen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useIsFocused } from '@react-navigation/native';
import colors from '../assets/colors';
import AppointmentScreen from '../screen/AppointmentScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                options={{
                    tabBarIcon: ({ }) => (
                        <AntDesign size={30} name='home' color={useIsFocused() ? colors.blueMetronic : colors.greenProgress} />
                    ),
                    headerShown: false
                }}
                name="Home" component={HomeScreen} />
            <Tab.Screen options={{
                tabBarIcon: ({ }) => (
                    <AntDesign size={30} name='calendar' color={useIsFocused() ? colors.blueMetronic : colors.greenProgress} />
                ),
                headerShown: false
            }} name="Appointment" component={AppointmentScreen} />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ }) => (
                        <AntDesign size={30} name='user' color={useIsFocused() ? colors.blueMetronic : colors.greenProgress} />
                    ),
                    headerShown: false
                }} name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}

export default function TabBar() {
    return <MyTabs />;
}