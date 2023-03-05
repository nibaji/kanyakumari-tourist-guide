import {StyleSheet} from 'react-native';

export const home = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatList: {
    margin: 10,
  },
  item: {
    backgroundColor: 'white',
    elevation: 2,
    marginBottom: 30,
    padding: 10,
    borderRadius: 10,
    justifyContent: 'space-around',
  },
  image: {
    aspectRatio: 16 / 9,
    borderRadius: 10,
  },
  title: {
    marginTop: 5,
    marginLeft: 5,
    fontWeight: 'bold',
  },
});

export const place = StyleSheet.create({});
