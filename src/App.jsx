import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainPage from './MainPage.jsx'
import Settings from './Settings.jsx'
import Create from './Create.jsx'
import Edit from './Edit.jsx'
import './App.css'

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={MainPage} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

