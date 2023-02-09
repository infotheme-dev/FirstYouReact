import React,{useState} from 'react';
import {  StyleSheet, ScrollView,Text } from 'react-native';
import HeaderListing from '../componenets/global/HeaderListing';
import { Button, Divider } from '@ui-kitten/components';
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
import SelectBox from '../componenets/global/elements/SelectBox';
import HeadingEdit from '../componenets/global/elements/HeadingEdit';


export default function PricingPage({ navigation }) {

  const [childNameValue, setChildNameValue] = useState('1');

  function handleChange(newValue) {
      setChildNameValue(newValue);
      console.log(childNameValue);
    }
  return (
   <VStack style={[styles.app_flex_container]}>
      <HeaderListing completion="90"/>
          <ScrollView>
              <VStack  style={styles.app_content}>
                <PageHead style={{marginBottom:1}} title="Add Pricing & Food Menu" subtitle="Please add a b2b price as per room type "/>
                <Note label="We will automatically decrease 20% from your price to calculate b2b price" type="success"/>
                <VStack style={{paddingVertical:12}}>
                  <HeadingEdit style={{marginTop:12, marginBottom:4}} subTitleSize="15" titleSize="16" title="Dynamic Pricing" subtitle="View Info"/>
                  <SelectBox label="Choose Room Type"
                  outlineColor="#1a1a1a"
                  textColor="#1a1a1a"
                  bg="#ffffff"
                  w="100%"
                  labelBg="#fff"
                  error={false}
                  font="Barlow_700Bold"/>
                  <EditText
                        label="Customer Price"
                        outlineColor="#1a1a1a"
                        textColor="#1a1a1a"
                        bg="#ffffff"
                        w="100%"
                        labelBg="#fff"
                        error={false}
                        font="Barlow_700Bold"/>  

                   <EditText
                        label="B2B Price (Auto Calculated)"
                        outlineColor="#1a1a1a"
                        textColor="#1a1a1a"
                        bg="#ffffff"
                        w="100%"
                        labelBg="#fff"
                        error={false}
                        font="Barlow_700Bold"/>           
                  <Divider style={{backgroundColor:'#7C7C7C', width:'100%', height:1, marginVertical:24}}/>
                  <HeadingEdit style={{marginTop:6, marginBottom:12}} subTitleSize="15" titleSize="16" title="Food Menu images (Optional)" subtitle="View Samples"/>
                  <MuteNote label="If you want to offer foods to guests, Please Share your Restaurant’s Food menu with us. We will shortly Provide you FOOD MENU QR by QrDekho.com "/>
                 <Uploader style={{marginVertical:14}} label="Upload images"/>
                </VStack>
            </VStack>
          </ScrollView>
            
            <VStack style={[styles.app_bottom_content]}>
              <HStack style={[{justifyContent:'space-between', padding:16,}]}>
                      <Button appearance='outline' style={styles.app_partial_btn}  onPress={() => navigation.goBack()}>Back</Button>
                      <Button style={[styles.app_partial_btn,{backgroundColor:'#1a1a1a'}]}  onPress={() => navigation.navigate("PreviewPage")}>Next</Button>
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
