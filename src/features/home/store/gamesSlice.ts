import { createSlice, createAsyncThunk, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { Game, LoadingState } from '@shared/types';
import { mockGames, getSectionGames } from '@shared/constants/mockData';
import { storageService } from '@shared/services/storage.service';

interface GamesState {
  allGames: Game[];
  favoriteIds: string[];
  currentTab: 'all' | 'favorites';
  loadingState: LoadingState;
  error: string | null;
}

const initialState: GamesState = {
  allGames: [],
  favoriteIds: [],
  currentTab: 'all',
  loadingState: LoadingState.IDLE,
  error: null,
};

export const loadFavorites = createAsyncThunk('games/loadFavorites', async () => {
  const favoriteIds = await storageService.getFavorites();
  return favoriteIds;
});

export const saveFavorites = createAsyncThunk(
  'games/saveFavorites',
  async (favoriteIds: string[]) => {
    await storageService.saveFavorites(favoriteIds);
    return favoriteIds;
  }
);

export const initializeApp = createAsyncThunk(
  'games/initialize',
  async (_, { dispatch }) => {
    const favoriteIds = await dispatch(loadFavorites()).unwrap();
    return { games: mockGames, favoriteIds };
  }
);

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<string>) => {
      const gameId = action.payload;
      const index = state.favoriteIds.indexOf(gameId);

      if (index > -1) {
        state.favoriteIds.splice(index, 1);
      } else {
        state.favoriteIds.push(gameId);
      }

      const game = state.allGames.find((g) => g.id === gameId);
      if (game) {
        game.isFavorite = !game.isFavorite;
      }
    },

    setCurrentTab: (state, action: PayloadAction<'all' | 'favorites'>) => {
      state.currentTab = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(initializeApp.pending, (state) => {
        state.loadingState = LoadingState.LOADING;
      })
      .addCase(initializeApp.fulfilled, (state, action) => {
        const { games, favoriteIds } = action.payload;
        state.allGames = games.map((game) => ({
          ...game,
          isFavorite: favoriteIds.includes(game.id),
        }));
        state.favoriteIds = favoriteIds;
        state.loadingState = LoadingState.SUCCESS;
      })
      .addCase(initializeApp.rejected, (state, action) => {
        state.loadingState = LoadingState.ERROR;
        state.error = action.error.message || 'Failed to load games';
      })
      .addCase(loadFavorites.fulfilled, (state, action) => {
        state.favoriteIds = action.payload;
      })
      .addCase(saveFavorites.fulfilled, (state, action) => {
        state.favoriteIds = action.payload;
      });
  },
});

export const { toggleFavorite, setCurrentTab } = gamesSlice.actions;

export const selectAllGames = (state: { games: GamesState }) => state.games.allGames;
export const selectFavoriteIds = (state: { games: GamesState }) => state.games.favoriteIds;
export const selectCurrentTab = (state: { games: GamesState }) => state.games.currentTab;
export const selectLoadingState = (state: { games: GamesState }) => state.games.loadingState;

export const selectMostPopularGames = createSelector(
  [selectAllGames, selectFavoriteIds],
  (allGames, favoriteIds) => getSectionGames('most-popular', allGames, favoriteIds)
);

export const selectRegionalGames = createSelector(
  [selectAllGames, selectFavoriteIds],
  (allGames, favoriteIds) => getSectionGames('most-played-region', allGames, favoriteIds)
);

export const selectFavoriteGames = createSelector(
  [selectAllGames, selectFavoriteIds],
  (allGames, favoriteIds) => getSectionGames('favorites', allGames, favoriteIds)
);

export default gamesSlice.reducer;