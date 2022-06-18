import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import colors from '../assets/colors'
import AntDesign from 'react-native-vector-icons/AntDesign'



const Header = props => {
    return (
        <View style={styles.containerTop}>
            <View style={styles.containerHeader}>
                <View style={{ flexDirection: 'column' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.avatarCircle} />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={[styles.fontStyle, { marginTop: 10 }]}>Hi</Text>
                            <Text style={styles.fontStyle}>Find Your Favorite Items</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.borderCart}>
                    <AntDesign color={colors.blueSea} name='shoppingcart' size={30} />
                </View>
            </View>
            <View style={{ margin: 10 }}>
                <View style={styles.containerSearch}>
                    <View style={{ flexDirection: 'row', marginLeft : 10 }}>
                        <AntDesign name='search1' size={25} color={colors.grayContact} />
                        <TextInput
                            placeholder='Search...'
                            style={{marginLeft : 10}}
                            placeholderTextColor={colors.grayContact}
                        />
                    </View>
                </View>
            </View>

        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    containerTop: {
        backgroundColor: colors.blueSky,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        paddingBottom: 15,
    },
    containerHeader: {
        margin: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    avatarCircle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: colors.black
    },
    fontStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: 10,
    },
    borderCart: {
        backgroundColor: colors.white,
        borderRadius: 8,
        borderColor: colors.grayMedium,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerSearch: {
        borderRadius: 8,
        backgroundColor: colors.white,
        width: '100%',
        borderColor: colors.grayMedium,
        height: 40,
        borderWidth: 1,
        justifyContent: 'center',
    }
})