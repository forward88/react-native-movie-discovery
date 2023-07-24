import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AnyAction, ThunkDispatch} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {RootStackParamList} from '../MDTypes';
import {RootState} from '../redux/store';

export const useAppNavigation = () => {
  type TypedDispatch<T> = ThunkDispatch<T, any, AnyAction>;
  const useAppDispatch = () => useDispatch<TypedDispatch<RootState>>();
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useAppDispatch();

  return {
    navigation,
    dispatch,
    useAppSelector,
  };
};
