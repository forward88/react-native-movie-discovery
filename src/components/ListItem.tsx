import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import {TouchableRipple} from 'react-native-paper';
import {MovieItem} from '../MDTypes';
import {useAppNavigation} from '../hooks/useAppNavigation';
import {IMAGE_URL, MD_PAGES, screenWidth} from '../utils/constants';

const ListItem = ({item}: {item: MovieItem}) => {
  const {navigation} = useAppNavigation();

  const onPressItem = (param: MovieItem) => {
    navigation.dispatch(
      CommonActions.navigate({
        name: MD_PAGES.details,
        params: {item: param},
      }),
    );
  };

  return (
    <TouchableRipple
      onPress={() => onPressItem(item)}
      key={item.id}
      testID="movie-item">
      <View style={styles.movieItemWrapper}>
        <FastImage
          source={{uri: `${IMAGE_URL}${item.poster_path}`}}
          style={styles.imageItem}
        />
      </View>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  movieItemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageItem: {
    width: screenWidth / 2,
    height: 280,
    resizeMode: 'contain',
  },
});

export default memo(ListItem);
