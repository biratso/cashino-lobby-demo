import React, { memo } from 'react';
import { StyleSheet, Dimensions, Platform, View } from 'react-native';
import { Card, IconButton } from 'react-native-paper';
import { Text } from 'react-native';
import { Game } from '@shared/types';
import { colors, borderRadius, layout, typography, spacing } from '@shared/constants/theme';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

interface GameCardProps {
  game: Game;
  onPress: () => void;
  onFavoritePress: () => void;
  cardWidth: number;
  isRegionalTop10?: boolean;
  itemIndex?: number;
}

const GameCard: React.FC<GameCardProps> = ({ game, onPress, onFavoritePress, cardWidth, isRegionalTop10 = false, itemIndex = 0 }) => {
  const cardHeight = cardWidth; // Make cards square

  return (
    <Card style={[styles.container, { width: cardWidth, height: cardHeight }]} onPress={onPress}>
      <Card.Cover source={{ uri: game.image }} resizeMode="cover" style={[styles.image, { height: cardHeight, width: cardWidth }]} />

      <IconButton
        icon={game.isFavorite ? 'heart' : 'heart-outline'}
        iconColor={game.isFavorite ? colors.heart.active : colors.heart.inactive}
        containerColor={colors.background.surface}
        size={20}
        onPress={onFavoritePress}
        style={styles.favoriteButton}
      />

      {/* <Card.Content style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>
          {game.title}
        </Text>
        <Text style={styles.description} numberOfLines={2}>
          {game.description}
        </Text>
      </Card.Content> */}
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: borderRadius.card,
    backgroundColor: colors.background.card,
    // marginBottom: layout.gameCardGap,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  image: {
    backgroundColor: colors.background.secondary,
  },
  favoriteButton: {
    position: 'absolute',
    top: 4,
    right: 4,
    margin: 0,
  },
  content: {
    paddingTop: spacing.sm,
    paddingBottom: spacing.md,
  },
  title: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
    marginBottom: spacing.xs,
  },
  description: {
    fontSize: typography.fontSize.sm,
    color: colors.text.secondary,
    lineHeight: typography.fontSize.sm * 1.4,
  },
});

export default memo(GameCard);