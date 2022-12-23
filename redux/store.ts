import {
	Action,
	combineReducers,
	configureStore,
	ThunkAction,
} from '@reduxjs/toolkit';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';

import { jobListReducer } from './slices/jobList';

const combinedReducer = combineReducers({
	jobList: jobListReducer,
});

const masterReducer: typeof combinedReducer = (state, action) => {
	if (action.type === HYDRATE) {
		const nextState = {
			...state,
			...action.payload,
		};
		return nextState;
	} else {
		return combinedReducer(state, action);
	}
};

export const makeStore = () =>
	configureStore({
		reducer: masterReducer,
	});

const isDev = process.env.NODE_ENV === 'development';

export const store = makeStore();

export type RootStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<RootStore['getState']>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;

export const wrapper = createWrapper<RootStore>(makeStore, { debug: isDev });