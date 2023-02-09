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
import ProgressBar from '../componenets/global/elements/ProgressBar';


export default function KycPage({ navigation }) {

  const [childNameValue, setChildNameValue] = useState('1');

  function handleChange(newValue) {
      setChildNameValue(newValue);
      console.log(childNameValue);
    }
  return (
   <VStack style={[styles.app_flex_container]}>
      <HeaderListing completion="99"/>
          <ScrollView>
              <VStack  style={styles.app_content}>
                <PageHead style={{marginBottom:1}} title="Update KYC details" subtitle="Mandatory as per government regulations which requires a government issued ID."/>
                <Note label="Before we make your property live we want to know you, lil more. This is last step of first property listing submission." type="warning"/>
                <VStack style={{paddingVertical:8}}>
                <ProgressBar process="0" processed="0" count="6" style={{marginBottom:24}}/>

                  <HeadingEdit style={{marginTop:0, marginBottom:12}} subTitleSize="15" titleSize="16" title="Upload a Government ID" subtitle="View Samples"/>
                  <SelectBox label="Choose a govt ID for Verification"
                  outlineColor="#1a1a1a"
                  textColor="#1a1a1a"
                  bg="#ffffff"
                  w="100%"
                  labelBg="#fff"
                  error={false}
                  font="Barlow_700Bold"
                  />
                  <EditText
                        label="Your Name As Per ID Card"
                        outlineColor="#1a1a1a"
                        textColor="#1a1a1a"
                        bg="#ffffff"
                        w="100%"
                        labelBg="#fff"
                        error={false}
                        font="Barlow_700Bold"/>  

                   <EditText
                        label="Your ID Number"
                        outlineColor="#1a1a1a"
                        textColor="#1a1a1a"
                        bg="#ffffff"
                        w="100%"
                        labelBg="#fff"
                        error={false}
                        font="Barlow_700Bold"/>           
                 <MuteNote label="Please capture your ID card’s hard copy via camera and upload them, Photos must be clearly visible. So that we can verify it instantly."/>
                 <Uploader style={{marginVertical:14}} label="Upload front side image"/>
                 <Uploader style={{marginVertical:14}} label="Upload back side image"/>
                </VStack>
            </VStack>
          </ScrollView>
            
            <VStack style={[styles.app_bottom_content]}>
              <HStack style={[{justifyContent:'space-between', padding:16,}]}>
                      <Button appearance='outline' style={styles.app_partial_btn}  onPress={() => navigation.goBack()}>Back</Button>
                      <Button style={[styles.app_partial_btn,{backgroundColor:'#1a1a1a'}]}  onPress={() => navigation.navigate("Dashboard")}>Confirm</Button>
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
