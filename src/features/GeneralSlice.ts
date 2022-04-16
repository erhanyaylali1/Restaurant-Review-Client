import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";

export interface IGeneralSlice {
	screenSize: number;
}

const initialState: IGeneralSlice = {
	screenSize: 0,
};

export const generalSlice = createSlice({
	name: "general",
	initialState,
	reducers: {
		setScreenSize: (state, action: PayloadAction<number>) => {
			state.screenSize = action.payload;
		},
	},
});

export const { setScreenSize } = generalSlice.actions;

export const selectCount = (state: RootState) => state.general.screenSize;

export default generalSlice.reducer;
