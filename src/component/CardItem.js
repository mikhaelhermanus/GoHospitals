import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import colors from '../assets/colors'
import AntDesign from 'react-native-vector-icons/AntDesign'
import RatingStar from './RatingStar'


export const CardItem = props => {
    const [wishlist, setWishlist] = useState('')
    const navigation = props.navigation
    const itemData = props.item
    const hotSales = props.hotSales
    
    useEffect(()=>{
        setWishlist(itemData.is_favorite)
    },[])

    const goToDetailPage = (item) => {
        navigation.navigate('ProductDetailPage', { item })
    }

    const toogleWishlist = () =>{
        setWishlist(!wishlist)
    }

    return (
        <TouchableOpacity onPress={() => goToDetailPage(itemData)} key={itemData.index} style={hotSales ? styles.cardContainerHotSales : styles.cardContainer}>
            <View style={{ alignItems: 'flex-end', flex: 1 }}>
                <TouchableOpacity onPress={()=>toogleWishlist()} style={styles.buttonWishlist}>
                    <AntDesign style={{ alignItems: 'flex-end' }} name={wishlist ? 'heart' : 'hearto'} size={22} color={colors.redBadgeInvoice} />
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
                            <RatingStar rating={itemData.rating} hotSales={hotSales} totalRating={itemData.rating_count} />
                        </>
                        : <>
                            <Text style={styles.fontTitle}>{itemData.title}</Text>
                            <RatingStar rating={itemData.rating} hotSales={hotSales} />
                            <Text style={styles.fontPrice}>${itemData.price}</Text>
                        </>
                }

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        width: 150,
        borderWidth: 1,
        backgroundColor: colors.white,
        borderColor: colors.grayHeader,
        borderRadius: 10,
        paddingBottom: 15,
        padding: 15,
        marginVertical: 10,
        marginLeft: 10,
        elevation: 2,
        borderWidth: 2,
        shadowColor: 'rgba(128, 131, 140, 0.15)',
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 5,
          width: 5
        }
    },
    cardContainerHotSales: {
        width: 220,
        borderWidth: 1,
        backgroundColor: colors.white,
        borderColor: colors.grayHeader,
        borderRadius: 10,
        paddingBottom: 15,
        padding: 15,
        marginLeft: 10,
        elevation: 2,
        borderWidth: 2,
        shadowColor: 'rgba(128, 131, 140, 0.15)',
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 5,
          width: 5
        }
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
