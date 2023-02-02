import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        incrementCounter: (state, action: PayloadAction<number>): number => {
            return (state += action.payload);
        },
    },
});

// Action creators are generated for each case reducer function
export const { incrementCounter } = counterSlice.actions;

// You must export the reducer as follows for it to be able to be read by the store.
export default counterSlice.reducer;
