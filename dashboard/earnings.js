import * as React from 'react';
import { StyleSheet} from 'react-native';
import VStack from '../componenets/global/elements/VStack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Weekly from './tabs/earnings/weekly';
import Monthly from './tabs/earnings/monthly';
import Yearly from './tabs/earnings/yearly';

const Tab = createMaterialTopTabNavigator();
export default function Bookings({ navigation }) {
  return (
   <VStack style={[styles.app_flex_container]}>
     <Tab.Navigator   tabBarOptions={{
    labelStyle: { fontSize: 13, textTransform:'uppercase', fontFamily:'Barlow_700Bold', padding:0,margin:0},
    tabStyle: { minHeight:20 },
    activeTintColor:'#000000',
    inactiveTintColor:'#7C7C7C',
    swipeEnabled:true,
    indicatorStyle:{backgroundColor:'#000'},
    style: { padding: 0 }
    }}>
      <Tab.Screen name="WeeklyPayments" 
        options={{
            tabBarLabel: 'Last 7 Days'}} component={Weekly} />
      <Tab.Screen name="MonthlyPayments" options={{
            tabBarLabel: 'This Month'}} component={Monthly} />
      <Tab.Screen name="YearlyPayments" options={{
            tabBarLabel: 'This Year'}} component={Yearly} />
    </Tab.Navigator>
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
  }
});
