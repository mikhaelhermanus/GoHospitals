import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import colors from '../assets/colors'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'


export const CardItem = props => {
    const itemData = props.item
    const hotSales = props.hotSales
    const ratingArr = []

    const renderStarRating = (star) => {
        for (let i = 0; i < 5; i++) {
            if (i <= star) {
                ratingArr.push('positive')
            } else {
                ratingArr.push('negative')
            }
        }

        return (
            <View style={{ flexDirection: 'row', marginTop : 10 }}>
                {
                    ratingArr.map((rate, index) => (
                        <View key={`stars ${index} ${rate}`}>
                            {(rate === 'negative')
                                ? <Entypo name='star' size={20} color={colors.grayHeader} />

                                : <Entypo name='star' size={20} color={colors.yellow} />}
                        </View>
                    ))
                   
                }
                 {hotSales ? <Text style={{marginLeft : 10, alignSelf : 'center', fontSize : 12, color : colors.black}}>({itemData.rating_count} Ratings)</Text> : null}
            </View>
        )

    }


    return (
        <View key={itemData.index} style={hotSales ? styles.cardContainerHotSales : styles.cardContainer}>
            <View style={{ alignItems: 'flex-end', flex: 1 }}>
                <TouchableOpacity style={styles.buttonWishlist}>
                    <AntDesign style={{ alignItems: 'flex-end' }} name='hearto' size={22} color={colors.redBadgeInvoice} />
                </TouchableOpacity>
            </View>
            <View style={hotSales ? styles.containerPriceInfoHotsales : styles.containerPriceInfo}>
                <Image style={{ width: 80, height: 80, resizeMode: 'contain' }} source={{ uri: itemData.image }} />
                {
                    hotSales ?
                        <>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.fontTitle}>{itemData.title}</Text>
                                <View style={{ alignItems: 'flex-end', flex: 1 }}>
                                    <Text style={styles.fontPrice}>${itemData.price}</Text>
                                </View>
                            </View>
                            {renderStarRating(itemData.rating)}
                        </>
                        : <>
                            <Text style={styles.fontTitle}>{itemData.title}</Text>
                            {renderStarRating(itemData.rating)}
                            <Text style={styles.fontPrice}>${itemData.price}</Text>
                        </>
                }

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        width: 150,
        borderWidth: 2,
        backgroundColor: colors.white,
        borderColor: colors.grayHeader,
        borderRadius: 10,
        paddingBottom: 15,
        padding: 15,
        marginVertical: 10,
        marginLeft: 10
    },
    cardContainerHotSales: {
        width: 220,
        borderWidth: 2,
        backgroundColor: colors.white,
        borderColor: colors.grayHeader,
        borderRadius: 10,
        paddingBottom: 15,
        padding: 15,
        marginLeft: 10
    },
    containerPriceInfo: {
        alignItems: 'center',
        marginTop: 25
    },
    containerPriceInfoHotsales: {
        alignItems: 'flex-start',
        marginTop: 15
    },
    buttonWishlist: {
        width: 30,
        height: 30,
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: colors.blueSky,
        borderColor: colors.blueSky,
        justifyContent: 'center',
        alignItems: 'center'
    },
    fontTitle: {
        color: colors.black,
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 5
    },
    fontPrice: {
        fontSize: 16,
        color: colors.black,
        fontWeight: 'bold'
    }
})
