import * as React from 'react';
import { View,StyleSheet, } from 'react-native';
export default function HStack(props) {
  return (
    <View style={[styles.HStack,props.style]}>
           {props.children}
      </View>
  );
}

const styles = StyleSheet.create({
    HStack: {
        display:'flex',
        alignItems:'center',
        flexDirection: 'row',
    }
});
