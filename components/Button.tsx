import { colors, radius, spacingX } from '@/constants/theme';
import { CustomButtonProps } from '@/types';
import { verticalScale } from '@/utils/styling';
import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
  StyleProp,
} from 'react-native';

import Loading from './Loading';

const Button = ({
  style,
  onPress,
  loading = false,
  children,
}: CustomButtonProps) => {
  if (loading) {
    return (
      <View style={[styles.button, style, { backgroundColor: 'transparent' }]}>
        <Loading />
      </View>
    );
  }

  const childrenCount = React.Children.count(children);
  const dynamicJustifyContent: StyleProp<ViewStyle> = {
    justifyContent: childrenCount === 1 ? 'center' : 'space-between',
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, style, dynamicJustifyContent]}
    >
      {children}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: radius._17,
    borderCurve: 'continuous',
    height: verticalScale(60),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between', // for spacing items across
    paddingHorizontal: spacingX._20, // consistent spacing inside
  },
});
