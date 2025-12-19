export interface Game {
  id: string;
  title: string;
  description: string;
  image: string;
  isFavorite: boolean;
  popularity: number;
  region: string;
  playerCount: number;
  category?: string;
  provider?: string;
}

export enum LoadingState {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export type RootStackParamList = {
  Home: undefined;
  GamePlay: {
    gameId: string;
    gameTitle: string;
  };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}