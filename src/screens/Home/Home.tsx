import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import {fetchMovies} from '../../redux/slices/movie';
import ListItem from '../../components/ListItem';
import {Header} from '../../components/Header';
import {MovieItem} from '../../MDTypes';

export const HomeScreen = () => {
  const {dispatch, useAppSelector} = useAppNavigation();

  const {movies} = useAppSelector(state => state.movie);

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  const renderMovieItem = ({item}: {item: MovieItem}) => {
    return <ListItem item={item} />;
  };

  return (
    <>
      <Header title="Pop Movies" />
      <FlatList
        data={movies}
        numColumns={2}
        initialNumToRender={20}
        keyExtractor={item => item.id.toString()}
        renderItem={renderMovieItem}
        testID="movies-flatlist"
      />
    </>
  );
};
