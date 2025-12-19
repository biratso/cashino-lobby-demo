import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@shared/types';
import { colors, typography, borderRadius, spacing, layout } from '@shared/constants/theme';

type GamePlayScreenRouteProp = RouteProp<RootStackParamList, 'GamePlay'>;
type GamePlayScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'GamePlay'>;

const GamePlayScreen: React.FC = () => {
  const route = useRoute<GamePlayScreenRouteProp>();
  const navigation = useNavigation<GamePlayScreenNavigationProp>();
  const { gameTitle } = route.params;

  const [isSoundOn, setIsSoundOn] = useState(true);
  const [betAmount, setBetAmount] = useState(50.0);

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

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack} activeOpacity={0.8}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>

        <Text style={styles.gameTitle} numberOfLines={1}>
          {gameTitle}
        </Text>

        <View style={styles.coinBadge}>
          <View style={styles.coinIcon}>
            <Text style={styles.coinIconText}>GC</Text>
          </View>
          <Text style={styles.coinValue}>456.92</Text>
        </View>

        <View style={styles.scBadge}>
          <Text style={styles.scText}>SC</Text>
        </View>
      </View>

      {/* Game Area */}
      <View style={styles.gameArea}>
        <View style={styles.gamePlaceholder}>
          <Text style={styles.gamePlaceholderEmoji}>🎰</Text>
          <Text style={styles.gamePlaceholderText}>{gameTitle}</Text>
          <Text style={styles.gamePlaceholderSubtext}>Game interface would render here</Text>
        </View>
      </View>

      {/* Bottom Controls */}
      <View style={styles.bottomControls}>
        <View style={styles.leftControls}>
          <TouchableOpacity style={styles.controlButton} onPress={handleSettings}>
            <Text style={styles.controlIcon}>⚙️</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.controlButton} onPress={handleInfo}>
            <Text style={styles.controlIcon}>ℹ️</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.controlButton} onPress={handleSoundToggle}>
            <Text style={styles.controlIcon}>{isSoundOn ? '🔊' : '🔇'}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.startButton} onPress={handleStart}>
          <Text style={styles.startText}>Start!</Text>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
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
    flex: 1,
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: colors.primary.main,
    marginLeft: spacing.sm,
  },
  coinBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.coins.gc,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: borderRadius.badge,
    marginRight: spacing.sm,
  },
  coinIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },
  coinIconText: {
    color: colors.text.primary,
    fontSize: 9,
    fontWeight: typography.fontWeight.bold,
  },
  coinValue: {
    color: colors.text.primary,
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.bold,
  },
  scBadge: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.purple.vibrant,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scText: {
    color: colors.text.primary,
    fontSize: 11,
    fontWeight: typography.fontWeight.bold,
  },
  gameArea: {
    flex: 1,
    backgroundColor: '#3A3550',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gamePlaceholder: {
    alignItems: 'center',
    padding: spacing.xxxl,
  },
  gamePlaceholderEmoji: {
    fontSize: 80,
    marginBottom: spacing.lg,
  },
  gamePlaceholderText: {
    fontSize: typography.fontSize.xxl,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
    marginBottom: spacing.sm,
  },
  gamePlaceholderSubtext: {
    fontSize: typography.fontSize.md,
    color: colors.text.secondary,
  },
  bottomControls: {
    height: 100,
    backgroundColor: '#4A3F2E',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    justifyContent: 'space-between',
  },
  leftControls: {
    flexDirection: 'row',
  },
  controlButton: {
    width: 50,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#6B5D42',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.sm,
  },
  controlIcon: {
    fontSize: 24,
  },
  startButton: {
    flex: 1,
    height: 60,
    backgroundColor: '#8B7355',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: spacing.md,
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
  },
  betButton: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#6B5D42',
    alignItems: 'center',
    justifyContent: 'center',
  },
  betButtonText: {
    fontSize: 24,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
  },
  betDisplay: {
    alignItems: 'center',
    marginHorizontal: spacing.sm,
  },
  betLabel: {
    fontSize: 10,
    fontWeight: typography.fontWeight.bold,
    color: colors.primary.main,
    marginBottom: 2,
  },
  betAmount: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
  },
});

export default GamePlayScreen;