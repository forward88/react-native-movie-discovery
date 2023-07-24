import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const screenWidth = width;
export const screenHeight = height;

export const MD_PAGES = {
  home: 'Home',
  details: 'Details',
};

export const MOVIES_URL = 'https://api.themoviedb.org/3/movie/popular';

export const MD_COLORS = {
  secondary: '#746A64',
  white: '#FFFFFF',
  gray: '#DEDEDE',
  white100: '#FAFAFA',
};

export const IMAGE_URL = 'https://image.tmdb.org/t/p/w185';

export const MD_TEXTS = {
  home_title: 'Pop Movies',
  detail_title: 'Movie Details',
  add_favorite: 'Add to Favorite',
  trailers: 'TRAILERS',
  play_trailer: 'Play trailer',
};
