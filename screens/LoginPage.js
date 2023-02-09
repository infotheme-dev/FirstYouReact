import * as React from 'react';
import { Text, StyleSheet,View, ScrollView } from 'react-native';
import { Layout,Icon, Button } from '@ui-kitten/components';
import Header from '../componenets/global/Header';
import EditText from '../componenets/global/elements/TextInput';
import VStack from '../componenets/global/elements/VStack';
import PageHead from '../componenets/global/elements/PageHead';
import PageBottomNote from '../componenets/global/elements/PageBottomNote';
export default function LoginPage({navigation}) {
  return (
   <VStack style={[styles.app_flex_container]}>
          <Header/>
          <View style={styles.login_container}>
            <ScrollView>
              <PageHead style={{marginVertical:12}} title="WELCOME TO FIRSTREK" subtitle="Enter the registered mobile number or we will send your through our registration process."/>
              <EditText
                label="Enter Mobile No."
                outlineColor="#1a1a1a"
                textColor="#1a1a1a"
                bg="#ffffff"
                w="100%"
                h="4px"
                labelBg="#fff"
                error={false}
                font="Barlow_700Bold"/>
            </ScrollView>
            <Button style={{marginVertical:12, borderRadius:6}} onPress={() => navigation.push("OtpVerify")}>Continue</Button>
            <PageBottomNote label="By logging into the account you are agreeing with our Terms of use and Privacy policy"/>
          </View>
    </VStack>
  );
}

const styles = StyleSheet.create({
  input_mobile:{
    width:'100%', 
    fontSize:12,
    marginVertical:0,
  },
  app_flex_container:{
    flex:1,  
    justifyContent:'space-between', 
    backgroundColor:"#ffffff" 
  },
  login_container:{
      paddingHorizontal:16,
      paddingTop:16,
      paddingBottom:16,
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
      paddingVertical:0,
      color:'#000'
  }
});
