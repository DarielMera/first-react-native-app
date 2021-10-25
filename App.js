import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './component/Home';
import DetailScreen from './component/DetailsScreen';
import Coffee from './component/Coffee';

const Stack = createNativeStackNavigator();

export default function App() {
  return ( // this is similar to router wrap around switch
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Details' component={DetailScreen} />
        <Stack.Screen name='Coffee' component={Coffee} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
  }
  
})

