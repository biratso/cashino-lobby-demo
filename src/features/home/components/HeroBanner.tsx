import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, layout, typography, borderRadius, spacing } from '@shared/constants/theme';

const HeroBanner: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Decorative elements */}
      <View style={styles.decorLeft}>
        <Text style={styles.decorEmoji}>♣️</Text>
      </View>
      <View style={styles.decorRight}>
        <Text style={styles.decorEmoji}>🎲</Text>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <Text style={styles.headline}>
          Choose FUNZ For A{'\n'}Next-Level Gaming{'\n'}Experience!
        </Text>

        {/* Coin Displays */}
        <View style={styles.coinDisplays}>
          <View style={styles.coinRow}>
            <View style={[styles.coinIcon, { backgroundColor: colors.coins.gc }]}>
              <Text style={styles.coinIconText}>GC</Text>
            </View>
            <Text style={styles.coinAmount}>1,500,999</Text>
          </View>

          <View style={styles.coinRow}>
            <View style={[styles.coinIcon, { backgroundColor: colors.coins.fc }]}>
              <Text style={styles.coinIconText}>FC</Text>
            </View>
            <Text style={styles.coinAmount}>85.00</Text>
          </View>
        </View>

        {/* CTA Button */}
        <TouchableOpacity style={styles.ctaButton} activeOpacity={0.9}>
          <Text style={styles.playIcon}>▶</Text>
          <Text style={styles.ctaText}>Play Now!</Text>
        </TouchableOpacity>

        {/* Carousel Dots */}
        <View style={styles.carouselDots}>
          <View style={[styles.dot, styles.dotActive]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </View>

      {/* Character placeholder */}
      <View style={styles.characterPlaceholder}>
        <Text style={styles.characterEmoji}>🎮</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: layout.heroHeight,
    backgroundColor: colors.purple.vibrant,
    position: 'relative',
    overflow: 'hidden',
  },
  decorLeft: {
    position: 'absolute',
    top: 40,
    left: 20,
    opacity: 0.3,
  },
  decorRight: {
    position: 'absolute',
    bottom: 80,
    right: 30,
    opacity: 0.3,
  },
  decorEmoji: {
    fontSize: 48,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xxxl,
  },
  headline: {
    fontSize: typography.fontSize.hero,
    fontWeight: typography.fontWeight.extrabold,
    color: colors.text.primary,
    textAlign: 'center',
    lineHeight: typography.fontSize.hero * 1.3,
    marginBottom: spacing.xl,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  coinDisplays: {
    alignItems: 'center',
    marginBottom: spacing.xxl,
  },
  coinRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing.sm,
  },
  coinIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  coinIconText: {
    color: colors.text.primary,
    fontSize: 12,
    fontWeight: typography.fontWeight.bold,
  },
  coinAmount: {
    color: colors.text.primary,
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
  },
  ctaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary.main,
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: borderRadius.button,
    shadowColor: '#FFB800',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  playIcon: {
    color: '#000000',
    fontSize: 18,
    marginRight: 8,
  },
  ctaText: {
    color: '#000000',
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
  },
  carouselDots: {
    flexDirection: 'row',
    marginTop: spacing.xxl,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginHorizontal: 4,
  },
  dotActive: {
    backgroundColor: colors.text.primary,
    width: 24,
  },
  characterPlaceholder: {
    position: 'absolute',
    left: 20,
    bottom: 60,
    width: 120,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  characterEmoji: {
    fontSize: 80,
  },
});

export default HeroBanner;