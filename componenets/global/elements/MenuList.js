import { Icon } from '@ui-kitten/components';
import * as React from 'react';
import { View,StyleSheet,Text } from 'react-native';
import HStack from './HStack';
export default function MenuList(props) {
    if(props.hint){
        return (
            <HStack style={[styles.app_content, {flex:1, justifyContent:'space-around'}]}>
                <View style={{flex:1}}>
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={[styles.hint, {color:'#F0890F'}]}>{props.hint}</Text>
                </View>
                <Icon name="chevron-right" fill="#7c7c7c" style={{width:20,height:20}}/>
            </HStack>
          );
    }else{
        return (
            <HStack style={[styles.app_content, {flex:1, justifyContent:'space-around'}]}>
            <View style={{flex:1}}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
            <Icon name="chevron-right" fill="#7c7c7c" style={{width:20,height:20}}/>
            </HStack>
          );
    }
    
}

const styles = StyleSheet.create({
    title:{
        fontSize:16,
        color:'#000',
        paddingHorizontal:10,
        textAlign:'left',
        fontFamily:'Barlow_700Bold'
      },
      hint:{
        fontSize:14,
        paddingHorizontal:10,
        paddingTop:5,
        textAlign:'left',
        marginBottom:2,
        fontFamily:'Barlow_600SemiBold'
      },
      app_content:{
        marginVertical:8,
        marginHorizontal:16,
        borderBottomWidth:1,
        paddingBottom:12,
        borderBottomColor:'#D2D1D1',
    },
});
