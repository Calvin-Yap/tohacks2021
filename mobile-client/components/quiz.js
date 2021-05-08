import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import MultiSelect from 'react-native-multiple-select';
const tags =[{
    id: '1',
    tag: 'sushi'
},
{
    id: '2',
    tag:'Spicy'
},
{
    id: '3',
    tag:'Sour'
},
{
    id: '4',
    tag:'Thai'
},
{
    id: '5',
    tag:'Tangy'
},
{
    id: '6',
    tag:'Sweet'
},
{
    id: '7',
    tag:'Trendy'
},]

const items = [{
    id: '92iijs7yta',
    name: 'Ondo'
  }, {
    id: 'a0s0a8ssbsd',
    name: 'Ogun'
  }, {
    id: '16hbajsabsd',
    name: 'Calabar'
  }, {
    id: 'nahs75a5sg',
    name: 'Lagos'
  }, {
    id: '667atsas',
    name: 'Maiduguri'
  }, {
    id: 'hsyasajs',
    name: 'Anambra'
  }, {
    id: 'djsjudksjd',
    name: 'Benue'
  }, {
    id: 'sdhyaysdj',
    name: 'Kaduna'
  }, {
    id: 'suudydjsjd',
    name: 'Abuja'
    }
];

const quiz=()=> {
    const handleChange =()=>{

    }
    return (
        <View style={styles.container}>
            <MultiSelect  
            items={items}
            uniqueKey="id"
            onSelectedItemsChange={handleChange}
            selectedItems={[]}
            searchInputPlaceholderText="Search Items..."
            selectText="Pick Items"

            />
            
        
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
export default quiz;