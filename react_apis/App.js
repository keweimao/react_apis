import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductEntry from './ProductEntry';
import HttpCat from './HttpCat';
import SecondTab from './SecondTab';
import ThirdTab from './ThirdTab';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="ProductEntry" component={ProductEntry} />
        <Tab.Screen name="SecondTab" component={HttpCat} />
        <Tab.Screen name="ThirdTab" component={ThirdTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}