import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/login'
import PersonalInfo from './components/personalInfo'
import MainPage from './components/mainPage'
import Quiz from './components/quiz'
import MultiSelect from './components/multiselect'

export default function App() {
  return (
    //<Login/>
    //<PersonalInfo/>
    //<MainPage/>
    //<Quiz/>
    <MultiSelect/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
