import { configureStore } from '@reduxjs/toolkit'
import { gameReducer } from './reducers';

export const store = configureStore({
    reducer: {
      game: gameReducer,
    }
  })

  // storeから`RootState`と` AppDispatch`の型を推測
  export type RootState = ReturnType<typeof store.getState>
  // 推測される型： {game: GameState}
  export type AppDispatch = typeof store.dispatch