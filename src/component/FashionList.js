import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import colors from '../assets/colors'
import { CardItem } from './CardItem'

const FashionList = () => {
    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={{ fontSize: 14, color: colors.black, fontWeight: 'bold' }}>New Fashion</Text>
                <Text style={{ fontSize: 14, color: colors.yellow800, fontWeight: 'bold' }}>View All</Text>
            </View>
            <FlatList
                data={data}
                renderItem={({ item, index }) => <CardItem item={item} index={index} />}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
            />

        </View>
    )
}

export default FashionList

const data = [
    {
        "id": 1,
        "title": "Tiny Bag",
        "sub_title": "2021 Hot Brand New Fashion",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas, justo non mollis aliquam, dui turpis tempor lorem, ut interdum dolor nibh non justo. Proin egestas ultricies nulla vulputate pulvinar. Sed sit amet diam a elit pretium ullamcorper ac a magna.",
        "price": 25,
        "rating": 5,
        "rating_count": 137,
        "is_favorite": true,
        "image": "https://i.postimg.cc/fRMCrT7B/Tiny-Bag-Blue.png",
        "product_options": [
            {
                "color": "444eb8",
                "image": "https://i.postimg.cc/fRMCrT7B/Tiny-Bag-Blue.png"
            },
            {
                "color": "3b789d",
                "image": "https://i.postimg.cc/QCLkkXxg/Tiny-Bag-Cyan.png"
            },
            {
                "color": "6f2caa",
                "image": "https://i.postimg.cc/qBnGBCj1/Tiny-Bag-Purple.png"
            }
        ],
        "size_options": [
            "S",
            "M",
            "L"
        ]
    },
    {
        "id": 2,
        "title": "Leather Bag",
        "sub_title": "2020 Hot Brand New Fashion",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas, justo non mollis aliquam, dui turpis tempor lorem, ut interdum dolor nibh non justo. Proin egestas ultricies nulla vulputate pulvinar. Sed sit amet diam a elit pretium ullamcorper ac a magna.",
        "price": 52,
        "rating": 4,
        "rating_count": 1027,
        "is_favorite": false,
        "image": "https://i.postimg.cc/1z7Zzd51/Leather-Brown.png",
        "product_options": [
            {
                "color": "c45c1c",
                "image": "https://i.postimg.cc/1z7Zzd51/Leather-Brown.png"
            },
            {
                "color": "d77f03",
                "image": "https://i.postimg.cc/SNbbjCqR/Leather-Orange.png"
            },
            {
                "color": "d1422c",
                "image": "https://i.postimg.cc/x1gwsZmN/Leather-Red.png"
            }
        ],
        "size_options": [
            "S",
            "M",
            "L"
        ]
    }
]


const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    containerTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})