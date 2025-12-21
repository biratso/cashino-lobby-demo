import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Text as SvgText,
} from 'react-native-svg';
import { Dimensions } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

type Props = {
  value: number;
  cardWidth?: number;
};

export const RankNumber = ({ value, cardWidth }: Props) => {
  const height = cardWidth || 160;
  const width = height * 0.6; // Adjust width based on height for better aspect ratio

  return (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      style={{ position: 'absolute', left: 0 }}
    >
      <Defs>
        <LinearGradient
          id="rankGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <Stop offset="0%" stopColor="#ff9a9e" />
          <Stop offset="100%" stopColor="#8b5cf6" />
        </LinearGradient>
      </Defs>

      <SvgText
        x="0"
        y={height} // Position near the bottom
        fontFamily="Figtree"
        fontSize={height*1.4}
        fontWeight="900"
        fill="transparent"
        stroke="url(#rankGradient)"
        strokeWidth="2"
      >
        {value}
      </SvgText>
    </Svg>
  );
};
