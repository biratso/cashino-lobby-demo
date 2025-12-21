import React from 'react';
import { Text as RNText, TextProps as RNTextProps, StyleSheet } from 'react-native';
import { typography } from '../constants/theme';

interface CustomTextProps extends RNTextProps {
  children: React.ReactNode;
}

const CustomText: React.FC<CustomTextProps> = ({ style, ...props }) => {
  return (
    <RNText
      style={[styles.default, style]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  default: {
    fontFamily: typography.fontFamily,
  },
});

export default CustomText;