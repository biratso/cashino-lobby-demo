import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, View, RefreshControl, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAppDispatch, useAppSelector } from '@app/store';
import {
  initializeApp,
  toggleFavorite,
  saveFavorites,
  setCurrentTab,
  selectPersonalisedGames,
  selectRegionalGames,
  selectAlreadyPlayedGames,
  selectFavoriteGames,
  selectCurrentTab,
  selectFavoriteIds,
  selectLoadingState,
} from '@features/home/store/gamesSlice';
import { LoadingState, RootStackParamList, Game } from '@shared/types';
import { useResponsive } from '@shared/hooks/useResponsive';
import { colors } from '@shared/constants/theme';
import Header from '../components/Header';
import HeroCarousel from '../components/HeroCarousel';
import TabNavigation from '../components/TabNavigation';
import GameSection from '../components/GameSection';
import { Text } from 'react-native';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const dispatch = useAppDispatch();
  const { columns, regionalTop10Columns } = useResponsive();

  const personalisedGames = useAppSelector(selectPersonalisedGames);
  const regionalGames = useAppSelector(selectRegionalGames);
  const alreadyPlayedGames = useAppSelector(selectAlreadyPlayedGames);
  const favoriteGames = useAppSelector(selectFavoriteGames);
  const currentTab = useAppSelector(selectCurrentTab);
  const favoriteIds = useAppSelector(selectFavoriteIds);
  const loadingState = useAppSelector(selectLoadingState);

  const isLoading = loadingState === LoadingState.LOADING;

  useEffect(() => {
    dispatch(initializeApp());
  }, [dispatch]);

  const handleGamePress = (game: Game) => {
    navigation.navigate('GamePlay', {
      gameId: game.id,
      gameTitle: game.title,
    });
  };

  const handleFavoritePress = (gameId: string) => {
    dispatch(toggleFavorite(gameId));

    const newFavorites = favoriteIds.includes(gameId)
      ? favoriteIds.filter((id) => id !== gameId)
      : [...favoriteIds, gameId];

    dispatch(saveFavorites(newFavorites));
  };

  const handleTabChange = (tab: 'all' | 'favorites') => {
    dispatch(setCurrentTab(tab));
  };

  const handleRefresh = () => {
    dispatch(initializeApp());
  };

  return (
    <View style={styles.container}>
      <Header />

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={handleRefresh}
            tintColor={colors.primary.main}
          />
        }
      >
        <HeroCarousel />

        <TabNavigation activeTab={currentTab} onTabChange={handleTabChange} />

        {currentTab === 'all' ? (
          <>
            <GameSection
              title="For You"
              iconName="facebook-like"
              games={personalisedGames}
              columns={columns}
              onGamePress={handleGamePress}
              onFavoritePress={handleFavoritePress}
            />

            <GameSection
              title="TOP 10 GAMES IN YOUR HOME STATE"
              iconName="american-flag"
              games={regionalGames}
              columns={regionalTop10Columns}
              onGamePress={handleGamePress}
              onFavoritePress={handleFavoritePress}
              isRegionalTop10={true}
            />

            {alreadyPlayedGames.length > 0 && (
              <GameSection
                title="ALREADY PLAYED"
                iconName="green-play"
                games={alreadyPlayedGames}
                columns={columns}
                onGamePress={handleGamePress}
                onFavoritePress={handleFavoritePress}
              />
            )}
          </>
        ) : (
          <>
            <GameSection
              title="FAVORITES"
              iconName="favorite1"
              games={favoriteGames}
              columns={columns}
              onGamePress={handleGamePress}
              onFavoritePress={handleFavoritePress}
            />

            {favoriteGames.length === 0 && (
              <View style={styles.emptyState}>
                <Text style={styles.emptyText}>No favorites yet!</Text>
                <Text style={styles.emptySubtext}>
                  Tap the heart icon on any game to add it to your favorites
                </Text>
              </View>
            )}
          </>
        )}

        <View style={styles.bottomSpacing} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  scrollView: {
    flex: 1,
  },
  emptyState: {
    padding: 40,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text.primary,
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 15,
    color: colors.text.secondary,
    textAlign: 'center',
  },
  bottomSpacing: {
    height: 40,
  },
});

export default HomeScreen;