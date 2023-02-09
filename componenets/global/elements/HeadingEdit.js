import * as React from 'react';
import { StyleSheet,Text } from 'react-native';
import HStack from './HStack';
export default function HeadingEdit(props) {
  return (
    <HStack style={[styles.wrapper,props.style]}>
        <Text style={[styles.title,{fontSize:parseInt(props.titleSize)}]}>{props.title}</Text>
        <Text style={[styles.subtitle,{fontSize:parseInt(props.subTitleSize)}]}>{props.subtitle}</Text>
      </HStack>
  );
}

const styles = StyleSheet.create({
    wrapper: {
        justifyContent:'space-between',
        marginBottom:20, 
        marginTop:6
    },
    title:{
        fontSize:20,
        fontFamily:'Barlow_700Bold',
        color:'#000'
        },
    subtitle:{
        fontSize:15,
        fontFamily:'Barlow_700Bold', 
        color:'#4C8BF5'
    }
    
});
