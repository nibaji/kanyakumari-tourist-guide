import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HOME, PLACE} from './screens';

import HomeScreen from '../screens/HomeScreen';
import Place from '../screens/Place';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={HOME}
          component={HomeScreen}
          options={{title: 'Welcome to Kanyakumari'}}
        />
        <Stack.Screen name={PLACE} component={Place} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
