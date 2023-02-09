import * as React from 'react';
import { Text,StyleSheet, } from 'react-native';
import HStack from './HStack';
export default function GridListitem(props) {
  return (
    <HStack style={styles.wrapper}>
           <Text style={styles.title}>{props.name}</Text>
           <Text style={styles.subtitle}>{props.value}</Text>
    </HStack>
  );
}

const styles = StyleSheet.create({
    wrapper: {
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical:6,
    },
    title:{
        flex:1,
        fontSize:16,
        color:'#000',
        fontFamily:'Barlow_600SemiBold',
    },
    subtitle:{
        fontSize:16,
        color:'#000',
        fontFamily:'Barlow_400Regular',
    }
});
