import { Dimensions, Platform, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScreenWrapperProps } from '@/types'


const {height} = Dimensions.get('window');
const ScreenWrapper = ({style,children,}:ScreenWrapperProps) => {
 
    let paddingTop=Platform.OS=='ios'? height*0.06:50;
    return (
    <View style={[style,{flex:1,paddingTop:paddingTop}]}>
      <StatusBar barStyle={'light-content'}></StatusBar>
      {children}
    </View>
  )
}

export default ScreenWrapper

const styles = StyleSheet.create({})