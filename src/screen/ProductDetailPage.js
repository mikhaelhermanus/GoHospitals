import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import Header from '../component/Header'
import ProductDisplay from '../component/ProductDisplay'
import LinearGradient from 'react-native-linear-gradient'
import colors from '../assets/colors'

const ProductDetailPage = props => {
    const navigation = props.navigation
    const { params } = props.route
    const itemDetail = params.item

    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} pdp={true} itemDetail={itemDetail} />
            <ProductDisplay itemDetail={itemDetail} navigation={navigation} />
        </SafeAreaView>
    )
}

export default ProductDetailPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : colors.white
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
})