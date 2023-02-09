import React, { useEffect, useRef, useState } from 'react';
import { Text, View, StatusBar, Image, Dimensions, Animated, ScrollView, TouchableOpacity, Modal, ImageBackground } from 'react-native';
import { scale } from '../../utils/metrics'
import { useSelector } from 'react-redux';
import BottomSheet from '../global/elements/BottomSheet';
import DasbhaordMenu from '../global/DashboardMenu';




const MenuSheet = ({_refEventModal}) => {
    const [dismiss,setDismiss] = useState(false);

    let ScreenHeight = Dimensions.get("window").height;
    let ScreenWidth = Dimensions.get("window").width;

   

    useEffect(()=>{
        if(dismiss){
            _refEventModal?.current?.hide()
            setTimeout(()=>{
                setDismiss(false)
            },2000)
        }
    },[dismiss])


  return (
      <BottomSheet withOutTouch={true} ref={_refEventModal}>
            <Animated.ScrollView 
                onScroll={(data)=>{
                    // console.log(data?.nativeEvent?.contentOffset?.y)
                    if(data?.nativeEvent?.contentOffset?.y < 100){
                        setDismiss(true)
                    }
                }} 
                snapToInterval={100}
                contentOffset={{x: 0, y: 600}} decelerationRate={"fast"} showsVerticalScrollIndicator={false}
            >
                <TouchableOpacity activeOpacity={1} onPress={()=>_refEventModal?.current?.hide()} style={{minHeight: ScreenHeight + 100,backgroundColor:"transparent"}} />
                <View style={{minHeight:0,backgroundColor:"transparent",borderTopLeftRadius:scale.mvs(12),borderTopRightRadius:scale.mvs(12),backgroundColor:"white"}}>
                <DasbhaordMenu/>
                </View>
                </Animated.ScrollView>
    </BottomSheet>);
}


export default MenuSheet;