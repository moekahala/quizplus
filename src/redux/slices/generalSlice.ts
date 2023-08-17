import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface GameHistory {
    player: number;
    move: string;
    success: boolean;
}
export interface GeneralState {
    winner: number | null;
    history: GameHistory[];
    playersScore: number[];
}

const initialState: GeneralState = {
  winner: null,
  history: [],
  playersScore: [0, 0],
};

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    addMove: (state, action: PayloadAction<GameHistory>) => {
      state.history.push(action.payload);
      if (action.payload.success) {
        const playerId = action.payload.player - 1;
        state.playersScore[playerId] += 1;
      }
    },
    determineWinner: (state) => {
      if (state.playersScore[0] === state.playersScore[1]) {
        // handle same score
      }

      state.winner = state.playersScore[0] > state.playersScore[1] ? 1 : 2;
    },
    clearResults: () => {
      return initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addMove, determineWinner, clearResults } = generalSlice.actions;

export default generalSlice.reducer;
