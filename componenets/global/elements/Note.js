import * as React from 'react';
import { Text,StyleSheet } from 'react-native';
import VStack from './VStack';
export default function Note(props) {
    let note_type = styles.note_danger;
    if(props.type =='success'){
        note_type = styles.note_success;
    }else if(props.type == 'warning'){
        note_type = styles.note_warning;
    }else{
        note_type = styles.note_danger;
    }

    return (
        <VStack
            style={[note_type, props.style]}>
                <Text style={styles.label}>{props.label}</Text>
          </VStack>
      );
  
}

const styles = StyleSheet.create({
    note_danger:{
        borderWidth:0.5,
        borderStyle:'solid',
        borderColor:'#CC0202',
        marginVertical:4,
        paddingHorizontal: 12,
        backgroundColor:'#FFE5DF',
        borderRadius: 4,
        paddingVertical:8,
        paddingHorizontal:12,
        position:'relative'
    },
    note_warning:{
        borderWidth:0.5,
        borderStyle:'solid',
        borderColor:'#CC4B02',
        marginVertical:4,
        paddingHorizontal: 12,
        backgroundColor:'#FFF8DF',
        borderRadius: 4,
        paddingVertical:8,
        paddingHorizontal:12,
        position:'relative'
    },

    note_success:{
        borderWidth:0.5,
        borderStyle:'solid',
        borderColor:'#14700C',
        paddingHorizontal: 12,
        marginVertical:4,
        backgroundColor:'#CEFCCA',
        borderRadius: 4,
        paddingVertical:8,
        paddingHorizontal:12,
        position:'relative'
    },
    label:{
        backgroundColor:'transparent',
        color:'#000',
        fontSize:12.5,
        fontFamily:'Barlow_600SemiBold'
    }
});
