import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { JobListItem } from './../../interfaces';
import type { RootState } from '../store';

export interface JobListState {
	jobList: JobListItem[],
	statusLoading: 'idle' | 'loading' | 'failed',
}

const initialState: JobListState = {
	jobList: [],
	statusLoading: 'idle',
}

export const fetchJobList = createAsyncThunk(
	'jobList/fetchJobLists',
	async () => {
		const _apiBase = 'https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=';
		const _API_ACCESS_TOKEN = process.env.NEXT_PUBLIC_API_ACCESS_TOKEN;

		const response = await fetch(`${_apiBase + _API_ACCESS_TOKEN}`)
		const jobListData = await response.json();

		return jobListData;
	}
);

export const jobListSlice = createSlice({
	name: 'jobList',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchJobList.pending, (state) => {
				state.statusLoading = 'loading';
			})
			.addCase(fetchJobList.fulfilled, (state, { payload }) => {
				state.statusLoading = 'idle';
				state.jobList = payload;
			})
			.addCase(fetchJobList.rejected, (state) => {
				state.statusLoading = 'failed';
			})
	},
});

export const selectJobList = (state: RootState) => state.jobList;

export const jobListReducer = jobListSlice.reducer;