import  React,{useRef,useMemo,useCallback} from 'react';
import {StyleSheet,View,Text,Button } from 'react-native';
import { Icon } from '@ui-kitten/components';
import VStack from '../componenets/global/elements/VStack';
import HeaderDashboard from '../componenets/global/HeaderDashboard';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Bookings from './bookings';
import SplashScreen from 'react-native-splash-screen';
import Earnings from './earnings';
import IC_Calendar from '../assets/icons/ic_calendar';
import IC_Coupon from '../assets/icons/ic_coupon';
import IC_Menu from '../assets/icons/ic_menu';
import RBSheet from "react-native-raw-bottom-sheet";
import DasbhaordMenu from '../componenets/global/DashboardMenu';
import MenuSheet from '../componenets/sheets/MenuSheet';
const Tab = createBottomTabNavigator();

export default function Dashboard({ navigation }) {
  SplashScreen.hide();
  const _refEventModal = useRef();
  return (
   <VStack style={[styles.app_flex_container]}>
    
        <HeaderDashboard/>
          <Tab.Navigator 
          style={{paddingVertical:16}}
          tabBarOptions={{
            inactiveTintColor:'#7C7C7C',
            activeTintColor: '#F6182D',
          }}>
          <Tab.Screen
          options={{
            tabBarLabel: 'Bookings',
            tabBarIcon: ({ color, size }) => (
              <IC_Calendar width={size} height={size} style={{color:`${color}`}}/>
            ),
          }}
          name="Bookings" component={Bookings} />
          <Tab.Screen name="Earnings" component={Earnings}
          options={{
            tabBarLabel: 'Earnings',
            tabBarIcon: ({ color, size }) => (
              <IC_Coupon width={size} height={size} style={{color:`${color}`}}/>
            ),
          }} />
           <Tab.Screen name="More" component={Bookings}
           listeners={{
            tabPress: (e) => {
             
              _refEventModal?.current?.show();
              e.preventDefault();
            },
          }}
          options={{
            tabBarLabel: 'More',
            tabBarIcon: ({ color, size }) => (
              <Icon name="menu-2-outline" fill={color} style={{color:`${color}`,width:size,height:size}}/>
            ),
          }} />
        </Tab.Navigator>
        <MenuSheet _refEventModal={_refEventModal}/>
    </VStack>
  );
}

const styles = StyleSheet.create({
   
  app_flex_container:{
    flex:1,  
    justifyContent:'space-between', 
    backgroundColor:"#ffffff",
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
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
