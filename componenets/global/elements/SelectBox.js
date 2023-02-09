import { CheckBox, Divider, Icon, Input, Layout } from '@ui-kitten/components';
import * as React from 'react';
import { Text, View,StyleSheet, TouchableOpacity,TextInput } from 'react-native';
import HStack from './HStack';
import VStack from './VStack';
export default function SelectBox(props) {
  return (
    <View style={[styles.input_mobile, props.style]}>
        
        <HStack
            style={[styles.input,{borderColor:props.outlineColor,backgroundColor:props.bg}]}>
                <VStack style={{flex:1}}>
                    <Text  style={[styles.label,{color:props.textColor,backgroundColor:props.labelBg,fontFamily:props.font}]}>{props.label}</Text>
                    <TextInput editable = {false} style={{color:props.textColor,backgroundColor:props.bg, fontFamily:props.font}}/>
                </VStack>
                <Divider
            style={{backgroundColor:'#7C7C7C', width:1.5, height:32, marginHorizontal:12, marginVertical:2}}/>
            <Icon name="arrow-ios-downward" fill='#000' style={{width:24,height:24}}/>
        </HStack>
      </View>
  );
}

const styles = StyleSheet.create({
    input_mobile:{
        width:'100%', 
        fontSize:12,
        marginVertical:16,
      },
    input:{
        border: '2px solid #000',
        borderWidth:2,
        borderStyle:'solid',
        paddingHorizontal: 12,
        backgroundColor:'transparent',
        justifyContent: 'space-between',
        borderRadius: 6,
        height:48,
        zIndex:10,
        fontSize:16,
        position:'relative'
    },
    label:{
        backgroundColor:'#fff',
        color:'#000',
        zIndex:12,
        paddingHorizontal:6,
        top:-12,
        left:0,
        position:'absolute'
    }
});
