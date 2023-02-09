import * as React from 'react';
import { Text,StyleSheet } from 'react-native';
import VStack from './VStack';
import IC_Upload from '../../../assets/icons/ic_upload';
export default function Uploader(props) {
   
    return (
        <VStack
            style={[styles.note, props.style]}>
                <IC_Upload width="28" height="28"/>
                <Text style={styles.label}>{props.label}</Text>
          </VStack>
      );
  
}

const styles = StyleSheet.create({
    note:{
        marginVertical:4,
        backgroundColor:'#F8F8F8',
        minHeight:180,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:2,
        borderColor:'#7C7C7C',
        borderStyle:'dashed',
        position:'relative',
        borderRadius:6,
    },
    label:{
        fontSize:15,
        paddingVertical:10,
        color:'#000',
        fontFamily:'Barlow_600SemiBold',
    }
});
