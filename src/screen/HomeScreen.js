import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, View, FlatList } from 'react-native'
import Header from '../component/Header'
import colors from '../assets/colors'
import Information from '../component/Information'
import IndexMenu from '../component/IndexMenu'
import IndexSlider from '../component/IndexSlider'
import ChatButton from '../component/ChatButton'
import { ModalBottom } from '../component/ModalBottom'


const HomeScreen = () => {

    const [modalVisible, setModalVisible] = useState(false)

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={[
                    <Header
                        setModalVisible={setModalVisible}
                    />,
                    <View style={styles.lineStyle} />,
                    <Information />,
                    <IndexMenu />,
                    <IndexSlider />,

                ]}
                keyExtractor={(_, index) => `homepage items ${index}`}
                renderItem={({ item }) => item}
                showsVerticalScrollIndicator={false}
            />
            <ChatButton />
            <ModalBottom
                setModalVisible={(modal)=>setModalVisible(modal)}
                modal={modalVisible}
            />
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    lineStyle: {
        borderBottomWidth: 2,
        borderBottomColor: colors.grayHeader,
        width: '100%'
    }
})