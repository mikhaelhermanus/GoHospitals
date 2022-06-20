import React from "react";
import { StyleSheet, StatusBar, View, Platform, SafeAreaView } from "react-native";
import colors from "../assets/colors";

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;


const StatusBarPlaceHolder = () => {
    const MyStatusBar = ({backgroundColor, ...props}) => (
        <View style={[styles.statusBar, { backgroundColor }]}>
          <SafeAreaView>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
          </SafeAreaView>
        </View>
      );
    return (
        <MyStatusBar backgroundColor={colors.blueSky}  />
    )
}

export default StatusBarPlaceHolder


const styles = StyleSheet.create({
    statusBar: {
        height: STATUSBAR_HEIGHT,
    },
    appBar: {
        backgroundColor: '#79B45D',
        height: APPBAR_HEIGHT,
    },

})