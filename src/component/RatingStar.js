import React from 'react'
import { View, Text } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import colors from '../assets/colors'

const RatingStar = props => {
    const star = props.rating
    const hotSales = props.hotSales
    const totalRating = props.totalRating
    const ratingArr = []
    for (let i = 0; i < 5; i++) {
        if (i < star) {
            ratingArr.push('positive')
        } else {
            ratingArr.push('negative')
        }
    }

    return (
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
            {
                ratingArr.map((rate, index) => (
                    <View key={`stars ${index} ${rate}`}>
                        {(rate === 'negative')
                            ? <Entypo name='star' size={20} color={colors.grayHeader} />

                            : <Entypo name='star' size={20} color={colors.yellow} />}
                    </View>
                ))

            }
            {hotSales ? <Text style={{ marginLeft: 10, alignSelf: 'center', fontSize: 12, color: colors.black }}>({totalRating} Ratings)</Text> : null}
        </View>
    )
}

export default RatingStar