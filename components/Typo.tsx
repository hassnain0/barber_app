import { TypoProps } from '@/types';
import { verticalScale } from '@/utils/styling';
import React from 'react';
import { Text, TextStyle } from 'react-native';

export default function Typo({
  size,
  color,
  fontWeight,
  children,
  style,
  textProps,
}: TypoProps) {
  const textStyle: TextStyle = {
    fontSize: size ? verticalScale(size) : verticalScale(18),
    color,
    fontWeight,
    fontFamily: 'Poppins-Regular',
  };

  return (
    <Text
      style={[textStyle, style]}
      numberOfLines={textProps?.numberOfLines}
      ellipsizeMode={textProps?.ellipsizeMode}
      allowFontScaling={false}
      {...textProps}
    >
      {children}
    </Text>
  );
}
