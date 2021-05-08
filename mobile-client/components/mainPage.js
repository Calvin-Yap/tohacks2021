import React from 'react';
import { StyleSheet, TextInput, View, Text, ScrollView, Button, Image, FlatList } from 'react-native';
import {SearchBar,} from 'react-native-elements'

const mainPage=()=> {

    return (
      <View style={styles.container}>
        <SearchBar placeholder="Search..."/>
        <View style={styles.buttonScroll}>
        <ScrollView style={styles.buttonScroll} horizontal={true}>
                <Button title="Chinese"/>
                <Button title="Sushi"/>
                <Button title="Thai"/>
                <Button title="Shawarma"/>
                <Button title="Greek"/>
                <Button title="Spicy"/>                
        </ScrollView>
        </View>
        <View style={styles.images}>
        <FlatList/>
        </View>
        <View style={styles.bottomBar}>
                <Button title="Food"/>
                <Button title="Search"/>
                <Button title="Likes"/>
                <Button title="Settings"/>              
        </View>
      </View>

    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'stretch'
    },
    buttonScroll:{
        flex: 0
    },
    images:{
        flex:10,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    bottomBar:{
      flex:1,
      flexDirection:'row',
      justifyContent:'space-evenly'
    }
  });

  export default mainPage;