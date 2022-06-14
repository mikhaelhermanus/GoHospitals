import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import colors from '../assets/colors'

const AppointmentMyself = () => {

    const mySelfData = [
        {
            id: 1,
            customer_name: 'Mikhael Hermanus',
            doctor_name: 'Dr. dr Rocksy V Situmeang SpS',
            date: '30 May 2022 09.40 - 10.00',
            location: 'Siloam Hospital Lippo Village - JABODETABEK',
            job: 'Neurologist'
        },
        {
            id: 2,
            customer_name: 'Mikhael Hermanus',
            doctor_name: 'Dr. dr Agatha V Sitompul SpS',
            date: '02 June 2022 08.40 - 09.00',
            location: 'Siloam Hospital Lippo Village - JABODETABEK',
            job: 'Neurologist'
        },
        {
            id: 3,
            customer_name: 'Mikhael Hermanus',
            doctor_name: 'Dr. dr Maria Hutabarat SpS',
            date: '1 May 2022 09.40 - 10.00',
            location: 'Siloam Hospital Lippo Village - JABODETABEK',
            job: 'Physical Medicine and Rehabilitation'
        },
    ]

    const _renderItems = (item, index) => {
        return (
            <View style={{ alignItems: 'center' }}>
                <View style={styles.cardContainer}>
                    <View style={{ margin: 10 }}>
                        <Text style={{ color: colors.blackProgress, fontWeight: 'bold', marginTop: 10 }}>{item.customer_name}</Text>
                        <Text style={{ color: colors.blackProgress, fontWeight: 'bold', marginTop: 5 }}>{item.date}</Text>
                        <Text style={{ color: colors.blackProgress }}>{item.location}</Text>
                        <Text style={{ color: colors.blackProgress }}>{item.doctor_name}</Text>
                        <Text style={{ color: colors.grayContact, marginTop: 10, fontSize: 10 }}>{item.job}</Text>
                    </View>

                </View>
            </View>
        )
    }


    return (
        <FlatList
            data={mySelfData}
            renderItem={({ item, index }) => _renderItems(item, index)}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => `${index}`}
        />
    )
}

export default AppointmentMyself

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 10,
        width: '90%',
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.grayMedium,
        marginTop: 10,
        paddingBottom: 10,
        elevation: 5,
        borderWidth: 2,
        shadowColor: 'rgba(128, 131, 140, 0.15)',
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 5,
            width: 5
        }
    }
})