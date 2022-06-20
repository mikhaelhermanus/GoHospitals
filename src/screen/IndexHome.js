import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, FlatList, RefreshControl } from 'react-native'
import colors from '../assets/colors'
import Category from '../component/Category'
import FashionList from '../component/FashionList'
import Header from '../component/Header'
import HotSales from '../component/HotSales'
import StatusBar from '../component/StatusBar'

const IndexHome = props => {
  const navigation = props.navigation
  const [refresh, setRefresh] = useState(false)

  const refreshItems = () => {
    setRefresh(true)
    setTimeout(function () { setRefresh(false) }, 1000)
  }

  return (
    <SafeAreaView style={styles.container} forceInset={{ top: 'never' }}>
      <Header navigation={navigation} />
      <FlatList
        data={[
          <Category refresh={refresh} />,
          <FashionList navigation={navigation} refresh={refresh} />,
          <HotSales navigation={navigation} refresh={refresh} />,
        ]}
        keyExtractor={(_, index) => `homepage items ${index}`}
        renderItem={({ item }) => item}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={refreshItems} />
        }
      />
    </SafeAreaView>
  )
}

export default IndexHome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  }
})