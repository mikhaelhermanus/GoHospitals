import React from 'react'
import { View, Text, FlatList, StyleSheet, Image } from 'react-native'
import colors from '../assets/colors'
const Category = props => {

    const data = [
        {
            "id": 1,
            "title": "Watches",
            "image": "https://i.postimg.cc/28BWzpGh/wristwatch.png"
        },
        {
            "id": 2,
            "title": "T-Shirts",
            "image": "https://i.postimg.cc/jSb4mdTL/shirt.png"
        },
        {
            "id": 3,
            "title": "Shoes",
            "image": "https://i.postimg.cc/c4B6XsLx/sneakers.png"
        },
        {
            "id": 4,
            "title": "Shorts",
            "image": "https://i.postimg.cc/DZ8rLSrY/shorts.png"
        },
        {
            "id": 5,
            "title": "Dresses",
            "image": "https://i.postimg.cc/J4fHdTbx/dress.png"
        },
        {
            "id": 6,
            "title": "Jeans",
            "image": "https://i.postimg.cc/mrwckBKp/jeans.png"
        }
    ]


    const _renderCategoryMenu = (item, index) => {
        return (
            <View key={index}>
                <View style={styles.borderCircle}>
                    <Image source={{ uri: item.image }}
                        style={{ width: 40, height: 40 }} />
                </View>
                <Text style={{ alignSelf: 'center', fontSize: 14, color: colors.grayContact, marginTop: 10 }}>{item.title}</Text>
            </View>
        )
    }

    return (
        <View>
            <Image source={{ uri: data[0].image }} />
            <FlatList
                data={data}
                renderItem={({ item, index }) => _renderCategoryMenu(item, index)}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                contentContainerStyle={{ margin: 10 }}
            />
        </View>
    )
}

export default Category

const styles = StyleSheet.create({
    borderCircle: {
        borderRadius: 50,
        backgroundColor: colors.blueSea,
        borderColor: colors.blueSea,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        width: 75,
        height: 75,
        marginLeft: 5
    }
})