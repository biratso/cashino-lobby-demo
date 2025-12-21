import React, { memo } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Game } from '@shared/types';
import GameCard from './GameCard';
import { colors, typography, spacing, layout } from '@shared/constants/theme';
import { Icon, IconName } from '@/src/shared/components/Icon';
import { RankNumber } from '../../../shared/components/RankedGradient';

interface GameSectionProps {
  title: string;
  iconName: IconName;
  games: Game[];
  columns?: number;
  onGamePress: (game: Game) => void;
  onFavoritePress: (gameId: string) => void;
  isRegionalTop10?: boolean;
}

const GameSection: React.FC<GameSectionProps> = ({
  title,
  iconName,
  games,
  columns = 3,
  onGamePress,
  onFavoritePress,
  isRegionalTop10 = false,
}) => {
  if (games.length === 0) {
    return null;
  }

  // Calculate card dimensions for square cards
  const cardGap = layout.gameCardGap;
  const horizontalPadding = 16 * 2;
  const totalGaps = (columns - 1) * cardGap;
  const availableWidth = Dimensions.get('window').width - horizontalPadding - totalGaps;
  const cardWidth = availableWidth / columns;

  const renderGame = ({ item, index }: { item: Game; index: number }) => {
    if (isRegionalTop10 && index < 3) {
      return (
        <View style={[styles.regionalCardContainer, {paddingLeft: cardWidth * 0.4}]}>
          <RankNumber value={index + 1} cardWidth={cardWidth} />
          <View style={styles.cardWrapper}>
            <GameCard
              game={item}
              onPress={() => onGamePress(item)}
              onFavoritePress={() => onFavoritePress(item.id)}
              cardWidth={cardWidth}
              isRegionalTop10={isRegionalTop10}
            />
          </View>
        </View>
      );
    }

    return (
      <View style={styles.cardWrapper}>
        <GameCard
          game={item}
          onPress={() => onGamePress(item)}
          onFavoritePress={() => onFavoritePress(item.id)}
          cardWidth={cardWidth}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name={iconName} size={24} color={colors.purple.vibrant} style={styles.icon} />
        <Text style={styles.title}>{title}</Text>
      </View>

      <FlatList
        data={games}
        renderItem={renderGame}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: layout.sectionMarginBottom,
    paddingHorizontal: layout.containerPadding,
    // backgroundColor: 'red',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  icon: {
    fontSize: 24,
    marginRight: spacing.sm,
  },
  title: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.black,
    color: colors.text.primary,
    letterSpacing: 1,
  },
  horizontalContainer: {
    paddingRight: spacing.sm,
    paddingBottom: spacing.sm,
    // backgroundColor: 'red'
  },
  regionalCardContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginRight: layout.gameCardGap,
    marginBottom: layout.gameCardGap,
  },
  cardWrapper: {
    marginRight: layout.gameCardGap,
    // backgroundColor: 'blue',
  },
});

export default memo(GameSection);