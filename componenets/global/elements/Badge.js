import { CheckBox, Divider,Layout } from '@ui-kitten/components';
import * as React from 'react';
import { Text, StyleSheet, TouchableOpacity,View } from 'react-native';
import HStack from './HStack';
import VStack from './VStack';
export default function Badge(props) {
   
  return (
      <View
        style={[{
          borderWidth:2,
          borderColor:'#000',
          borderStyle:'solid',
          marginVertical:4,
          backgroundColor:'#F5F5F5',
          paddingHorizontal: 9,
          borderRadius: 4,
        }]}>
        <Text style={{ textAlign:'center', fontFamily: 'Barlow_700Bold', color:'#000', paddingVertical: 7 }}>
          {props.label}
        </Text>
      </View>
  );
}

