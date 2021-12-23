import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home.js';
import subjectsReducer from './SubjectsReducer.js';
import Subjects from './Subjects';

const Stack = createNativeStackNavigator();
const store = createStore(subjectsReducer);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
            />
          <Stack.Screen
            name="Subjects"
            component={Subjects}
          />
        </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
export default App;