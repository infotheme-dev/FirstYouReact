import React,{useState} from 'react';
import {  StyleSheet, ScrollView,Text } from 'react-native';
import HeaderListing from '../componenets/global/HeaderListing';
import { Button } from '@ui-kitten/components';
import Note from '../componenets/global/elements/Note';
import VStack from '../componenets/global/elements/VStack';
import PageHead from '../componenets/global/elements/PageHead';
import EditText from '../componenets/global/elements/TextInput';
import HStack from '../componenets/global/elements/HStack';
import QtyInput from '../componenets/global/elements/QtyInput';
import Amenties from '../componenets/global/elements/Amenties';
import Badge from '../componenets/global/elements/Badge';
import MuteNote from '../componenets/global/elements/MuteNote';
import Uploader from '../componenets/global/elements/Uploader';
import ProgressBar from '../componenets/global/elements/ProgressBar';
import HeadingEdit from '../componenets/global/elements/HeadingEdit';


export default function PhotoUploader({ navigation }) {

  const [childNameValue, setChildNameValue] = useState('1');

  function handleChange(newValue) {
      setChildNameValue(newValue);
      console.log(childNameValue);
    }
  return (
   <VStack style={[styles.app_flex_container]}>
      <HeaderListing completion="80"/>
          <ScrollView>
              <VStack  style={styles.app_content}>
                <PageHead style={{marginBottom:1}} title="Add Property Images" subtitle="Upload atleast 5 images"/>
                <Note label="Better Photos can grow you chance of getting more bookings" type="success"/>
                <VStack style={{paddingVertical:12}}>
                <ProgressBar process="0" processed="0" count="6" style={{marginBottom:24}}/>
                 <MuteNote label="We recommend uploading 1 facade, 1 reception and 2 room photos with 1 washroom images"/>
                  <HeadingEdit subTitleSize="15" style={{marginTop:14}} titleSize="17" title="0 images uploaded" subtitle="View Samples"/>
                  <MuteNote label="Click below rectangle or plus icon to choose one or multiple photos and it will be automatically uploaded. you have to keep patience on this process."/>
                 <Uploader style={{marginVertical:14}} label="Upload Photos"/>
                </VStack>
            </VStack>
          </ScrollView>
            
            <VStack style={[styles.app_bottom_content]}>
              <HStack style={[{justifyContent:'space-between', padding:16,}]}>
                      <Button appearance='outline' style={styles.app_partial_btn}  onPress={() => navigation.goBack()}>Back</Button>
                      <Button style={[styles.app_partial_btn,{backgroundColor:'#1a1a1a'}]}  onPress={() => navigation.navigate("PricingPage")}>Next</Button>
              </HStack>
            </VStack>  
        
    </VStack>
  );
}

const styles = StyleSheet.create({
    app_partial_btn:{
      width:'46%', 
      fontFamily:'Barlow_700Bold',  
      paddingVertical:3
    },
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
    }
});
