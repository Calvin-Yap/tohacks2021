import React from 'react';
import { StyleSheet, TextInput, View, Text} from 'react-native';

const personalInfo=()=> {

    return (
      <View style={styles.container}>
          <Text>What is Your Name?</Text>
          <TextInput placeholder='First Name'></TextInput>
          <TextInput placeholder='Last Name'></TextInput>

          <Text>Email?</Text>
          <TextInput placeholder='Email'></TextInput>


      </View>
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

  export default personalInfo;