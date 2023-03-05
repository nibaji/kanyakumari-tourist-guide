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

export const place = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  image: {
    aspectRatio: 4 / 3,
  },
  detailsContainer: {
    marginTop: -25,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  description: {
    marginTop: 20,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: '10%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    backgroundColor: 'royalblue',
    elevation: 2,
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 10,
    flex: 1,
    marginHorizontal: 10,
  },
  buttonTxt: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center',
  },
});
