import React, { useEffect, useState } from 'react';
import { Text, StyleSheet,View,TouchableOpacity,ScrollView } from 'react-native';
import { Layout,Icon, Button } from '@ui-kitten/components';
import Header from '../componenets/global/Header';
import EditText from '../componenets/global/elements/TextInput';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import VStack from '../componenets/global/elements/VStack';
import HStack from '../componenets/global/elements/HStack';
import PageHead from '../componenets/global/elements/PageHead';

export default function OtpVerify({navigation}) {
  const CELL_COUNT = 6;
const [value, setValue] = useState('');
const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
const [obj, getCellOnLayoutHandler] = useClearByFocusCell({
  value,
  setValue,
});
  return (
   <VStack style={[styles.app_flex_container]}>
          <Header/>
          <View style={styles.login_container}>
            <PageHead title="VERIFY YOUR MOBILE NO." style_subtitle={{color:'#4C8BF5'}} subtitle="You will receive the OTP if phone number  is valid and we will send your through next process."/>

              <HStack style={[ {paddingHorizontal:2, marginVertical:16}]}>
                <Text style={{fontFamily:'Barlow_700Bold', paddingHorizontal:2}}>+91-8439221651</Text>
                <TouchableOpacity  onPress={() => navigation.navigate("LoginPage")}>
                  <Text style={{fontFamily:'Barlow_700Bold', color:'#4C8BF5', marginHorizontal:15,}}>Edit</Text>
                </TouchableOpacity>
              </HStack>
            <View style={styles.input_mobile}>
            <CodeField
                        ref={ref}
                        {...obj}
                        value={value}
                        onChangeText={setValue}
                        cellCount={CELL_COUNT}
                        keyboardType="number-pad"
                        textContentType="oneTimeCode"
                        renderCell={({index, symbol, isFocused}) => (
                            <Text
                            key={index}
                            style={styles.otp_input_style}
                            onLayout={getCellOnLayoutHandler(index)}>
                            {symbol ||
                                (isFocused ? (
                                <Cursor />
                                ) : (
                                <Text style={{color: "white"}}></Text>
                                ))}
                            </Text>
                        )}
                    />
            </View>
            <HStack style={[{paddingHorizontal:2, marginVertical:16,}]}>
              <Text style={{fontFamily:'Barlow_700Bold', color:'#000', paddingHorizontal:2}}>Resend Code</Text>
              <Text style={{fontFamily:'Barlow_700Bold', color:'#000', marginHorizontal:5,}}>22:22</Text>
            </HStack>

             <Button style={{marginBottom:16, borderRadius:6}} onPress={() => navigation.push("ChooseAccount")}>Verify OTP</Button>
           
          </View>
    </VStack>
  );
}

const styles = StyleSheet.create({
  
  input_mobile:{
    width:'100%', 
    fontSize:12,
  },
  
  otp_input_style:
    {
      borderColor: "#000",
      borderWidth: 2,
      fontSize: 16,
      fontFamily:'Barlow_700Bold',
      borderRadius: 4,
      backgroundColor: "transparent",
      color: "#000",
      width: 45,
      height: 45,
      textAlign: 'center',
      marginHorizontal: 4,
      textAlignVertical:"center",
    },
    
    app_flex_container:{
      flex:1,  
      justifyContent:'space-between', 
      backgroundColor:"#ffffff" 
    },
    
    login_container:{
      paddingHorizontal:16,
      paddingTop:16,
      paddingBottom:0,
  }
});
