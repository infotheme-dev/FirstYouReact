import * as React from 'react';
import { View,Text,StyleSheet, } from 'react-native';
export default function PageBottomNote(props) {
  return (
        <View>
            <Text style={[styles.subtitle,props.style]}>{props.label}</Text>
        </View>
  );
}

const styles = StyleSheet.create({
    subtitle:{
        fontSize:14,
        fontFamily:'Barlow_400Regular',
        paddingVertical:4,
        color:'#000'
    }
});