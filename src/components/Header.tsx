import React from 'react';
import {Appbar} from 'react-native-paper';
import {useAppNavigation} from '../hooks/useAppNavigation';

type Props = {
  title: string;
  isBack?: boolean;
};

export const Header = ({title, isBack}: Props) => {
  const {navigation} = useAppNavigation();

  return (
    <Appbar.Header theme={{dark: true}}>
      {isBack ? (
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      ) : null}
      <Appbar.Content title={title} />
      <Appbar.Action icon="dots-vertical" onPress={() => {}} />
    </Appbar.Header>
  );
};
