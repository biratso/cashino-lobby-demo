import { ImageBackground as BackgroundImage, StyleSheet, Platform } from 'react-native';
import { useResponsive } from '../hooks/useResponsive';

export default function ImageBackground({ source, children, style, resizeMode }: { source: any; children: React.ReactNode; style?: any; resizeMode?: 'cover' | 'contain' | 'stretch' | 'center' | 'repeat' }) {
  const { isLandscape } = useResponsive();
  const imageSource = typeof source === 'string' ? { uri: source } : source;
  const defaultResizeMode = (Platform.OS === 'web'|| isLandscape) ? 'contain' : 'cover';
  const finalResizeMode = resizeMode || defaultResizeMode;

  return (
    <BackgroundImage
      source={imageSource}
      style={[styles.background, style]}
      resizeMode={finalResizeMode}
    >
      {children}
    </BackgroundImage>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});
