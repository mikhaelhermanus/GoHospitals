import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native'
import colors from '../assets/colors'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const ProfileScreen = () => {
    const data = [
        {
            id: 1,
            name: 'Patient Profile'
        },
        {
            id: 2,
            name: 'Personalize Updates'
        },
        {
            id: 3,
            name: 'Give Feedback'
        }, {
            id: 4,
            name: 'Terms & Conditions'
        },
        {
            id: 5,
            name: 'Help'
        }, {
            id: 6,
            name: 'Logout'
        }
    ]

    const _renderIcon = (name) =>{
        if(name === 'Patient Profile'){
            return <AntDesign name='pluscircle' size={20} color={colors.grayContact}/>
        }else if (name === 'Personalize Updates'){
            return <AntDesign name='heart' size={20} color={colors.grayContact}/>
        }else if (name === 'Give Feedback'){
            return <Feather name='thumbs-up' size={20} color={colors.grayContact}/>
        }else if (name === 'Terms & Conditions'){
            return <Feather name='list' size={20} color={colors.grayContact}/>
        }else if (name === 'Help'){
            return <Feather name='help-circle' size={20} color={colors.grayContact}/>
        }else if (name === 'Logout'){
            return  <MaterialCommunityIcons name='logout' size={20} color={colors.red}/>
        }
    }

    const _renderProfileItems = (item, index) => {
        return (
            <View key={index} style={{flexDirection : 'row', marginTop : 15}}>
               {_renderIcon(item.name)}
               <Text style={{alignSelf : 'center', fontSize : 16, marginLeft : 10}}>{item.name}</Text>
            </View>
        )
    }


    return (
        <SafeAreaView style={styles.containerTop}>
            <View style={styles.headerBackground}>
                <Text style={{ color: colors.white, fontWeight: 'bold', fontSize: 24, marginLeft: 10 }}> My Profile</Text>
            </View>
            <View style={{ margin: 10 }}>
                <FlatList
                    data={data}
                    renderItem={({ item, index }) => _renderProfileItems(item, index)}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => `${index}`}
                    ItemSeparatorComponent={() => {
                        return (
                          <View style={styles.itemSeparator} />
                        )
                      }}
                />
                <View style={styles.itemSeparator}></View>
            </View>
        </SafeAreaView>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    containerTop: {
        flex: 1,
        backgroundColor: colors.white
    },
    headerBackground: {
        width: '100%',
        height: 150,
        borderWidth: 1,
        borderColor: colors.blueMetronic,
        backgroundColor: colors.blueMetronic,
        borderBottomRightRadius: 60,
        borderBottomLeftRadius: 60,
        transform: [{ scaleX: 1 }],
        justifyContent: 'center'
    },
    itemSeparator:{
        borderBottomWidth : 1,
        borderColor : colors.grayHeader,
        marginTop : 10,
        paddingBottom : 10
    }
})