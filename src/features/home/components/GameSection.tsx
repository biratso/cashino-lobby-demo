import React, { memo } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Game } from '@shared/types';
import GameCard from './GameCard';
import { colors, typography, spacing, layout } from '@shared/constants/theme';

interface GameSectionProps {
  title: string;
  icon: string;
  games: Game[];
  columns?: number;
  onGamePress: (game: Game) => void;
  onFavoritePress: (gameId: string) => void;
}

const GameSection: React.FC<GameSectionProps> = ({
  title,
  icon,
  games,
  columns = 3,
  onGamePress,
  onFavoritePress,
}) => {
  if (games.length === 0) {
    return null;
  }

  const renderGame = ({ item }: { item: Game }) => (
    <View style={[styles.cardWrapper, { width: `${100 / columns}%` }]}>
      <GameCard
        game={item}
        onPress={() => onGamePress(item)}
        onFavoritePress={() => onFavoritePress(item.id)}
        columns={columns}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.icon}>{icon}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>

      <FlatList
        data={games}
        renderItem={renderGame}
        keyExtractor={(item) => item.id}
        numColumns={columns}
        key={columns}
        scrollEnabled={false}
        contentContainerStyle={styles.gridContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: layout.sectionMarginBottom,
    paddingHorizontal: layout.containerPadding,
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
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  gridContainer: {
    paddingBottom: spacing.sm,
  },
  cardWrapper: {
    padding: layout.gameCardGap / 2,
  },
});

export default memo(GameSection);