import React, { useState } from 'react'
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native'
import colors from '../assets/colors'
export const ModalBottom = ({modal, setModalVisible}) => {
    const [bahasa, setBahasa] = useState(1)
    return (
        <Modal
            visible={modal}
            onRequestClose={()=>setModalVisible()}
            animationType='fade'
            transparent
        >
            <View style={styles.modalContainer}>
                <View style={styles.containerTop}>
                    <Text style={{ color: colors.blueMetronic, fontSize: 18 }}>Ubah Bahasa ?</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10 }}>
                        <TouchableOpacity onPress={() => setBahasa(1)} style={bahasa === 1 ? styles.buttonActive : styles.buttonDeactive}>
                            <Text style={bahasa === 1 ? styles.textActive : styles.textDeactive}>Bahasa Indonesia</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setBahasa(2)} style={bahasa === 2 ? styles.buttonActive : styles.buttonDeactive}>
                            <Text style={bahasa === 2 ? styles.textActive : styles.textDeactive}>Bahasa Inggris</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={()=>setModalVisible(false)} style={styles.submitButton}>
                        <Text style={{ color: colors.white }}>Ok</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        flex: 1,
        justifyContent: 'flex-end'
    },
    containerTop: {
        backgroundColor: 'white',
        paddingTop: 12,
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
        paddingBottom: 20,
        alignItems: 'center'
    },
    buttonActive: {
        width: 140,
        height: 40,
        backgroundColor: colors.blueMetronic,
        borderRadius: 18,
        borderWidth: 1,
        borderColor: colors.blueMetronic,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
    },
    buttonDeactive: {
        width: 140,
        height: 40,
        backgroundColor: colors.white,
        borderRadius: 18,
        borderWidth: 1,
        borderColor: colors.blueMetronic,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
    },
    textActive: {
        color: colors.white
    },
    textDeactive: {
        color: colors.blueMetronic
    },
    submitButton: {
        width: '80%',
        height: 40,
        backgroundColor: colors.greenProgress,
        borderColor: colors.greenOperate,
        borderRadius: 18,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    }
})
