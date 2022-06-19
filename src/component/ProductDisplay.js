import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import colors from '../assets/colors'
import AntDesign from 'react-native-vector-icons/AntDesign'
import RatingStar from './RatingStar'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import LinearGradient from 'react-native-linear-gradient'

const ProductDisplay = props => {
    const [selectColor, setSelectColor] = useState(0)
    const [size, setSize] = useState('S')
    const itemDetail = props.itemDetail
    return (
        <>
            <LinearGradient colors={[colors.blueSky, colors.blueSky, colors.white]} style={styles.linearGradient}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
                    <View style={{ flexDirection: 'column' }}>
                        {
                            itemDetail.product_options.map((option, index) => (
                                <TouchableOpacity onPress={() => setSelectColor(index)} key={index} style={[styles.colorCircle, { backgroundColor: '#' + option.color, borderColor: '#' + option.color }]}>
                                    {
                                        index === selectColor ?
                                            <AntDesign name='check' size={20} color={colors.white} /> : null
                                    }
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                    <Image style={styles.imagesProduct} source={{ uri: itemDetail?.product_options[selectColor].image }} />
                    <View style={{ flexDirection: 'column' }}>
                        {
                            itemDetail.size_options.map((option, index) => (
                                <TouchableOpacity onPress={() => setSize(option)} key={index} style={[styles.colorCircle, { backgroundColor: colors.white, borderColor: colors.grayContact }]}>
                                    <Text style={option === size ? styles.fontSizeSelected : styles.fontSizeUnSelected}>{option}</Text>
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                </View>
            </LinearGradient>
            <View style={{ margin: 10 }}>
                <Text style={styles.textTitleProduct}>{itemDetail.title}</Text>
                <Text style={styles.textSubTitleProduct}>{itemDetail.sub_title}</Text>
                <RatingStar rating={itemDetail.rating} hotSales={true} totalRating={itemDetail.rating_count} />
                <Text style={[styles.textTitleProduct, { marginTop: 10 }]}>Description</Text>
                <Text style={[styles.textSubTitleProduct, { marginTop: 10 }]}>{itemDetail.description}</Text>
                <Text style={styles.textPrice}>${itemDetail.price}</Text>
                <TouchableOpacity style={styles.buttonAddtoCart}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, color: colors.white, fontWeight: 'bold' }}>Add To Cart</Text>
                        <MaterialCommunityIcons style={{ marginLeft: 10 }} name='cart-plus' size={25} color={colors.white} />
                    </View>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default ProductDisplay

const styles = StyleSheet.create({
    colorCircle: {
        borderRadius: 30,
        width: 35,
        height: 35,
        borderWidth: 1,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imagesProduct: { width: 150, height: 150, resizeMode: 'contain', alignSelf: 'center' },
    fontSizeSelected: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.blueSea
    },
    fontSizeUnSelected: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.black
    },
    textTitleProduct: {
        fontSize: 20,
        color: colors.black,
        fontWeight: 'bold'
    },
    textSubTitleProduct: {
        fontSize: 18,
        color: colors.blackProgress
    },
    textPrice: {
        fontSize: 26,
        color: colors.black,
        marginTop: 10,
        fontWeight: 'bold'
    },
    buttonAddtoCart: {
        width: '100%',
        backgroundColor: colors.blueSea,
        borderColor: colors.blueSea,
        borderRadius: 10,
        borderWidth: 1,
        paddingBottom: 10,
        paddingTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    linearGradient: {
     paddingBottom : 10
    },
})