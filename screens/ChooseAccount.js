import * as React from 'react';
import { Text, StyleSheet, ScrollView,View } from 'react-native';
import HeaderListing from '../componenets/global/HeaderListing';
import InputChooser from '../componenets/global/elements/InputChooser';
import { Button,Layout } from '@ui-kitten/components';
import VStack from '../componenets/global/elements/VStack';
import PageHead from '../componenets/global/elements/PageHead';
import PageBottomNote from '../componenets/global/elements/PageBottomNote';


export default function ChooseAccount({ navigation }) {
  return (
   <VStack style={[styles.app_flex_container]}>
    
    <HeaderListing completion="10"/>
          <ScrollView>
            <VStack  style={styles.app_content}>
            <PageHead title="Why you are here?" subtitle="Tell us about yourself, why you want to join firstrek. We are open for below services only, Choose one or more."/>
                    <VStack style={{paddingVertical:12}} w="100%">
                        <InputChooser title="I have a Hotel / HomeStay" value="hotel"/>
                        <InputChooser title="I am a Camping Service Provider" value="camping"/>
                        <InputChooser title="I am a Trek / Tour Guide"  value="tour-guide"/>
                        <InputChooser title="I have a Commercial Car /Vehicle" value="transportation"/>
                        <InputChooser title="I have In-house/Only Restaurant" value="food"/>
                    </VStack>
                </VStack>
            </ScrollView>
            <VStack style={styles.app_content}>
                <PageBottomNote label="By clicking below button we will setup you account accordingly and you can't change it back."/>
                <Button style={{marginTop:12, borderRadius:6}}  onPress={() => navigation.navigate("EditProfile")}>Next</Button>
             </VStack>  
        
    </VStack>
  );
}

const styles = StyleSheet.create({
   
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
