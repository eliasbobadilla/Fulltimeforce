import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  user: null,
  repositories: [],
  commits: [],
};

const slice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    setRepositories(state, action) {
      state.repositories = action.payload;
    },
    setCommits(state, action) {
      state.commits = action.payload;
    },
  },
});

export const setLoading = (value) => (dispatch) => {
  dispatch(slice.actions.setLoading(value));
};

export const setUser = (username) => (dispatch) => {
  dispatch(setLoading(true));
  (async () => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    dispatch(slice.actions.setUser(data));
    dispatch(setLoading(false));
    dispatch(setRepositories(username));
  })();
};

export const setRepositories = (username) => (dispatch) => {
  dispatch(setLoading(true));
  (async () => {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`
    );
    const data = await response.json();
    dispatch(slice.actions.setRepositories(data));
    dispatch(setLoading(false));
  })();
};

export const setCommits = (username, repository) => (dispatch) => {
  dispatch(setLoading(true));
  (async () => {
    const response = await fetch(
      `https://api.github.com/repos/${username}/${repository}/commits`
    );
    const data = await response.json();
    dispatch(slice.actions.setCommits(data));
    dispatch(setLoading(false));
  })();
};

export default slice.reducer;
