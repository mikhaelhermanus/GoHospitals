import * as React from 'react';
import { View, useWindowDimensions, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import colors from '../assets/colors';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AppointmentMyself from '../component/AppointmentMyself';

const FirstRoute = () => (
    <AppointmentMyself/>
);

const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: colors.white, justifyContent : 'center', alignItems : 'center' }} >
        <Text>No Data Avaiable</Text>
    </View>
);

const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
});

export default function AppointmentHitory(props) {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'My Self' },
        { key: 'second', title: 'Other' },
    ]);

    const renderTabBar = props => (
        <TabBar
          {...props}
          indicatorStyle={{ backgroundColor: colors.greenProgress }}
          style={{ backgroundColor: colors.white }}
          labelStyle={{ color: colors.black }}
          activeColor={colors.blueMetronic}
          inactiveColor={ colors.grayContact}
        />
      );

    return (
        <View style={{ flex: 1, backgroundColor : '#F9F9F9' }}>
           <View style={styles.containerHeader}>
               <TouchableOpacity onPress={()=>props.navigation.goBack()}>
                <Ionicons color={colors.blueMetronic} size={25} name='arrow-back'/>
                </TouchableOpacity>
                <Text style={{marginLeft : 20, color : colors.blueMetronic, fontSize : 16, alignSelf : 'center'}}>Appointment History</Text>
           </View>
            <TabView
             renderTabBar={renderTabBar}
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
            />
        </View>

    );
}

const styles = StyleSheet.create({
    containerHeader: {
        padding: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        backgroundColor : colors.white,
    },
})