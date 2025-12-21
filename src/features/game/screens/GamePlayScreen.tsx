import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as ScreenOrientation from 'expo-screen-orientation';
import { RootStackParamList } from '@shared/types';
import { colors, typography, borderRadius, spacing, layout } from '@shared/constants/theme';
import CoinSwitcher from '@/src/shared/components/CoinSwitcher';
import { Icon } from '@/src/shared/components/Icon';
import { GradientText } from '@/src/shared/components/GradientText';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type GamePlayScreenRouteProp = RouteProp<RootStackParamList, 'GamePlay'>;
type GamePlayScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'GamePlay'>;

const GamePlayScreen: React.FC = () => {
  const insets = useSafeAreaInsets();
  const route = useRoute<GamePlayScreenRouteProp>();
  const navigation = useNavigation<GamePlayScreenNavigationProp>();
  const { gameTitle } = route.params;

  const [isSoundOn, setIsSoundOn] = useState(true);
  const [betAmount, setBetAmount] = useState(50.0);

  // Lock orientation to landscape for game play
  useEffect(() => {
  const lockOrientation = async () => {
    if (Platform.OS !== 'web') {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    }
  };

  lockOrientation();

  return () => {
    if (Platform.OS !== 'web') {
      ScreenOrientation.unlockAsync();
    }
  };
}, []);

  // Overlay for web: prompt to rotate device
  const [showWebOverlay, setShowWebOverlay] = useState(false);
  useEffect(() => {
    if (Platform.OS === 'web') {
      const checkOrientation = () => {
        if (window.innerWidth < window.innerHeight) {
          setShowWebOverlay(true);
        } else {
          setShowWebOverlay(false);
        }
      };
      checkOrientation();
      window.addEventListener('resize', checkOrientation);
      return () => window.removeEventListener('resize', checkOrientation);
    }
  }, []);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSettings = () => {
    Alert.alert('Settings', 'Game settings would open here');
  };

  const handleInfo = () => {
    Alert.alert('Game Info', 'Game information would display here');
  };

  const handleSoundToggle = () => {
    setIsSoundOn(!isSoundOn);
  };

  const handleStart = () => {
    Alert.alert(
      'Game Starting!',
      `Playing ${gameTitle} with bet: ${betAmount.toFixed(2)} GC`,
      [{ text: 'OK' }]
    );
  };

  const handleIncreaseBet = () => {
    setBetAmount((prev) => Math.min(prev + 10, 500));
  };

  const handleDecreaseBet = () => {
    setBetAmount((prev) => Math.max(prev - 10, 10));
  };

  // Helper: is landscape
  const isLandscape = typeof window !== 'undefined'
    ? window.innerWidth > window.innerHeight
    : false;

  return (
    <LinearGradient
      colors={['#16111C', '#7F3617']}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 1 }}
      style={[
        styles.container,
        isLandscape && {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack} activeOpacity={0.8}>
          <Icon name="chevron-left-gradient" size={22} style={{}} />
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <GradientText
            text={gameTitle}
            style={styles.gameTitle}
            numberOfLines={1}
          />
        </View>

        <CoinSwitcher coinBalance={456.92} />
      </View>

      {/* Game Area with Three Images */}
      <View style={styles.gameArea}>
        <View style={styles.imagesContainer}>
          <View style={styles.imageWrapper1x}>
            <Image
              source={{ uri: 'https://res.cloudinary.com/dyhqhx8tb/image/upload/v1766312323/Frame_920_f2xzbk.png' }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
        </View>
      </View>

      {/* Bottom Controls */}
      <View style={styles.bottomControlsWrapper} pointerEvents="box-none">
        <View style={styles.bottomControls}>
          <View style={styles.leftControls}>
            <TouchableOpacity style={styles.controlButton} onPress={handleSettings}>
              <Image
                source={require('@/assets/icons/game_settings.png')}
                style={{width: 24, height: 24, alignContent: 'center', }}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.controlButton} onPress={handleInfo}>
              <Image
                source={require('@/assets/icons/game_info.png')}
                style={{width: 24, height: 24, alignContent: 'center', }}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.controlButton} onPress={handleSoundToggle}>
              <Image
                source={require('@/assets/icons/game_mute.png')}
                style={{width: 24, height: 24, alignContent: 'center', }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.startButton} onPress={handleStart}>
            <Image
                source={require('@/assets/icons/game_start_text.png')}
                style={{width: 200, height: 200, alignContent: 'center', }}
                resizeMode="contain"
              />
          </TouchableOpacity>

          <View style={styles.betControls}>
            <TouchableOpacity style={styles.betButton} onPress={handleDecreaseBet}>
              <Text style={styles.betButtonText}>-</Text>
            </TouchableOpacity>

            <View style={styles.betDisplay}>
              <Text style={styles.betLabel}>TOTAL BET</Text>
              <Text style={styles.betAmount}>{betAmount.toFixed(2)} GC</Text>
            </View>

            <TouchableOpacity style={styles.betButton} onPress={handleIncreaseBet}>
              <Text style={styles.betButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Web Overlay Prompt */}
      {showWebOverlay && (
        <View style={styles.overlay}>
          <Text style={styles.overlayText}>For the best experience, please rotate your device to landscape mode.</Text>
        </View>
      )}

      {/* Overlay for web: show if not landscape */}
      {Platform.OS === 'web' && showWebOverlay && (
        <View style={styles.webOverlay}>
          <Text style={styles.webOverlayText}>Please rotate your device to landscape to play!</Text>
        </View>
      )}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: layout.headerHeight,
    backgroundColor: colors.background.secondary,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
  },
  backButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    fontSize: 28,
    color: colors.primary.main,
    fontWeight: typography.fontWeight.bold,
  },
  gameTitle: {
    fontSize: 20,
    fontWeight: '900',
    fontFamily: 'Figtree',
    marginLeft: spacing.sm,
  },
  titleContainer: {
    flex: 1,
  },
  gameArea: {
    flex: 1,
    backgroundColor: '#2D2833',
    margin: Platform.OS === 'web' ? spacing.xxxl : spacing.lg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagesContainer: {
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageWrapper1x: {
    flex: 1,
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  bottomControlsWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    // bottom: 20,
    bottom: Platform.OS === 'web' ? 32 : 24,
    alignItems: 'center',
    pointerEvents: 'box-none',
    zIndex: 10,
  },
  bottomControls: {
    width: '95%',
    maxWidth: 900,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Platform.OS === 'web' ? 24 : 32,
    justifyContent: 'space-between',
    backgroundColor: 'rgba(30,20,40,0.98)',
    borderRadius: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 12,
    elevation: 8,
    height: 0,
  },
  leftControls: {
    flexDirection: 'row',
    backgroundColor: '#1F110D',
  },
  controlButton: {
    width: 70,
    height: 40,
    // borderRadius: 8,
    backgroundColor: '#3F3022',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 2,
    marginVertical: 2,
  },
  controlIcon: {
    fontSize: 24,
  },
  startButton: {
    // flex: 1,
    height: 60,
    backgroundColor: '#3F3022',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: spacing.md,
    paddingHorizontal: 60,
    borderWidth: 1,
    borderColor: '#1F110D',
  },
  startText: {
    fontSize: typography.fontSize.xxl,
    fontWeight: typography.fontWeight.extrabold,
    color: colors.text.primary,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 2,
  },
  betControls: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1F110D',
    padding: 2
  },
  betButton: {
    width: 40,
    height: 40,
    // borderRadius: 8,
    backgroundColor: '#3F3022',
    alignItems: 'center',
    justifyContent: 'center',
  },
  betButtonText: {
    fontSize: 24,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
    backgroundColor: '#3F3022',
  },
  betDisplay: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 2,
    backgroundColor: '#3F3022',
    // paddingHorizontal: 20,
    height: 40,
        width: 120,
        
  },
  betLabel: {
    flex: 1,
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.bold,
    color: colors.primary.main,
    position: 'absolute',
    top: -typography.fontSize.md/2 - 2,
    flexWrap: 'nowrap',
    width: '100%',
    textAlign: 'center',
  },
  betAmount: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.md,
    zIndex: 1000,
  },
  overlayText: {
    color: colors.text.primary,
    fontSize: typography.fontSize.lg,
    textAlign: 'center',
    marginBottom: spacing.md,
  },
  webOverlay: {
    position: 'absolute',
    zIndex: 100,
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(30,20,40,0.95)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  },
  webOverlayText: {
    color: '#FFF',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
  },
});

export default GamePlayScreen;