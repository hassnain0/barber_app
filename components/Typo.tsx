import { StyleSheet, Text, TextStyle, View } from 'react-native'
import React from 'react'
import { TypoProps } from '@/types'
import { verticalScale } from '@/utils/styling'

const Typo = ({size,color,fontWeight,children,style,textProps}:TypoProps) => {
  
    //text Style Object
    const textStyle:TextStyle={
        fontSize:size?verticalScale(size): verticalScale(18),
        color,
        fontWeight,
    }
    return (
    <View>
      <Text style={[textStyle]}>{children}</Text>
    </View>
  )
}

export default Typo

const styles = StyleSheet.create({})