import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React, {useEffect} from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from '../types/navigation';
import {dataType} from '../types/data';

import {place} from './styles';

type Props = NativeStackScreenProps<RootStackParamList>;
const Place = ({navigation, route}: Props) => {
  const item = route.params as dataType;

  const handleButtonPress = async (link: string) => {
    await Linking.openURL(link);
  };

  useEffect(() => {
    navigation.setOptions({
      title: item.title,
    });
  }, [navigation, item]);

  return (
    <>
      <ScrollView style={place.container}>
        <Image source={{uri: item.image}} style={place.image} />
        <View style={place.detailsContainer}>
          <Text style={place.title}>{item?.title}</Text>
          <Text style={place.description}>{item.description}</Text>
        </View>
      </ScrollView>
      <View style={place.buttonContainer}>
        {item.contact ? (
          <TouchableOpacity
            style={place.button}
            onPress={async () => {
              await handleButtonPress(`tel://${item.contact}`);
            }}>
            <Text style={place.buttonTxt}>Contact</Text>
          </TouchableOpacity>
        ) : (
          <></>
        )}
        {item.location ? (
          <TouchableOpacity
            style={place.button}
            onPress={async () => {
              await handleButtonPress(item.location);
            }}>
            <Text style={place.buttonTxt}>Reach</Text>
          </TouchableOpacity>
        ) : (
          <></>
        )}
      </View>
    </>
  );
};

export default Place;
