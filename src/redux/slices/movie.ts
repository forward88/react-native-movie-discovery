import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {REACT_APP_TMDB_API_TOKEN} from '@env';
import {MOVIES_URL} from '../../utils/constants';
import {MovieState} from '../../MDTypes';

const initialState: MovieState = {
  movies: [],
  fetchError: '',
  isLoading: false,
  totalPage: 0,
};

export const fetchMovies: any = createAsyncThunk(
  'movies/fetch-movies',
  async (pageIndex: number, thunkApi) => {
    try {
      const response = await axios.get(
        `${MOVIES_URL}?api_key=${REACT_APP_TMDB_API_TOKEN}`,
      );
      return {
        results: response.data.results,
        totalPage: response.data.total_pages,
      };
    } catch (e) {
      return thunkApi.rejectWithValue('Failed to fetch');
    }
  },
);

const MovieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    intializeMovies: state => {
      state.movies = [];
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchMovies.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      const {results, totalPage} = action.payload;
      state.movies = results;
      state.isLoading = false;
      state.fetchError = '';
      state.totalPage = totalPage;
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.fetchError = action.payload as string;
      state.movies = [];
      state.isLoading = false;
    });
  },
});

export const {intializeMovies} = MovieSlice.actions;
export const movieReducer = MovieSlice.reducer;
