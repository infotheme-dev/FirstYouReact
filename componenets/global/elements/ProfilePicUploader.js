import { Icon } from '@ui-kitten/components';
import * as React from 'react';
import { Text, StyleSheet,View } from 'react-native';
export default function ProfilePicUploader(props) {
  return (
    <View style={styles.picUploaderRoundedd}>
                  <Icon 
            fill='#7C7C7C'
            style={{width:32,height:32}}
            name="cloud-upload-outline"/>
  </View>
  );
}

const styles = StyleSheet.create({
 
  picUploaderRoundedd:{
   backgroundColor:'#EFEFEF', display:'flex', alignItems:'center',      justifyContent:'center', width:100,height:100, borderRadius:150
  }
});
