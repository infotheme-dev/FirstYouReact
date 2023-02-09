import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Layout,Icon } from '@ui-kitten/components';
import HStack from './elements/HStack';
import VStack from './elements/VStack';

export default function Header({navigation}) {
  console.log(navigation);
  return (  
  <HStack style={styles.appbar_top}>
    <VStack>
      <Text style={styles.logo_top}>FIRST</Text>
      <Text style={styles.logo_bottom}>YOU.</Text>
    </VStack>
    <HStack>
        <VStack style={styles.button_top}>
            <Text style={styles.button_top_text}>List your services</Text>
        </VStack>
        <HStack style={styles.button_lang_selector}>
            <Text style={styles.button_lang_top_text}>English</Text>
            <Icon 
            fill='#7C7C7C'
            style={{width:16,height:16}}
            name="arrow-ios-downward-outline"/>
        </HStack>
    </HStack>
</HStack>);
}

const styles = StyleSheet.create({
  
    appbar_top: {
        height:48,
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:16,
        backgroundColor:"#ffffff",
      },
      logo_top: {
        fontSize:21,
        color:"#1a1a1a",
        fontFamily:'Barlow_700Bold'
      },
      logo_bottom : {
        fontSize:26,
        marginTop:-8,
         color:'#F6182D',
        fontFamily:'Barlow_700Bold'
      },
      
      button_top : {
        borderWidth:1.5,
        borderColor:'#F6182D',
        borderStyle:'solid',
        paddingHorizontal:10,
        paddingVertical:4,
        borderRadius:6,
        backgroundColor:'transparent'
      },
      button_top_text:{
        fontSize:12,
        color:'#F6182D',
        fontFamily:'Barlow_600SemiBold'
      },
    
      button_lang_selector : {
        marginLeft:12,
        paddingVertical:4,
        borderRadius:6,
      },
      button_lang_top_text:{
        fontSize:12,
        color:'#7C7C7C',
        fontFamily:'Barlow_600SemiBold'
      },
 
});
