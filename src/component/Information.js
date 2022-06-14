import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import colors from '../assets/colors'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
const Information = () => {
    return (
        <View style={styles.containerTop}>
            <Text style={{ color: colors.greenOperate }}>Hi, <Text style={{ color: colors.blueProgress }}>Mikhael</Text></Text>
            <View style={styles.cardInformation}>
                <View style={styles.containerMenu}>
                    <View style={styles.containerSubMenu}>
                        <View style={styles.borderCircle}>
                            <AntDesign name='calendar' size={20} color={colors.blueMetronic} />
                        </View>
                        <Text style={styles.textStyle}>Book Appointment</Text>
                    </View>
                    <View style={styles.containerSubMenu}>
                        <View style={styles.borderCircle}>
                            <AntDesign name='medicinebox' size={20} color={colors.yellow} />
                        </View>
                        <Text style={styles.textStyle}>COVID19 Testing</Text>
                    </View>
                    <View style={styles.containerSubMenu}>
                        <View style={styles.borderCircle}>
                            <FontAwesome name='heartbeat' size={20} color={colors.red} />
                        </View>
                        <Text style={styles.textStyle}>Book Check-up</Text>
                    </View>
                </View>
            </View>
            <View style={styles.cardCaution}>
                <Ionicons name='information-circle' color={colors.white}/>
                <Text style={{ fontSize: 12, color: colors.white, }}>Untuk informasi lanjut mengenai telekonsultasi, klik disini</Text>
            </View>

        </View>
    )
}

export default Information

const styles = StyleSheet.create({
    containerTop: {
        margin: 10,
        paddingHorizontal: 10,
    },
    cardInformation: {
        marginTop: 10,
        borderRadius: 6,
        width: '100%',
        backgroundColor: colors.blueMetronic,
        borderColor: colors.blueMetronic
    },
    containerMenu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10
    },
    textStyle: {
        color: colors.white,
        fontSize: 12,
        fontWeight: 'bold',
        marginTop : 10,
        textAlign : 'center'

    },
    cardCaution: {
        marginTop: 10,
        borderRadius: 6,
        height: 50,
        width: '100%',
        backgroundColor: colors.greenProgress,
        borderColor: colors.greenProgress,
        justifyContent: 'center',
        alignItems : 'center',
        flexDirection : 'row'
    },
    borderCircle: {
        borderRadius: 40,
        borderWidth: 1,
        borderColor: colors.white,
        backgroundColor: colors.white,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerSubMenu : { flexDirection: 'column', alignItems: 'center', flex: 1 }

})