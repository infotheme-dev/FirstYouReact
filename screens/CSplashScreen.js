import React, {useRef, useEffect, useState} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import SplashScreen from 'react-native-splash-screen'
export default function CSplashScreen(props) {
  SplashScreen.hide();
    const styles = StyleSheet.create({
  
  
        logo_top: {
          fontSize:21,
          
      marginTop:-50,
          color:"#1a1a1a",
          fontFamily:'Barlow_700Bold'
        },
        logo_bottom : {
          fontSize:26,
          marginTop:-8,
           color:'#F6182D',
          fontFamily:'Barlow_700Bold'
        },
      });
   
        return (
            
            <View
            style={{
                flex: 1,
                backgroundColor: '#fff',
                alignItems:'center',
                justifyContent:'center'
            }}
        >
            <LottieView
                source={require('../assets/splash.json')}
                autoPlay
                style={{width:256,height:256}}
                loop={false}
                onAnimationFinish={() => {
                    console.log('Animation Finished!')
                   props.navigation.replace('LoginPage');
                }}
            />
              <Text style={styles.logo_top}>FIRST</Text>
      <Text style={styles.logo_bottom}>YOU.</Text>
      <Text style={{fontSize:16,
      fontFamily:'Barlow_700Bold',
      marginTop:5,
      marginBottom:10,
      color:'#000'}}>Your Growth Partner</Text>
            <Text style={{fontSize:10,
      fontFamily:'Barlow_700Bold',
      color:'#000'}}>Hotels . HomeStay . Camping</Text>
       <Text style={{fontSize:10,
      fontFamily:'Barlow_700Bold',
      color:'#000'}}>Tour Guide . Transport . Food</Text>
      
        </View>
         );  
    
   
 }
 
