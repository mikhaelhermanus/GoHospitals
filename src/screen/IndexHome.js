import React from 'react'
import { Text, SafeAreaView, StyleSheet } from 'react-native'
import colors from '../assets/colors'
import Category from '../component/Category'
import FashionList from '../component/FashionList'
import Header from '../component/Header'
import HotSales from '../component/HotSales'


const IndexHome = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Category />
      <FashionList />
      <HotSales />
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