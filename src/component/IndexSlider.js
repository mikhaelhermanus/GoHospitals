import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import colors from '../assets/colors'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Swiper from 'react-native-swiper'



const IndexSlider = () => {

    const promotionData = [
        {
            id: 1,
            images: require('../assets/images/wallpaper1.jpeg'),
            desc: 'Butuh Perawatan Kesehatan dari Rumah? Panggil Siloam at Home Aja!'
        },
        {
            id: 2,
            images: require('../assets/images/wallpaper2.jpeg'),
            desc: 'Sehat & Bahagia Pasca-persalinan #BersamaSiloam'
        },
        {
            id: 3,
            images: require('../assets/images/wallpaper3.jpeg'),
            desc: 'Kejutan 6.6 Hemat 20% Cek Pencernaan & Endoskopi'
        }
    ]

    return (
        <View style={styles.containerTop}>
            <View style={styles.header}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: colors.grayContact }}>UPDATES & PROMOTION</Text>
                <AntDesign name='right' size={15} />
            </View>
            <Swiper showsButtons={false} showsPagination={false}>
                {
                    promotionData.map((banner) =>
                        <View key={banner.id}>
                            <Image
                                style={styles.imageBanner}
                                source={banner.images}
                            />
                            <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>{banner.desc}</Text>
                        </View>
                    )
                }

            </Swiper>
        </View>
    )
}

export default IndexSlider

const styles = StyleSheet.create({
    containerTop: {
        margin: 10,
        paddingHorizontal: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    wrapper: {
        // marginTop: 10
    },
    slide1: {
        borderRadius: 6,
    },
    imageBanner: {
        // flex: 1,
        borderRadius: 6,
        width: '100%',
        height: 200,
        resizeMode: 'contain'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
})