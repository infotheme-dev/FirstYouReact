import {Icon } from '@ui-kitten/components';
import * as React from 'react';
import { Text, StyleSheet, TouchableOpacity,View } from 'react-native';
import { SvgFromUri } from 'react-native-svg';
import HStack from './HStack';
import VStack from './VStack';
export default function AmentiesListitem(props) {
   let listItems = props.data;
   {listItems.map((item) => {
        return (
            <HStack
                key={item.id}
              style={[{
                marginVertical:12,
                paddingHorizontal: 9,
                alignItems:'center',
              }]}>
               <SvgFromUri key={item.id} uri={item.url} width="40" height="40"/>    
              <Text key={item.id} style={{flex:1, textAlign:'left', fontFamily: 'Barlow_700Bold', color:'#000', paddingHorizontal:16 }}>
                {item.label}
              </Text>
            </HStack>
        );
      });
}
}

