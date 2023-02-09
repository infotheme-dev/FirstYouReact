import { CheckBox, Divider,Layout } from '@ui-kitten/components';
import * as React from 'react';
import { Text, StyleSheet, TouchableOpacity,View } from 'react-native';
import HStack from './HStack';
import VStack from './VStack';
export default function InputChooser(props) {
    const useCheckboxState = (initialCheck = false) => {
        const [checked, setChecked] = React.useState(initialCheck);
        return { checked, onChange: setChecked };
      };
      const dangerCheckboxState = useCheckboxState();
  return (
    <TouchableOpacity>
      <HStack
        style={[{
          borderWidth:2,
          borderColor:'#000',
          borderStyle:'solid',
          marginVertical:12,
          paddingHorizontal: 12,
          justifyContent: 'space-between',
          borderRadius: 6,
        }]}>
        <Text style={{ fontFamily: 'Barlow_700Bold', color:'#000', paddingVertical: 10 }}>
          {props.title}
        </Text>
        <HStack>
          <Divider
            style={{backgroundColor:'#000', width:2, height:32, marginHorizontal:10, marginVertical:2}}/>
          <CheckBox color="#000"  style={{borderWidth:0}}
        status='primary'
        {...dangerCheckboxState}/>
        </HStack>
      </HStack>
    </TouchableOpacity>
  );
}

