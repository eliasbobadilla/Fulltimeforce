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
      state.list = action.payload;
    },
    setCommits(state, action) {
      state.list = action.payload;
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
    dispatch(setRepositories(username));
    dispatch(setCommits(username));
    dispatch(setLoading(true));
  })();
};

export const setRepositories = (username) => (dispatch) => {
  (async () => {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`
    );
    const data = await response.json();
    dispatch(slice.actions.setRepositories(data));
  })();
};

export const setCommits = (username) => (dispatch) => {
  (async () => {
    const response = await fetch(
      `https://api.github.com/repos/${username}/Fulltimeforce/commits`
    );
    const data = await response.json();
    dispatch(slice.actions.setCommits(data));
  })();
};

export default slice.reducer;
