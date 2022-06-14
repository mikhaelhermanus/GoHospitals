import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import {View, TouchableOpacity } from 'react-native'
import colors from '../assets/colors'

const ChatButton = () => {
    return (
        <View style={{
            position: 'absolute',
            margin: 0,
            right: 0,
            bottom: 0
        }}>
            <TouchableOpacity style={{width : 60, height : 60, borderRadius : 8, backgroundColor : colors.blueMetronic,marginRight : 10, marginBottom : 10, justifyContent : 'center', alignItems : 'center' }}>
               <Entypo name='chat' size={30} color={colors.white}/>
            </TouchableOpacity>
        </View>
    )
}

export default ChatButton