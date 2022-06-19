import React, { useEffect } from 'react'
import { View, Text, FlatList, StyleSheet, Image, ActivityIndicator } from 'react-native'
import colors from '../assets/colors'

//redux
import { useDispatch, useSelector } from 'react-redux'
import { getCategory } from '../redux/screenAction/CategoryRedux/action'

const Category = props => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategory())
    }, [])

    const { listCategory, loading, err } = useSelector(state => state.categoryAuth)
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

    if (loading) {
        return (
            <View style={{ alignItems: 'center', marginTop: 10 }}>
                <ActivityIndicator size='large' color={colors.blueSea} />
            </View>
        )
    } else if (err) {
        return (
            <View style={{ alignItems: 'center', marginTop: 10 }}>
                <Text style={{ color: colors.red }}>Something Went Wrong</Text>
            </View>
        )
    } else {
        return (
            <FlatList
                data={listCategory}
                renderItem={({ item, index }) => _renderCategoryMenu(item, index)}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                contentContainerStyle={{ margin: 10 }}
            />
        )
    }
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