import React, { useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import colors from '../assets/colors'
import { CardItem } from './CardItem'
//redux
import { useDispatch, useSelector } from 'react-redux'
import { getHotSales } from '../redux/screenAction/NewFashionRedux/action'


const HotSales = props => {
    const dispatch = useDispatch()
    const navigation = props.navigation
    const refresh = props.refresh

    useEffect(() => {
        dispatch(getHotSales())
    }, [])

    useEffect(() => {
        if (refresh) {
            dispatch(getHotSales())
        }
    }, [refresh])

    const { listHotSales, loadingHotSales, errHotSales } = useSelector(state => state.NewFashionReducerAuth)

    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.fontTitle}>Hot Sales</Text>
                <Text style={styles.fontView}>View All</Text>
            </View>
            {
                loadingHotSales ? <ActivityIndicator color={colors.blueSea} size='large' /> :
                    errHotSales ?
                        <Text color={colors.red}>Something Went Wrong</Text> :
                        <FlatList
                            data={listHotSales}
                            renderItem={({ item, index }) => <CardItem item={item} index={index} hotSales={true} navigation={navigation} />}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            contentContainerStyle={{ marginTop: 10 }}
                        />
            }

        </View>
    )
}

export default HotSales

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    containerTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    fontTitle: {
        fontSize: 14, color: colors.black, fontWeight: 'bold'
    },
    fontView: {
        fontSize: 14, color: colors.yellow800, fontWeight: 'bold'
    }
})
