import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import HeaderListing from '../componenets/global/HeaderListing';
import { Button } from '@ui-kitten/components';
import VStack from '../componenets/global/elements/VStack';
import HStack from '../componenets/global/elements/HStack';
import CardChooser from '../componenets/global/elements/CardChooser';
import PageHead from '../componenets/global/elements/PageHead';


export default function ChooseLocation({ navigation }) {
  return (
   <VStack style={[styles.app_flex_container]}>
    
    <HeaderListing completion="40"/>
          <ScrollView>
            <VStack  style={styles.app_content}>
                <PageHead title="Are you at your property’s location right now?" subtitle="Help us identify the  address of your property, Please select one of the options below"/>
                <VStack style={{paddingVertical:12}}>
                   <CardChooser title="Yes! I am at my property right now" subtitle="Please allow FirsTrek to access your current location on the popup"/>
                   <CardChooser title="No! I’m not at my property right now" subtitle="Please enter your property details manually."/>
                </VStack>
              </VStack>
            </ScrollView>
            <VStack style={styles.app_bottom_content}>
              <HStack style={[{justifyContent:'space-between', padding:16,}]}>
                      <Button appearance='outline' style={{width:'46%', fontFamily:'Barlow_700Bold',  paddingVertical:3, }}  onPress={() => navigation.goBack()}>Back</Button>
                      <Button style={{backgroundColor:'#1a1a1a', width:'46%', fontFamily:'Barlow_700Bold',  paddingVertical:3}}  onPress={() => navigation.navigate("ConfirmLocation")}>Next</Button>
              </HStack>
            </VStack>  
        
    </VStack>
  );
}

const styles = StyleSheet.create({
    app_bottom_content:{
      borderTopWidth:1, 
      borderColor:'#757575', 
      borderStyle:'solid'
    },
  app_flex_container:{
    flex:1,  
    justifyContent:'space-between', 
    backgroundColor:"#ffffff" 
  },
  app_content:{
      padding:16,
  },
  login_title:{
      fontSize:21,
      fontFamily:'Barlow_700Bold',
      paddingVertical:2,
      color:'#000'
  },
   login_subtitle:{
      fontSize:14,
      fontFamily:'Barlow_400Regular',
      paddingVertical:4,
      color:'#000'
  }
});
