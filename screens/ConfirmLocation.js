import * as React from 'react';
import {  StyleSheet, ScrollView } from 'react-native';
import HeaderListing from '../componenets/global/HeaderListing';
import { Button } from '@ui-kitten/components';
import Note from '../componenets/global/elements/Note';
import VStack from '../componenets/global/elements/VStack';
import PageHead from '../componenets/global/elements/PageHead';
import EditText from '../componenets/global/elements/TextInput';
import HStack from '../componenets/global/elements/HStack';


export default function ConfirmLocation({ navigation }) {
  return (
   <VStack style={[styles.app_flex_container]}>
      <HeaderListing completion="50"/>
          <ScrollView>
              <VStack  style={styles.app_content}>
                <PageHead title="Your address matters!" subtitle="Please fill in All the fields below to proceed."/>
                <Note label="A detailed and valid address can increase more bookings." type="success"/>
                <VStack style={{paddingVertical:12}}>
                          <EditText
                          label="Property’s Name"
                          outlineColor="#1a1a1a"
                          textColor="#1a1a1a"
                          bg="#ffffff"
                          w="100%"
                          h="48px"
                          labelBg="#fff"
                          error={false}
                          font="Barlow_700Bold"/>
                          
                          <EditText
                          label="Flat number (Optional)"
                          outlineColor="#1a1a1a"
                          textColor="#1a1a1a"
                          bg="#ffffff"
                          w="100%"
                          h="48px"
                          labelBg="#fff"
                          error={false}
                          font="Barlow_700Bold"/>

                          <EditText
                          label="Street / Area / Locality"
                          outlineColor="#1a1a1a"
                          textColor="#1a1a1a"
                          bg="#ffffff"
                          w="100%"
                          h="48px"
                          labelBg="#fff"
                          error={false}
                          font="Barlow_700Bold"/>
                          
                          <EditText
                          label="City"
                          outlineColor="#1a1a1a"
                          textColor="#1a1a1a"
                          bg="#ffffff"
                          w="100%"
                          h="48px"
                          labelBg="#fff"
                          error={false}
                          font="Barlow_700Bold"/>

                          <EditText
                          label="Postal Code (Optional)"
                          outlineColor="#1a1a1a"
                          textColor="#1a1a1a"
                          bg="#ffffff"
                          w="100%"
                          h="48px"
                          labelBg="#fff"
                          error={false}
                          font="Barlow_700Bold"/>

                          <EditText
                          label="State"
                          outlineColor="#1a1a1a"
                          textColor="#1a1a1a"
                          bg="#ffffff"
                          w="100%"
                          h="48px"
                          labelBg="#fff"
                          error={false}
                          font="Barlow_700Bold"/>
                          
                          <EditText
                          label="Country"
                          outlineColor="#1a1a1a"
                          textColor="#1a1a1a"
                          bg="#ffffff"
                          w="100%"
                          h="48px"
                          labelBg="#fff"
                          error={false}
                          font="Barlow_700Bold"/>
                </VStack>
            </VStack>
          </ScrollView>
            
            <VStack style={[styles.app_bottom_content]}>
             
              <HStack style={[{justifyContent:'space-between', padding:16,}]}>
                      <Button appearance='outline' style={styles.app_partial_btn}  onPress={() => navigation.goBack()}>Back</Button>
                      <Button style={[styles.app_partial_btn,{backgroundColor:'#1a1a1a'}]}  onPress={() => navigation.navigate("RoomInfo")}>Confirm Location</Button>
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
