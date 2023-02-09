import * as React from 'react';
import { View,StyleSheet, Text} from 'react-native';
export default function Heading(props) {
  return (
    <View style={[styles.container, props.style]}>
          <Text style={styles.s_title}>{props.title}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
    s_title: {
        fontSize:18,
        width:'100%',
        color:'#000',
        fontFamily:'Barlow_700Bold'
    },
    container:{
        marginVertical:16
    }
});
