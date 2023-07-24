import {StyleSheet} from 'react-native';
import {MD_COLORS} from '../../utils/constants';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: MD_COLORS.white,
  },
  titleView: {
    height: 56,
    backgroundColor: MD_COLORS.secondary,
    justifyContent: 'center',
    padding: 16,
  },
  movieTitle: {
    fontSize: 20,
    color: MD_COLORS.white,
  },
  container: {
    padding: 24,
    flex: 1,
    backgroundColor: MD_COLORS.white,
  },
  headerView: {
    display: 'flex',
    flexDirection: 'row',
  },
  backdrop: {
    width: 115,
    height: 170,
    borderRadius: 2,
    resizeMode: 'contain',
  },
  dateView: {
    flex: 1,
    marginLeft: 16,
  },
  favoriteBtn: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: MD_COLORS.secondary,
    borderRadius: 2,
  },
  contentView: {
    marginTop: 24,
  },
  trailerView: {
    marginTop: 24,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: MD_COLORS.gray,
  },
  genreItem: {
    backgroundColor: MD_COLORS.white100,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginBottom: 8,
  },
  ratingText: {
    marginTop: 24,
  },
});
