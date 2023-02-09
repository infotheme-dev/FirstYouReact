import { Icon } from '@ui-kitten/components';
import React,{useState} from 'react';
import { Text, View,StyleSheet,TextInput } from 'react-native';
import HStack from './HStack';
import VStack from './VStack';
export default function QtyInput(props) {
    const [text, setText] = useState('1');
  return (
    <View style={styles.input_mobile}>
        <HStack
            style={[styles.input_outline,{borderColor:props.outlineColor,backgroundColor:props.bg}]}>
                <Icon name="minus-outline" onPress={()=>{ if(parseInt(text) >= 2) setText(parseInt(text)-1);}} style={[styles.btn,{color:props.textColor,backgroundColor:props.labelBg,fontFamily:props.font}]}/>
                <TextInput keyboardType='numeric' onChangeText={newText => setText(newText)}
        defaultValue={`${text}`} maxLength={2} style={[styles.input]}/>
               <Icon onPress={()=>{ if(parseInt(text) >= 1) setText(parseInt(text)+1); }} name="plus-outline" style={[styles.btn,{color:props.textColor,backgroundColor:props.labelBg,fontFamily:props.font}]}/>
        </HStack>
      </View>
  );
}

const styles = StyleSheet.create({
    input_mobile:{ 
        fontSize:12,
        marginVertical:16,
      },
      btn:{
        color:'#000',
        minWidth:20,
        minHeight:20,
        padding:5,
        position:'relative'
        
      },
      input:{
        fontSize:14,
        margin:0,
        marginHorizontal:6,
        marginVertical:4,
        height:16,
        minWidth:20,
        fontFamily:'Barlow_700Bold',
        paddingVertical:0,
        textAlign:'center',
        borderColor:'transparent',
        borderWidth:0,
        color:'#000'
      },
    input_outline:{
        border: '2px solid #000',
        borderWidth:2,
        minWidth:46,
        borderStyle:'solid',
        justifyContent:'space-between',
        alignItems:'center',
        padding:0,
        flex:1,
        
        backgroundColor:'transparent',
        borderRadius: 6,
        paddingHorizontal:6,
        paddingVertical:0,
        position:'relative'
    },
   
});
