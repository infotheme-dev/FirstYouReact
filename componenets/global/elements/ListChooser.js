import * as React from 'react';
import { SvgUri } from 'react-native-svg';
import { Text,StyleSheet, Image, TouchableOpacity,View } from 'react-native';
import IC_Hotel from '../../../assets/icons/ic_building';
import IC_HomeStay from '../../../assets/icons/ic_homestay';
import IC_Camp from '../../../assets/icons/ic_camp';
import IC_Guide from '../../../assets/icons/ic_guide';
import IC_Transport from '../../../assets/icons/ic_cutlery';
import IC_Food from '../../../assets/icons/ic_restaurent';
import HStack from './HStack';
import VStack from './VStack';

const ListIco = (props) => {
    switch(props.icon){
        case 'hotel':
            return (<IC_Hotel width="34" height="34"/>);
        case 'homestay':
       
        return (<IC_HomeStay width="34" height="34"/>);
       
        case 'camping':
            return (<IC_Camp width="34" height="34"/>);

        case 'trek':
            return (<IC_Guide width="34" height="34"/>);
        case 'transport':
            return (<IC_Transport width="34" height="34"/>);    
        default :
            return (<IC_Food width="34" height="34"/>);     
    }
}

export default function ListChooser(props) {
    
   
  return (
   
    <TouchableOpacity onPress={()=>props.navigation.navigate("ChooseLocation")}>
      <HStack
        style={[{
            borderWidth:1.5,
            borderStyle:'solid',
            borderColor:'#000',
          paddingHorizontal: 12,
          borderRadius: 6,
          alignItems:'center',
          marginVertical:16,
          
        }]}>
           
          <ListIco icon={props.value}/>
        <VStack style={[{paddingHorizontal:12, paddingVertical: 10 }]}>
            <Text style={{ fontFamily: 'Barlow_700Bold', color:'#000', fontSize:18}}>
            {props.title}
            </Text>
            <Text style={{ fontFamily: 'Barlow_400Regular'}}>
            {props.subtitle}
            </Text>
        </VStack>
      </HStack>
    </TouchableOpacity>
  );
}
