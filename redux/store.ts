import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import { jobListReducer } from './slices/jobList';

export const makeStore = () =>
	configureStore({
		reducer: jobListReducer,
	});

export const store = makeStore();

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;