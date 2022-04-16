import { configureStore } from "@reduxjs/toolkit";
import generalSlice from "../features/GeneralSlice";
import userSlice from "../features/UserSlice";

export const store = configureStore({
	reducer: {
		general: generalSlice,
		user: userSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
