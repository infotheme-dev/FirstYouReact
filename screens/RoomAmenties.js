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


export default function RoomAmenties({ navigation }) {

  const [childNameValue, setChildNameValue] = useState('1');

  function handleChange(newValue) {
      setChildNameValue(newValue);
      console.log(childNameValue);
    }
  return (
   <VStack style={[styles.app_flex_container]}>
      <HeaderListing completion="70"/>
          <ScrollView>
              <VStack  style={styles.app_content}>
                <PageHead style={{marginBottom:10}} title="Facilities in your Property" subtitle="Let guests know what your property has to offer!"/>
                <Note label="More Facilities = More Customers in your Property" type="success"/>
                <VStack style={{paddingVertical:12}}>
                <PageHead title="How many Floors & Rooms do you have?" style_title={{fontSize:18}}/>
                  <HStack style={{flex:1, justifyContent:'space-between',flexWrap:'wrap'}}>
                    <Amenties icon="breakfast" label="Breakfast"/>
                    <Amenties icon="breakfast" label="Breakfast"/>
                    <Amenties icon="breakfast" label="Breakfast"/>
                    <Amenties icon="breakfast" label="Breakfast"/>
                    <Amenties icon="breakfast" label="Breakfast"/>
                    <Amenties icon="breakfast" label="Breakfast"/>
                    
                  </HStack>
                <PageHead title="Must have facilities" style_title={{fontSize:18, padding:0}} style_subtitle={{fontSize:5,}} style={{marginTop:16, marginBottom:0,}}/>
                <HStack style={{flex:1, justifyContent:'space-between',flexWrap:'wrap'}}>
                  <Badge label="Power backup"/>  
                  <Badge label="Power backup"/>  
                  <Badge label="Power backup"/>  
                  <Badge label="Power backup"/>  
                  <Badge label="Power backup"/>  
                  <Badge label="Power backup"/>  
                  <Badge label="Power backup"/>    
                </HStack>

                <Note type="warning" style={{marginVertical:14,}} label="By clicking on Next, you agree to install these facilities in your property to continue partnership with FirstStay."/>
                </VStack>
            </VStack>
          </ScrollView>
            
            <VStack style={[styles.app_bottom_content]}>
              <HStack style={[{justifyContent:'space-between', padding:16,}]}>
                      <Button appearance='outline' style={styles.app_partial_btn}  onPress={() => navigation.goBack()}>Back</Button>
                      <Button style={[styles.app_partial_btn,{backgroundColor:'#1a1a1a'}]}  onPress={() => navigation.navigate("PhotoUploader")}>Next</Button>
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
