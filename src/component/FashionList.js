import React, { useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import colors from '../assets/colors'
import { CardItem } from './CardItem'

//redux
import { useDispatch, useSelector } from 'react-redux'
import { getNewFashion } from '../redux/screenAction/HotSalesRedux/action'

const FashionList = props => {
    const dispatch = useDispatch()
    const refresh = props.refresh
    useEffect(() => {
        dispatch(getNewFashion())
    }, [])

    useEffect(() => {
        if (refresh) {
            dispatch(getNewFashion())
        }
    }, [refresh])

    const { listFashion, loadingFash, errFash } = useSelector(state => state.HotSalesReducerAuth)
    const navigation = props.navigation

    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={{ fontSize: 14, color: colors.black, fontWeight: 'bold' }}>New Fashion</Text>
                <Text style={{ fontSize: 14, color: colors.yellow800, fontWeight: 'bold' }}>View All</Text>
            </View>
            {
                loadingFash ? <ActivityIndicator size='large' color={colors.blueSea} />
                    : errFash ? <Text>Something Went Wrong</Text> :
                        <FlatList
                            data={listFashion}
                            renderItem={({ item, index }) => <CardItem item={item} index={index} navigation={navigation} />}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                        />
            }
        </View>
    )
}

export default FashionList


const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    containerTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})