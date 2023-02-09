import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Layout,Icon } from '@ui-kitten/components';
import HStack from './elements/HStack';
import VStack from './elements/VStack';

export default function  HeaderDashboard(props) {
    const progress_rest = 100 - props.completion;
  return ( 
  <VStack>
  <HStack style={[styles.appbar_top]}>
    <VStack>
        <HStack>      
            <Text style={styles.logo_top}>FIRST</Text>
            <Text style={styles.logo_bottom}>YOU.</Text>
        </HStack>
      <HStack style={[styles.button_lang_selector]}>
            <Text style={styles.button_lang_top_text}>Negi’s Hotel</Text>
            <Icon 
            fill='#5F5D5D'
            style={{width:20,height:20}}
            name="chevron-down"/>
        </HStack>
    </VStack>
    <HStack>
    <Icon 
            fill='#000'
            style={styles.icon}
            name="search-outline"/>
    <Icon 
            fill='#000'
            style={styles.icon}
            name="bell-outline"/>
        <Layout style={styles.button_top}>
            <Text style={styles.button_top_text}>Need Help?</Text>
        </Layout>
    </HStack>
   
    </HStack>
      <HStack>
                <View style={{height:1.5, width:'100%', backgroundColor:'#DEDEDE'}}></View>
           </HStack>
</VStack>
);
}

const styles = StyleSheet.create({
  
    appbar_top: {
        height:50,
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:16,
        backgroundColor:"#ffffff",
      },
     icon:{
        width:24,
        height:24, 
        marginHorizontal:6, 
     },
      logo_top: {
        fontSize:13,
        color:"#1a1a1a",
        fontFamily:'Barlow_700Bold'
      },
      logo_bottom : {
        fontSize:13,
         color:'#F6182D',
         marginLeft:-2,
        fontFamily:'Barlow_700Bold'
      },
      
      button_top : {
        borderWidth:1.5,
        borderColor:'#F6182D',
        borderStyle:'solid',
        paddingHorizontal:10,
        marginLeft:12,
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
        borderRadius:6,
      },
      button_lang_top_text:{
        fontSize:13,
        color:'#5F5D5D',
        fontFamily:'Barlow_600SemiBold'
      },
 
});