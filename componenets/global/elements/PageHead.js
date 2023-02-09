import * as React from 'react';
import { Text,StyleSheet, } from 'react-native';
import VStack from './VStack';
export default function PageHead(props) {
  return (
        <VStack style={props.style}>
            <Text style={[styles.title,props.style_title]}>{props.title}</Text>
            <Text style={[styles.subtitle,props.style_subtitle]}>{props.subtitle}</Text>
        </VStack>
  );
}

const styles = StyleSheet.create({
    title:{
        fontSize:21,
        fontFamily:'Barlow_700Bold',
        paddingVertical:2,
        color:'#000'
    },
    subtitle:{
        fontSize:14,
        fontFamily:'Barlow_400Regular',
        paddingVertical:4,
        color:'#000'
    }
});