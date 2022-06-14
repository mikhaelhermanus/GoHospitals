import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../assets/colors'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Header = props => {
    return (
        <View style={styles.containerHeader}>
            <Text style={{ color: colors.greenProgress, fontSize: 18, fontWeight: 'bold' }}>My<Text style={{ fontSize: 18, color: colors.blueMetronic, fontWeight: 'bold' }}>Siloam</Text></Text>
            <View style={styles.lineStyle} />
            <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
                <Ionicons name='notifications' color={colors.blueMetronic} size={20} />
                <TouchableOpacity onPress={() => props.setModalVisible(true)}>
                    <Text style={{ alignSelf: 'center', marginLeft: 10, color: colors.blueMetronic }}>EN</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    containerHeader: {
        margin: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})