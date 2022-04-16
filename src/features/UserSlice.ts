import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";

export interface IUserSlice {
	user: IUser | null;
	isLogged: boolean;
}

export interface IUser {
	name?: string;
	email?: string;
	userId?: string;
}

const initialState: IUserSlice = {
	user: null,
	isLogged: false,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		signIn: (state, action: PayloadAction<IUser>) => {
			state.user = action.payload;
			state.isLogged = true;
		},
		signOut: (state) => {
			state.user = null;
			state.isLogged = false;
		},
	},
});

export const { signIn, signOut } = userSlice.actions;

export const getUser = (state: RootState) => state.user.user;
export const getIsLogged = (state: RootState) => state.user.isLogged;

export default userSlice.reducer;
