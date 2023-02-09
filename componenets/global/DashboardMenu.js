import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Layout,Icon } from '@ui-kitten/components';
import HStack from './elements/HStack';
import VStack from './elements/VStack';
import MenuList from './elements/MenuList';

export default function  DasbhaordMenu(props) {
    const progress_rest = 100 - props.completion;
  return ( 
  <VStack>
    <HStack style={styles.header}>
        <Text style={styles.header_title}>Other Features</Text>
        <View style={styles.header_drag}></View>
    </HStack>
    <MenuList title="KYC (20%)" hint="Please complete your KYC  to get Bookings"/>   
    <MenuList title="Manage Inventory"/>
    <MenuList title="Edit Property Info"/>
    <MenuList title="Property Rules"/>
    <MenuList title="Contracts & Policies"/>
    <MenuList title="Your Profile"/>
</VStack>
);
}

const styles = StyleSheet.create({
    header_drag:{
        width:24,
        height:3.2, 
        borderRadius:24, 
        backgroundColor:'#7c7c7c'
    },
    
    header_title:{
        fontSize:18,
        color:'#000',
        flex:1,
        fontFamily:'Barlow_700Bold',
        textAlign:'left',
    },

    header:{
        width:'100%',
        paddingVertical:16,
        paddingHorizontal:16,
        marginBottom:10,
        borderBottomWidth:1,
        borderBottomColor:'#aaa',
    }
});