import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Board from '../models/Board';


export const boardsSlice = createSlice({
    name: 'boards',
    initialState: {
        boards: [] as Board[],
    },
    reducers: {
        addBoard(state, action: PayloadAction<Board>) {
            state.boards.push(action.payload);
        },
        removeBoard(state, action: PayloadAction<Board>) {
            state.boards = state.boards.filter(board => board.id !== action.payload.id);
        },
    }
});

export const { addBoard, removeBoard } = boardsSlice.actions;  
export const boardsState = (state: { boards: { boards: Board[]; }; }) => state.boards.boards; 
export default boardsSlice.reducer;