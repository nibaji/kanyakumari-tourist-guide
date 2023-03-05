import {
  View,
  Text,
  FlatList,
  Image,
  ListRenderItemInfo,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import useSWR, {Fetcher} from 'swr';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {dataListType, dataType} from '../types/data';
import {RootStackParamList} from '../types/navigation';
import {PLACE} from '../navigation/screens';

import {home} from './styles';

const fetcher: Fetcher<dataListType> = (url: RequestInfo) =>
  fetch(url).then(res => res.json());

type Props = NativeStackScreenProps<RootStackParamList>;
const HomeScreen = ({navigation}: Props) => {
  const {data, error, isLoading} = useSWR(
    'https://raw.githubusercontent.com/nibaji/kanyakumari-tourist-guide-data/main/places.json',
    fetcher,
  );

  const renderItem = (listItem: ListRenderItemInfo<dataType>) => {
    const {item} = listItem;
    return (
      <TouchableOpacity
        style={home.item}
        onPress={() => navigation.navigate(PLACE, item)}>
        <Image source={{uri: item.image}} style={home.image} />
        <Text style={home.title}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  const renderView = () => {
    if (isLoading) {
      return <Text>Loading..</Text>;
    }
    if (error) {
      return <Text>Error</Text>;
    }
    return (
      <FlatList data={data} renderItem={renderItem} style={home.flatList} />
    );
  };

  return <View style={home.container}>{renderView()}</View>;
};

export default HomeScreen;
