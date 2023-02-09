import React,{useState} from 'react';
import {  StyleSheet, ScrollView,Text, View,Image } from 'react-native';
import HeaderListing from '../componenets/global/HeaderListing';
import { Button, Divider, Icon } from '@ui-kitten/components';
import Note from '../componenets/global/elements/Note';
import VStack from '../componenets/global/elements/VStack';
import PageHead from '../componenets/global/elements/PageHead';
import EditText from '../componenets/global/elements/TextInput';
import HStack from '../componenets/global/elements/HStack';
import MuteNote from '../componenets/global/elements/MuteNote';
import Uploader from '../componenets/global/elements/Uploader';
import SelectBox from '../componenets/global/elements/SelectBox';
import Slider from '../componenets/global/elements/Slider';
import AmentiesListitem from '../componenets/global/elements/AmentiesListItem';
import HeadingEdit from '../componenets/global/elements/HeadingEdit';
import IC_Phone from '../assets/icons/ic_phone';
import GridListitem from '../componenets/global/elements/GridListItem';

export default function PreviewPage({ navigation }) {

  const [childNameValue, setChildNameValue] = useState('1');

  function handleChange(newValue) {
      setChildNameValue(newValue);
      console.log(childNameValue);
    }
  const slideData = [{id:'1',url:'https://firstrek.in/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-17-at-21.14.53.jpg'},
  {id:'2',url:'https://firstrek.in/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-17-at-21.4.52.jpg'},
  {id:'3',url:'https://firstrek.in/wp-content/uploads/2023/01/WhatsApp-Image-2023-0117-at-21.14.50.jpg'},
  {id:'4',url:'https://firstrek.in/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-17-a-21.14.53.jpg'},]
 
  const amenitiesListData = [{id:1,label:'Free Wifi',url:'https://cdn.firstrek.in/AppIcons%2FAmenities%2Fic_wifi.svg?alt=media&token=6231d551-94a4-49a0-9729-d76a259d8513'},
  {id:2,label:'Breakfast',url:'https://cdn.firstrek.in/AppIcons%2FAmenities%2Fic_breakfast.svg?alt=media&token=18430dcc-4c26-46c2-8eb7-790fa6411265'},
  {id:3,label:'Air Conditioner',url:'https://firebasestorage.googleapis.com/v0/b/firstrekbusiness.appspot.com/o/AppIcons%2FAmenities%2Fic_ac.svg?alt=media&token=597fac37-710f-4451-a50e-40cac19036fb'},
  {id:4,label:'Free Wifi',url:'https://cdn.firstrek.in/AppIcons%2FAmenities%2Fic_wifi.svg?alt=media&token=6231d551-94a4-49a0-9729-d76a259d8513'},
  {id:5,label:'Breakfast',url:'https://cdn.firstrek.in/AppIcons%2FAmenities%2Fic_breakfast.svg?alt=media&token=18430dcc-4c26-46c2-8eb7-790fa6411265'},
  {id:6,label:'Air Conditioner',url:'https://firebasestorage.googleapis.com/v0/b/firstrekbusiness.appspot.com/o/AppIcons%2FAmenities%2Fic_ac.svg?alt=media&token=597fac37-710f-4451-a50e-40cac19036fb'},
  {id:7,label:'Free Wifi',url:'https://cdn.firstrek.in/AppIcons%2FAmenities%2Fic_wifi.svg?alt=media&token=6231d551-94a4-49a0-9729-d76a259d8513'},
  {id:8,label:'Breakfast',url:'https://cdn.firstrek.in/AppIcons%2FAmenities%2Fic_breakfast.svg?alt=media&token=18430dcc-4c26-46c2-8eb7-790fa6411265'},
  {id:9,label:'Air Conditioner',url:'https://firebasestorage.googleapis.com/v0/b/firstrekbusiness.appspot.com/o/AppIcons%2FAmenities%2Fic_ac.svg?alt=media&token=597fac37-710f-4451-a50e-40cac19036fb'}]
 
  return (
   <VStack style={[styles.app_flex_container]}>
      <HeaderListing completion="96"/>
          <ScrollView>
              <VStack  style={[styles.app_content,{paddingBottom:0}]}>
                <PageHead style={{marginBottom:1}} title="Preview" subtitle="Here you can change information or continue."/>
                <Note label="Changes on This Property will be applied after 24 Hours." type="warning"/>
                </VStack>
                <HeadingEdit subTitleSize="15" titleSize="15" title="Property Images" style={{margintop:6, marginBottom:0, paddingVertical:8, paddingHorizontal:16,backgroundColor:'#fefefe', borderColor:'#eee',borderTopWidth:1}} subtitle="Change Photos"/>
                
                <Slider data={slideData}/>
                <VStack style={styles.app_content}>
               
                <Text style={styles.title}>Hotel Highway on Wheels, Uttarakhand</Text>
                <HStack style={{justifyContent:'space-between',alignItems:'center'}}>
                  <Text style={styles.subtitle}>Highway On Wheels,  6/2 Convent Road, Race Course Dehradun, 248001, Uttarkhand, India</Text>
                  <Text style={styles.title_edit_link}>Edit</Text>
                </HStack>

                <Divider style={{backgroundColor:'#7C7C7C', width:'100%', height:1, marginVertical:24}}/>
                  <HeadingEdit subTitleSize="15" titleSize="20" title="Facilities" subtitle="Edit"/>
                  <AmentiesListitem data={amenitiesListData}/>
                  <Button appearance='outline' style={{backgroundColor:'#fff',borderWidth:1.5, marginVertical:12,}}>View all 9 amenities</Button>
                  <Divider style={{backgroundColor:'#7C7C7C', width:'100%', height:1, marginVertical:24}}/>
                  
                  <HeadingEdit subTitleSize="15" titleSize="20" title="Property Frontdesk Number" subtitle="Edit"/>

                  <HStack style={{justifyContent:'space-between', alignItems:'center'}}>
                    <IC_Phone width="24" height="24"/>
                    <Text style={{flex:1, marginHorizontal:12, fontFamily:'Barlow_500Medium', fontSize:18, color:'#000'}}>+91-9058846467</Text>
                  </HStack>
                  <Divider style={{backgroundColor:'#7C7C7C', width:'100%', height:1, marginVertical:24}}/>
                  
                  <HeadingEdit subTitleSize="15" titleSize="20" title="Room Numbers &  Floors" subtitle="Edit"/>

                  <GridListitem name="Number of rooms" value="4"/>
                  <GridListitem name="Number of floors" value="2"/>
                  <Divider style={{backgroundColor:'#7C7C7C', width:'100%', height:1, marginVertical:24}}/>
                  

                  <HeadingEdit subTitleSize="15" titleSize="20" title="Pricing" subtitle="Edit"/>

                  <GridListitem name="Room Type" value="Classic"/>
                  <GridListitem name="Number of Rooms" value="2"/>
                  <GridListitem name="Customer Price" value="₹1200 / 2 Adults"/>
                  <GridListitem name="B2B Price" value="₹900 / 2 Adults"/>

                  <Divider style={{backgroundColor:'#7C7C7C', width:'100%', height:1, marginVertical:24}}/>

                  <GridListitem name="Room Type" value="Delux"/>
                  <GridListitem name="Number of Rooms" value="2"/>
                  <GridListitem name="Customer Price" value="₹1800 / 2 Adults"/>
                  <GridListitem name="B2B Price" value="₹1400 / 2 Adults"/>
                  
                  <Divider style={{backgroundColor:'#7C7C7C', width:'100%', height:1, marginVertical:24}}/>

                  <GridListitem name="Room Type" value="Family"/>
                  <GridListitem name="Number of Rooms" value="2"/>
                  <GridListitem name="Customer Price" value="₹2800 / 4 Adults"/>
                  <GridListitem name="B2B Price" value="₹2400 / 4 Adults"/>
                  
                  <Divider style={{backgroundColor:'#7C7C7C', width:'100%', height:1, marginVertical:24}}/>

                </VStack>
          </ScrollView>
            
            <VStack style={[styles.app_bottom_content]}>
              <HStack style={[{justifyContent:'space-between', padding:16,}]}>
                      <Button appearance='outline' style={[styles.app_partial_btn,{backgroundColor:'#fff',borderWidth:1.5}]}  onPress={() => navigation.goBack()}>Back</Button>
                      <Button style={[styles.app_partial_btn,{backgroundColor:'#1a1a1a'}]}  onPress={() => navigation.navigate("KycPage")}>Publish</Button>
              </HStack>
            </VStack>  
        
    </VStack>
  );
}

const styles = StyleSheet.create({
    app_partial_btn:{
      width:'46%', 
      fontFamily:'Barlow_700Bold',  
      paddingVertical:3
    },
    title:{
      color:'#000',
      fontSize:20,
      paddingBottom:10, 
      fontFamily:'Barlow_700Bold'
    },
    subtitle:{
      color:'#000',
      fontSize:14,
      fontFamily:'Barlow_400Regular'
    },
    title_edit_link:{
      color:'#4C8BF5',
      fontSize:14, 
      fontFamily:'Barlow_700Bold',  
    },
    app_bottom_content:{
      borderTopWidth:1, 
      borderColor:'#757575', 
      borderStyle:'solid'
    },
    app_flex_container:{
      flex:1,  
      justifyContent:'space-between', 
      backgroundColor:"#ffffff" 
    },
    app_content:{
        padding:16,
    },
   
});
