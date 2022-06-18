import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import Header from '../component/Header'
import ProductDisplay from '../component/ProductDisplay'

const ProductDetailPage = props => {
    const navigation = props.navigation
    const {params} = props.route
    const itemDetail = params.item

    return (
        <SafeAreaView style={styles.container}>
           <Header navigation={navigation} pdp={true}/>
           <ProductDisplay itemDetail={itemDetail}/>
        </SafeAreaView>
    )
}

export default ProductDetailPage

const styles = StyleSheet.create({
    container : {
        flex : 1,
    }
})