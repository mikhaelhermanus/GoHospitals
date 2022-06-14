import React from 'react'
import { SafeAreaView, Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import colors from '../assets/colors'
import AntDesign from 'react-native-vector-icons/AntDesign'
const AppointmentScreen = props => {
    const navigation = props.navigation
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerBackground}>
                <Text style={{ color: colors.white, fontWeight: 'bold', fontSize: 24, marginLeft: 10 }}> My Appointment</Text>
            </View>
            <View style={styles.containerSection}>
                <AntDesign size={35} name='calendar' />
                <Text style={{ color: colors.grayContact, marginTop: 10 }}>You don'have any</Text>
                <Text style={{ color: colors.grayContact, marginTop: 10 }}>Upcoming Appointment</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('AppointmentHistory', {navigation : navigation})}>
                    <Text style={{ marginTop: 10, textDecorationLine: 'underline', textDecorationColor: colors.blueMetronic, color: colors.blueMetronic }}>View Appointment History</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default AppointmentScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    headerBackground: {
        width: '100%',
        height: 150,
        borderWidth: 1,
        borderColor: colors.blueMetronic,
        backgroundColor: colors.blueMetronic,
        borderBottomRightRadius: 60,
        borderBottomLeftRadius: 60,
        transform: [{ scaleX: 1 }],
        justifyContent: 'center'
    },
    containerSection: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})