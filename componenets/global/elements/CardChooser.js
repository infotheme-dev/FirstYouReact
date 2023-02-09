import * as React from 'react';
import { Text,StyleSheet,TouchableOpacity } from 'react-native';
import HStack from './HStack';
import VStack from './VStack';
export default function CardChooser(props) {
  return (<TouchableOpacity onPress={()=>{props.onclick}}>
    <HStack
    style={styles.card_container}>
    <VStack style={[{paddingHorizontal:12, paddingVertical: 10 }]}>
        <Text style={styles.card_title}>{props.title}</Text>
        <Text style={styles.card_subtitle}>{props.subtitle}</Text>
    </VStack>
    </HStack>
</TouchableOpacity>);
}

const styles = StyleSheet.create({
    HStack: {
        display:'flex',
        alignItems:'center',
        flexDirection: 'row',
    },
    card_subtitle:{
        fontFamily: 'Barlow_400Regular'
    },
    card_title:{
        fontFamily: 'Barlow_700Bold', 
        color:'#000', 
        fontSize:18
    },
    card_container: {
        borderWidth:1.5,
        borderStyle:'solid',
        borderColor:'#000',
      paddingHorizontal: 12,
      borderRadius: 6,
      alignItems:'center',
      marginVertical:16,
    }
});