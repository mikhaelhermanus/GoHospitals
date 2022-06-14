import React from 'react'
import { View, Text, FlatList, StyleSheet, Dimensions, ScrollView, Animated } from 'react-native'
import colors from '../assets/colors'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Entypo from 'react-native-vector-icons/Entypo'

const { width } = Dimensions.get('screen')
const IndexMenu = () => {

    const SubMenuData = [
        {
            id: 1,
            name: 'Hospital Information'
        },
        {
            id: 2,
            name: 'C19 Vaccine'
        },
        {
            id: 3,
            name: 'Teleconsultation'
        },
        {
            id: 4,
            name: 'DiaBISA'
        },
        {
            id: 5,
            name: 'Homecare'
        },
        {
            id: 6,
            name: 'Symptoms Checker'
        },
        {
            id: 7,
            name: 'Corporate Wellness'
        },
        {
            id: 8,
            name: 'Emergency'
        },
        {
            id: 9,
            name: 'Edutainment'
        },
        {
            id: 10,
            name: 'Health Tips'
        },
        {
            id: 11,
            name: 'My Health Tracker'
        },

    ]

    const scrollX = new Animated.Value(0)
    const animateScroll = scrollX.interpolate({
        inputRange: [0, 30],
        outputRange: [0, 30],
        extrapolate: 'clamp'
    })

    const _renderIcon = (name) => {
        if (name === 'Hospital Information') {
            return <FontAwesome name='hospital-o' size={30} color={colors.red} />
        } else if (name === 'C19 Vaccine') {
            return <AntDesign name='medicinebox' size={30} color={colors.blueMetronic} />
        } else if (name === 'Teleconsultation') {
            return <Fontisto name='doctor' size={30} color={colors.blueMetronic} />
        } else if (name === 'DiaBISA') {
            return <Entypo name='water' size={30} color={colors.redBadgeInvoice} />
        } else if (name === 'Homecare') {
            return <AntDesign name='home' size={30} color={colors.blueMetronic} />
        } else if (name === 'Symptoms Checker') {
            return <AntDesign name='search1' size={30} color={colors.blueMetronic} />
        } else if (name === 'Corporate Wellness') {
            return <FontAwesome name='diamond' size={30} color={colors.blueMetronic} />
        } else if (name === 'Emergency') {
            return <FontAwesome name='bus' size={30} color={colors.redBadgeInvoice} />
        } else if (name === 'Edutainment') {
            return <Entypo name='game-controller' size={30} color={colors.blueMetronic} />
        } else if (name === 'Health Tips') {
            return <Entypo name='heart-outlined' size={30} color={colors.redBadgeInvoice} />
        } else if (name === 'My Health Tracker') {
            return <FontAwesome name='handshake-o' size={30} color={colors.yellow} />
        }
    }

    const _renderCategoryMeny = (data, index) => {
        return (
            <View key={index} style={styles.containerCard}>
                <View style={styles.navigationTouch}>
                    <View style={styles.IconView}>
                        <View style={styles.iconContainer}>
                            {_renderIcon(data.name)}
                        </View>
                    </View>
                    <Text textBreakStrategy='simple' style={{ fontSize: 11, textAlign: 'center' }}>{data.name}</Text>
                </View>

            </View>
        )
    }

    return (
        <View style={styles.containerTop}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: false }
                )}
                contentContainerStyle={{ paddingHorizontal: '2.5%' }}
            >
                <FlatList
                    data={SubMenuData}
                    renderItem={({ item, index }) => _renderCategoryMeny(item, index)}
                    showsHorizontalScrollIndicator={false}
                    numColumns={7}
                    keyExtractor={(item, index) => `${index}`}
                    contentContainerStyle={{ justifyContent: 'center', alignItems: 'flex-start' }}
                />
            </ScrollView>
            <View style={{ width: 60, height: 5, backgroundColor: colors.grayHeader, marginTop: 10, alignSelf: 'center', borderRadius: 50 }}>
                <Animated.View style={{ backgroundColor: colors.yellow800, height: 5, width: 30, borderRadius: 50, position: 'absolute', top: 0, left: animateScroll }} />
            </View>
            <View style={styles.CardRatingReview}>
                <View style={{ flexDirection: 'row', margin : 10 }}>
                    <FontAwesome name='hand-paper-o' size={20} color={colors.greenProgress} />
                    <Text style={{ fontSize: 12, alignSelf : 'center', marginLeft : 10, color : colors.greenOperate }}>Give us rating & review!</Text>
                </View>

            </View>
        </View>
    )
}

export default IndexMenu

const styles = StyleSheet.create({
    containerTop: {
        margin: 10,
        paddingHorizontal: 10,
    },
    containerCard: { overflow: 'hidden', width: width * 0.21, marginRight: 5, marginBottom: 5 },
    IconView: { borderRadius: 15, padding: 15, borderColor: colors.grayContact },
    navigationTouch: { justifyContent: 'center', alignItems: 'center' },
    iconContainer: { width: 60, height: 60, backgroundColor: colors.grayTransparant, justifyContent: 'center', alignItems: 'center', borderRadius: 25 },
    CardRatingReview: {
        marginTop: 10,
        borderRadius: 6,
        backgroundColor: colors.grayMedium,
        justifyContent: 'center',
        width: '100%',
        height: 40
    }
})
