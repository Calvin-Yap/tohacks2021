import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

const login=()=> {

    return (
      <View style={styles.container}>
        <Text>EzEats</Text>
        <Button title="Login">Login</Button>
        <Button title="Sign Up">Sign Up</Button>
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

  export default login;