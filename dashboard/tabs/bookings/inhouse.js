import * as React from 'react';
import { Text, StyleSheet, ScrollView,View } from 'react-native';
import InputChooser from '../../../componenets/global/elements/InputChooser';
import { Button,Layout } from '@ui-kitten/components';
import VStack from '../../../componenets/global/elements/VStack';
import PageHead from '../../../componenets/global/elements/PageHead';
import PageBottomNote from '../../../componenets/global/elements/PageBottomNote';
import HeaderDashboard from '../../../componenets/global/HeaderDashboard';
import Heading from '../../../componenets/global/elements/Heading';
import BookingCard from '../../../componenets/global/elements/BookingCard';

export default function InHouse({ navigation }) {
  return (
<VStack style={[styles.app_flex_container]}>
<Heading style={{marginHorizontal:16, paddingBottom:3}} title="Checked-In (7)"/>
<ScrollView style={styles.app_content}>
    <BookingCard customer_name="Rahul N, + 1" price="Rs. 12323" booking_id="329930293" booking_from="2 Feb" booking_to="4 Feb"/>
    <BookingCard customer_name="Rahul N, + 1" price="Rs. 12323" booking_id="329930293" booking_from="2 Feb" booking_to="4 Feb"/>
    <BookingCard customer_name="Rahul N, + 1" price="Rs. 12323" booking_id="329930293" booking_from="2 Feb" booking_to="4 Feb"/>
    <BookingCard customer_name="Rahul N, + 1" price="Rs. 12323" booking_id="329930293" booking_from="2 Feb" booking_to="4 Feb"/>
    <BookingCard customer_name="Rahul N, + 1" price="Rs. 12323" booking_id="329930293" booking_from="2 Feb" booking_to="4 Feb"/>
    <BookingCard customer_name="Rahul N, + 1" price="Rs. 12323" booking_id="329930293" booking_from="2 Feb" booking_to="4 Feb"/>
    <BookingCard customer_name="Rahul N, + 1" price="Rs. 12323" booking_id="329930293" booking_from="2 Feb" booking_to="4 Feb"/>
    <BookingCard customer_name="Rahul N, + 1" price="Rs. 12323" booking_id="329930293" booking_from="2 Feb" booking_to="4 Feb"/>
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
