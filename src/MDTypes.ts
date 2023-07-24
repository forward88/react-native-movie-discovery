import {MD_PAGES} from './utils/constants';

type ValueOf<T> = T[keyof T];
export type RootStackParamList = {
  [key in ValueOf<typeof MD_PAGES>]: any;
};

export type MovieItem = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type MovieState = {
  movies: Array<MovieItem>;
  fetchError: string;
  isLoading: boolean;
  totalPage: number;
};
