import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Platform } from 'react-native'
import colors from '../assets/colors'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
//redux
import { useSelector } from 'react-redux'

const Header = props => {
    const [wishlist, setWishlist] = useState('')
    const pdp = props.pdp
    const itemDetail = props.itemDetail
    const navigation = props.navigation
    const { cart } = useSelector(state => state.CartReducerAuth)

    const cartTotal = cart?.length

    useEffect(() => {
        setWishlist(itemDetail?.is_favorite)
    }, [])

    const toogleWishlist = () => {
        setWishlist(!wishlist)
    }

    const pdpHeader = () => {
        return (
            <View style={{ backgroundColor: colors.blueSky }}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', margin: 10 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons style={{ alignSelf: 'center', marginTop: 10 }} size={25} color={colors.black} name='arrow-back' />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>QuickView</Text>
                    <TouchableOpacity onPress={() => toogleWishlist()} style={styles.borderCart}>
                        <AntDesign style={{ alignItems: 'flex-end' }} name={wishlist ? 'heart' : 'hearto'} size={22} color={colors.redBadgeInvoice} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    if (pdp) {
        return pdpHeader()
    } else {
        return (
            < View style={styles.containerTop} >
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
                        <View style={styles.containerCartQty}>
                            {/* <ActivityIndicator size='small' color={colors.blueSea}/> */}
                            <Text style={{ color: '#ffffff', textAlign: 'center', fontSize: 12, marginBottom: (Platform.OS === 'ios' ? 0 : 2) }}>{cartTotal}</Text>
                        </View>
                        <AntDesign color={colors.blueSea} name='shoppingcart' size={30} />
                    </View>
                </View>
                <View style={{ margin: 10 }}>
                    <View style={styles.containerSearch}>
                        <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                            <AntDesign name='search1' size={25} color={colors.grayContact} />
                            <TextInput
                                placeholder='Search...'
                                style={{ marginLeft: 10 }}
                                placeholderTextColor={colors.grayContact}
                            />
                        </View>
                    </View>
                </View>

            </View >
        )
    }



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
        width: 45,
        height: 45,
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
    },
    headerTitle: {
        fontSize: 16,
        color: colors.black,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    containerCartQty: {
        position: 'absolute',
        bottom: 35,
        left: 35,
        borderRadius: 100 / 2,
        backgroundColor: '#CE0F21',
        justifyContent: 'center',
        alignItems: 'center',
        width: 15,
        height: 15
    }
})