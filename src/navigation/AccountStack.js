import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PDP from '../screens/Account';
import Detail from '../screens/Detail';

const Stack = createStackNavigator();

const PDPStack = () => {
  return (
    <Stack.Navigator initialRouteName="PDP">
      <Stack.Screen name="PDP" component={PDP} options={{headerShown: false}} />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default PDPStack;
