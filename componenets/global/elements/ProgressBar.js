import { CheckBox, Divider,Layout } from '@ui-kitten/components';
import * as React from 'react';
import { Text, StyleSheet, TouchableOpacity,View } from 'react-native';
import HStack from './HStack';
import VStack from './VStack';
export default function ProgressBar(props) {
   
  return (
    <VStack style={[{
      marginVertical:4,
      }, props.style]}>
        <HStack style={{ }}>
          <View
            style={[{
              backgroundColor:'#DEDEDE',
              borderRadius: 24,
              width:'100%',
              flex:1,
              height:6,
            }]}>
                <View style={{width:`${props.process}`+'%', borderRadius: 24, height:6, backgroundColor:'#F6182D'}}></View> 
          </View>
          <Text style={{marginLeft:16,fontSize:14, fontFamily:'Barlow_700Bold', color:'#000'}}>{props.process}%</Text>
      </HStack>
      <Text style={{fontSize:15, color:'#000', paddingHorizontal:2, fontFamily:'Barlow_500Medium'}}>{props.processed} out of {props.count} images uploaded</Text>
      </VStack>
  );
}

