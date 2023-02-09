import * as React from 'react';
import { View,StyleSheet, Text} from 'react-native';
import HStack from './HStack';
import VStack from './VStack';
export default function BookingCard(props) {
    if(props.type =='warning'){
        return (
            <VStack style={styles.container}>
                <HStack style={[styles.top_item, props.style]}>
                    <Text style={styles.customer_name}>{props.customer_name}</Text>
                    <Text style={[styles.price, {color:'#F0890F'}]}>{props.price}</Text>
                </HStack>
                <Text style={styles.subtitle}>#{props.booking_id} . {props.booking_from} - {props.booking_to}</Text>
          </VStack>
      );
    }else if(props.type =='danger'){
        return (
            <VStack style={styles.container}>
                <HStack style={[styles.top_item, props.style]}>
                    <Text style={styles.customer_name}>{props.customer_name}</Text>
                    <Text style={[styles.price, {color:'#F6182D'}]}>{props.price}</Text>
                </HStack>
                <Text style={styles.subtitle}>#{props.booking_id} . {props.booking_from} - {props.booking_to}</Text>
          </VStack>
      );
    }else if(props.type == 'success'){
        return (
            <VStack style={styles.container}>
                <HStack style={[styles.top_item, props.style]}>
                    <Text style={styles.customer_name}>{props.customer_name}</Text>
                    <Text style={[styles.price, {color:'#14700C'}]}>{props.price}</Text>
                </HStack>
                <Text style={styles.subtitle}>#{props.booking_id} . {props.booking_from} - {props.booking_to}</Text>
          </VStack>
      );
    }else{
        return (
            <VStack style={styles.container}>
                <HStack style={[styles.top_item, props.style]}>
                    <Text style={styles.customer_name}>{props.customer_name}</Text>
                    <Text style={[styles.price, props.subStyle]}>{props.price}</Text>
                </HStack>
                <Text style={styles.subtitle}>#{props.booking_id} . {props.booking_from} - {props.booking_to}</Text>
          </VStack>
      );
    }
 
}

const styles = StyleSheet.create({
    price: {
        fontSize:16,
        color:'#000',
        fontFamily:'Barlow_700Bold'
    },
    customer_name: {
        fontSize:16,
        color:'#000',
        fontFamily:'Barlow_700Bold'
    },
    subtitle:{
        fontSize:13,
        width:'100%',
        paddingVertical:4,
        color:'#5F5D5D',
        fontFamily:'Barlow_500Medium'
    },
    top_item:{
        flex:1,
        paddingVertical:8,
        justifyContent:'space-between',
    },
    container:{
        marginBottom:20,
        borderRadius:6,
        paddingHorizontal:16,
        paddingBottom:8,
        borderColor:'#D2D1D1',
        borderWidth:1,
    }
});
