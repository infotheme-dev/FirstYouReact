import * as React from 'react';
import { Text,StyleSheet } from 'react-native';
import VStack from './VStack';
export default function MuteNote(props) {
   
    return (
        <VStack
            style={[styles.note, props.style]}>
                
                <Text style={styles.label}>{props.label}</Text>
          </VStack>
      );
  
}

const styles = StyleSheet.create({
    note:{
        marginVertical:4,
        color:'#7C7C7C',
        position:'relative'
    },
    lable:{
        fontSize:14,
        fontFamily:'Barlow_400Regular',
    }
});
