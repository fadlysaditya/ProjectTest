import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import PDPStack from './AccountStack';

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Track Loc" component={HomeStack} />
      <Tab.Screen name="F1" component={PDPStack} />
    </Tab.Navigator>
  );
};

export default MainTab;
