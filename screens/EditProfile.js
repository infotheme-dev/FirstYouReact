import { Button,Layout } from '@ui-kitten/components';
import * as React from 'react';
import { Text, StyleSheet,ScrollView,View } from 'react-native';
import HeaderListing from '../componenets/global/HeaderListing';

import EditText from '../componenets/global/elements/TextInput';
import ProfilePicUploader from '../componenets/global/elements/ProfilePicUploader';
import HStack from '../componenets/global/elements/HStack';
import VStack from '../componenets/global/elements/VStack';
import PageBottomNote from '../componenets/global/elements/PageBottomNote';
import PageHead from '../componenets/global/elements/PageHead';
export default function EditProfile({ navigation }) {
  return (
   <Layout style={styles.app_flex_container}>
         <HeaderListing completion="20"/>
          <ScrollView style={styles.app_content}>
            <PageHead title="Tell us about you" subtitle="Tell us about yourself,  who you are and why you are fit for our platform and customers."/>
             
             <View style={{paddingVertical:12}}>
                <HStack>
                  <ProfilePicUploader/>
                    <Text style={styles.pic_uploader_hint}>
                        Please Upload Your Real / Valid Photo. You can capture your photo.
                    </Text>
                </HStack>
               </View>

               <View style={{paddingVertical:12}}>
                        <EditText
                          label="Your Name"
                          outlineColor="#1a1a1a"
                          textColor="#1a1a1a"
                          bg="#ffffff"
                          w="100%"
                          h="48px"
                          labelBg="#fff"
                          error={false}
                          font="Barlow_700Bold"/>
                        <EditText
                        label="Your Address"
                        outlineColor="#1a1a1a"
                        textColor="#1a1a1a"
                        bg="#ffffff"
                        w="100%"
                        h="48px"
                        labelBg="#fff"
                        error={false}
                        font="Barlow_700Bold"/>
                        <EditText
                        label="Date of Birth"
                        outlineColor="#1a1a1a"
                        textColor="#1a1a1a"
                        bg="#ffffff"
                        w="100%"
                        h="48px"
                        labelBg="#fff"
                        error={false}
                        font="Barlow_700Bold"/>
                        <EditText
                        label="Alternet Mobile No."
                        outlineColor="#1a1a1a"
                        textColor="#1a1a1a"
                        bg="#ffffff"
                        w="100%"
                        h="48px"
                        labelBg="#fff"
                        error={false}
                        font="Barlow_700Bold"/>
               </View>
            </ScrollView>
            <VStack style={styles.app_content}>
                <HStack style={[{justifyContent:'space-between', marginTop:16,}]}>
                    <Button appearance='outline' style={{width:'46%', fontFamily:'Barlow_700Bold',  paddingVertical:3, }}  onPress={() => navigation.goBack()}>Back</Button>
                    <Button style={{backgroundColor:'#1a1a1a', width:'46%', fontFamily:'Barlow_700Bold',  paddingVertical:3}}  onPress={() => navigation.navigate("ChooseService")}>Next</Button>
                </HStack>
            </VStack>  
        
    </Layout>
  );
}

const styles = StyleSheet.create({
  
    app_flex_container:{
      flex:1, 
      paddingTop:16, 
      justifyContent:'space-between', 
      backgroundColor:"#ffffff" 
    },
    app_content:{
        padding:16,
    },
    pic_uploader_hint:{
      marginHorizontal:16, 
      fontFamily:'Barlow_600SemiBold', 
      fontSize:13, 
      flex:1
    }
});
