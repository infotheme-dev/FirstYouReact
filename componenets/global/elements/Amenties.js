import { Icon } from '@ui-kitten/components';
import * as React from 'react';
import { Text,StyleSheet,TouchableOpacity } from 'react-native';
import HStack from './HStack';
import VStack from './VStack';

import IC_Breakfast from '../../../assets/icons/ic_breakfast';
import IC_Ac from '../../../assets/icons/ic_ac';
import IC_Elevator from '../../../assets/icons/ic_elevator';
import IC_Wifi from '../../../assets/icons/ic_wifi';
import IC_Restaurent from '../../../assets/icons/ic_restaurent';
import IC_Geyser from '../../../assets/icons/ic_geyser';
import IC_Handwash from '../../../assets/icons/ic_handwash';


const Icons = (props) => {
    switch(props.icon){
        case 'breakfast':
            return (<IC_Breakfast style={props.style} width="40" height="40"/>);
        case 'ac':
        return (<IC_Ac width="34" style={props.style} height="40"/>);
        case 'elevator':
            return (<IC_Elevator  style={props.style} width="40" height="40"/>);
        case 'wifi':
            return (<IC_Wifi  style={props.style} width="40" height="40"/>);
        case 'restaurent':
            return (<IC_Restaurent  style={props.style} width="40" height="40"/>);   
        case 'geyser':
            return (<IC_Geyser  style={props.style} width="40" height="40"/>);  
        case 'handwash':
            return (<IC_Handwash  style={props.style} width="40" height="40"/>);            
        default :
            return (<IC_Handwash  style={props.style} width="40" height="40"/>);     
    }
}
export default function Amenties(props) {
  return (<VStack style={{justifyContent:'center', marginVertical:12}}>
             <TouchableOpacity onPress={()=>{props.onclick}}>
                <VStack style={styles.circle}>
                    <Icons style={styles.icon} icon={props.icon}/>
                </VStack>
                <Text style={styles.label}>{props.label}</Text>
            </TouchableOpacity>
  </VStack>);
}

const styles = StyleSheet.create({
    circle: {
      backgroundColor:'#EFEFEF',
      width:72,
      height:72,
      marginRight:8,
      flex:1,
      borderRadius:72,
      justifyContent:'center',
      alignItems:'center'
    },
    label:{
        textAlign:'center',
        color:'#000',
        fontSize:14,
        fontFamily: 'Barlow_500Medium'
    },
    icon:{
       width:40,
       height:40
    },
});