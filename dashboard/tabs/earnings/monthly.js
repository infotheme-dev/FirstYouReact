import * as React from 'react';
import {  StyleSheet, ScrollView } from 'react-native';
import VStack from '../../../componenets/global/elements/VStack';
import Heading from '../../../componenets/global/elements/Heading';
import BookingCard from '../../../componenets/global/elements/BookingCard';

export default function Monthly({ navigation }) {
  return (
<VStack style={[styles.app_flex_container]}>
<Heading style={{marginHorizontal:16, paddingBottom:3}} title="Checked-out (10)"/>
<ScrollView style={styles.app_content}>
    <BookingCard customer_name="Rahul N, + 1" type="success" price="Rs. 12323" booking_id="329930293" booking_from="2 Feb" booking_to="4 Feb"/>
    <BookingCard customer_name="Rahul N, + 1" type="warning" price="Rs. 12323" booking_id="329930293" booking_from="2 Feb" booking_to="4 Feb"/>
    <BookingCard customer_name="Rahul N, + 1" type="warning" price="Rs. 12323" booking_id="329930293" booking_from="2 Feb" booking_to="4 Feb"/>
    <BookingCard customer_name="Rahul N, + 1" type="danger" price="Rs. 12323" booking_id="329930293" booking_from="2 Feb" booking_to="4 Feb"/>
    <BookingCard customer_name="Rahul N, + 1" type="success" price="Rs. 12323" booking_id="329930293" booking_from="2 Feb" booking_to="4 Feb"/>
    <BookingCard customer_name="Rahul N, + 1" type="warning" price="Rs. 12323" booking_id="329930293" booking_from="2 Feb" booking_to="4 Feb"/>
    <BookingCard customer_name="Rahul N, + 1" type="warning" price="Rs. 12323" booking_id="329930293" booking_from="2 Feb" booking_to="4 Feb"/>
</ScrollView>
</VStack>
  );
}

const styles = StyleSheet.create({
   
  app_flex_container:{
    flex:1,  
    justifyContent:'space-between', 
    backgroundColor:"#ffffff" 
  },
  app_content:{
      padding:16,
  },
  login_title:{
      fontSize:21,
      fontFamily:'Barlow_700Bold',
      paddingVertical:2,
      color:'#000'
  },
   login_subtitle:{
      fontSize:14,
      fontFamily:'Barlow_400Regular',
      paddingVertical:4,
      color:'#000'
  }
});
