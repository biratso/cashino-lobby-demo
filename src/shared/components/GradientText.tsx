import React from 'react';
import { StyleSheet, TextStyle, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Defs, LinearGradient as SvgGradient, Stop, Text as SvgText } from 'react-native-svg';
import { typography } from '../constants/theme';

interface GradientTextProps {
  text: string;
  colors?: string[];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  style?: TextStyle;
  numberOfLines?: number;
}

export const GradientText: React.FC<GradientTextProps> = ({
  text,
  colors = ['#FFFF33', '#FB9F03'],
  start = { x: 0, y: 0 },
  end = { x: 1, y: 0 },
  style,
  numberOfLines,
}) => {

  const fontSize = style?.fontSize || typography.fontSize.xl;
  const fontWeight = style?.fontWeight || typography.fontWeight.black;
  const fontFamily = style?.fontFamily || 'System';

  return (
    <View style={[styles.container, style]}>
      <Svg height={fontSize * 1.5} width="100%" style={styles.svg}>
        <Defs>
          <SvgGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <Stop offset="0%" stopColor={colors[0]} />
            <Stop offset="100%" stopColor={colors[1]} />
          </SvgGradient>
        </Defs>
        <SvgText
          fill="url(#grad)"
          fontSize={fontSize}
          fontWeight={fontWeight}
          fontFamily={fontFamily}
          x="0"
          y={fontSize}
        >
          {text}
        </SvgText>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // Container for positioning
  },
  svg: {
    // SVG will size itself
  },
});