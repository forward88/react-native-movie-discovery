import React from 'react';
import {ScrollView, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {RouteProp} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {MovieItem} from '../../MDTypes';
import {Header} from '../../components/Header';
import {IMAGE_URL, MD_TEXTS} from '../../utils/constants';
import {styles} from './styles';

type Props = {
  route?: RouteProp<{params: {item: MovieItem}}, 'params'>;
};

export const DetailsScreen = ({route}: Props) => {
  const item = route?.params?.item;

  return (
    <>
      <Header title={MD_TEXTS.detail_title} isBack />
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
                    uri: `${IMAGE_URL}${item?.backdrop_path}`,
                  }}
                  style={styles.backdrop}
                />
              </View>
              <View style={styles.dateView}>
                <Text variant="bodyLarge">{item?.release_date}</Text>
                <Text variant="bodyMedium">{item?.vote_count}</Text>
                <Text variant="bodyMedium" style={styles.ratingText}>
                  {item?.vote_average}/10
                </Text>
                <Button mode="contained" style={styles.favoriteBtn}>
                  {MD_TEXTS.add_favorite}
                </Button>
              </View>
            </View>
            <View style={styles.contentView}>
              <Text variant="bodyMedium">{item?.overview}</Text>
            </View>
            <View style={styles.trailerView}>
              <Text variant="bodyMedium">{MD_TEXTS.trailers}</Text>
            </View>
            <View style={styles.contentView}>
              {item?.genre_ids.map((genre: number, index: number) => {
                return (
                  <View style={styles.genreItem} key={genre}>
                    <EvilIcons name="play" size={20} />
                    <Text variant="bodyMedium">
                      {MD_TEXTS.play_trailer} {index + 1}
                    </Text>
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
