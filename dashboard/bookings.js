import * as React from 'react';
import { StyleSheet} from 'react-native';
import VStack from '../componenets/global/elements/VStack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Upcoming from './tabs/bookings/upcoming';
import InHouse from './tabs/bookings/inhouse';
import Completed from './tabs/bookings/completed';

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
      <Tab.Screen name="UpcomingBookings" 
        options={{
            tabBarLabel: 'Upcoming'}} component={Upcoming} />
      <Tab.Screen name="InHouseBookings" options={{
            tabBarLabel: 'In-House'}} component={InHouse} />
      <Tab.Screen name="CompleteBookings" options={{
            tabBarLabel: 'Completed'}} component={Completed} />
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
