import * as React from 'react';
import { View,StyleSheet, } from 'react-native';
export default function EditText(props) {
  return (
    <View style={[styles.VStack,props.style]}>
           {props.children}
      </View>
  );
}

const styles = StyleSheet.create({
    VStack: {
        display: 'flex',
        flexBasis: 'auto',
        flexDirection: 'column',
        flexShrink:0,
        alignItems:'stretch'
      }
});
