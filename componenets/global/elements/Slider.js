import { Icon } from '@ui-kitten/components';
import * as React from 'react';
import { View,StyleSheet,Image} from 'react-native';
import Swiper from 'react-native-swiper';
export default function Slider(props) {
   let slides = props.data;
  return (
    <Swiper style={[styles.wrapper,props.style]} 
    showsButtons={true} 
    showsPagination={false} 
    nextButton={<Icon name="arrow-circle-right" fill="#fff" style={styles.icon} />} 
    prevButton={<Icon name="arrow-circle-left" fill="#fff" style={styles.icon} />} 
    loop={false}>
    {slides.map((slide) => {
        return (<View key={slide.id} style={styles.slide}>
            <Image  id={slide.id} style={styles.slide_image} source={{uri:slide.url}}/>
        </View>
        );
      })}
    </Swiper>
  );
}

const styles = StyleSheet.create({
    icon: {
        width:24,
        height:24
      },
      wrapper: {
        maxHeight:250,
        backgroundColor:'#000'
      },
      slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      slide_image:{
        width:'100%',
        height:'100%',
        opacity:0.8,
        objectFit:'cover'
      }
});
