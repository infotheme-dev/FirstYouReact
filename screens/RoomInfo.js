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


export default function RoomInfo({ navigation }) {

  const [childNameValue, setChildNameValue] = useState('1');

  function handleChange(newValue) {
      setChildNameValue(newValue);
      console.log(childNameValue);
    }
  return (
   <VStack style={[styles.app_flex_container]}>
      <HeaderListing completion="60"/>
          <ScrollView>
              <VStack  style={styles.app_content}>
                <PageHead style={{marginBottom:10}} title="Property Information" subtitle="Please add all rooms  so that we can send the appropriate guests, to your property."/>
                <Note label="0% commission on First Booking, 10 to 20% on next bookings." type="success"/>
                <VStack style={{paddingVertical:12}}>
                <PageHead title="How many Floors & Rooms do you have?" style_title={{fontSize:18}}/>
                  <HStack>
                    <Text style={{flex:1, fontFamily:'Barlow_600SemiBold', color:'#000', fontSize:16,}}>Number of Floors</Text>
                    <QtyInput value="1"/>
                  </HStack>
                  <HStack>
                    <Text style={{flex:1, fontFamily:'Barlow_600SemiBold', color:'#000', fontSize:16,}}>Number of Rooms</Text>
                    <QtyInput value={1}/>
                  </HStack>
                <PageHead title="Enter front desk phone number" style_title={{fontSize:18, padding:0}} style={{marginTop:16, marginBottom:0,}}/>
                <EditText
                        label="Front Desk Phone Number"
                        outlineColor="#1a1a1a"
                        textColor="#1a1a1a"
                        bg="#ffffff"
                        w="100%"
                        style={{marginTop:1,}}
                        labelBg="#fff"
                        error={false}
                        font="Barlow_700Bold"/>   
                <EditText
                        label="Landline Number (Optional)"
                        outlineColor="#1a1a1a"
                        textColor="#1a1a1a"
                        bg="#ffffff"
                        w="100%"
                        labelBg="#fff"
                        error={false}
                        font="Barlow_700Bold"/>      
                </VStack>
            </VStack>
          </ScrollView>
            
            <VStack style={[styles.app_bottom_content]}>
              <HStack style={[{justifyContent:'space-between', padding:16,}]}>
                      <Button appearance='outline' style={styles.app_partial_btn}  onPress={() => navigation.goBack()}>Back</Button>
                      <Button style={[styles.app_partial_btn,{backgroundColor:'#1a1a1a'}]}  onPress={() => navigation.navigate("RoomAmenties")}>Next</Button>
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
