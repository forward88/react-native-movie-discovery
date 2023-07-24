import React from 'react';
import {ScrollView, View} from 'react-native';
import {Appbar, Button, Text} from 'react-native-paper';
import {RouteProp} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import {MovieItem} from '../../MDTypes';
import {styles} from './styles';

type Props = {
  route?: RouteProp<{params: {item: MovieItem}}, 'params'>;
};

export const DetailsScreen = ({route}: Props) => {
  const {navigation} = useAppNavigation();
  const item = route?.params?.item;

  return (
    <>
      <Appbar.Header theme={{dark: true}}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Movie Details" />
        <Appbar.Action icon="dots-vertical" onPress={() => {}} />
      </Appbar.Header>
      <View style={styles.wrapper}>
        <ScrollView>
          <View style={styles.titleView}>
            <Text variant="bodyLarge" style={styles.movieTitle}>
              {item?.title}
            </Text>
          </View>
          <View style={styles.container}>
            <View style={styles.headerView}>
              <View>
                <FastImage
                  source={{
                    uri: `https://image.tmdb.org/t/p/w185${item?.backdrop_path}`,
                  }}
                  style={styles.backdrop}
                />
              </View>
              <View style={styles.dateView}>
                <Text variant="bodyLarge">{item?.release_date}</Text>
                <Text variant="bodyMedium">{item?.title}</Text>
                <Text variant="bodyMedium">{item?.vote_average}/10</Text>
                <Button mode="contained" style={styles.favoriteBtn}>
                  Add to Favorite
                </Button>
              </View>
            </View>
            <View style={styles.contentView}>
              <Text variant="bodyMedium">{item?.overview}</Text>
            </View>
            <View style={styles.trailerView}>
              <Text variant="bodyMedium">TRAILERS</Text>
            </View>
            <View style={styles.contentView}>
              {item?.genre_ids.map((genre: number, index: number) => {
                return (
                  <View style={styles.genreItem} key={genre}>
                    <EvilIcons name="play" size={20} />
                    <Text variant="bodyMedium">Play trailer {index + 1}</Text>
                  </View>
                );
              })}
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};
