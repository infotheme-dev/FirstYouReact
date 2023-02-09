import * as React from 'react';
import { Text, StyleSheet,ScrollView,View } from 'react-native';

import HeaderListing from '../componenets/global/HeaderListing';
import ListChooser from '../componenets/global/elements/ListChooser';

import { Layout } from '@ui-kitten/components';
import VStack from '../componenets/global/elements/VStack';
import PageHead from '../componenets/global/elements/PageHead';
export default function ChooseService({ navigation }) {
  return (
   <VStack style={[styles.app_flex_container]}>
         <HeaderListing completion="30"/>
          <View style={styles.app_content}>
          <PageHead title="What type of property/service do you want to list?" subtitle="Please choose a service / property you want to list with us. We will show this as  you opted."/>
            <ScrollView style={{paddingVertical:12}}>
              <ListChooser title="Hotel" 
              navigation={navigation}
              icon={require('../assets/icons/ic_building.svg')}
              subtitle="A business that allows guests to book private rooms, suits etc." 
              value="hotel"/>

               <ListChooser title="HomeStay" 
               navigation={navigation}
              icon={require('../assets/icons/ic_homestay.svg')}
              subtitle="A residential home where guests may book, one or more rooms, or the entire property." 
              value="homestay"/>

              <ListChooser title="Camping" 
              navigation={navigation}
              icon={require('../assets/icons/ic_camp.svg')}
              subtitle="A business that allows guests to book camp, tents with other camping activities." 
              value="camping"/>

               <ListChooser title="Trek / Tour" 
               navigation={navigation}
              icon={require('../assets/icons/ic_guide.svg')}
              subtitle="Create your own trek/tour package or register with our builtin treks, choose and get more clients." 
              value="trek"/>

               <ListChooser title="Transportation" 
               navigation={navigation}
              icon={require('../assets/icons/ic_transport.svg')}
              subtitle="Add A Vehicle or Car type with package helps customers to book for there travel journey." 
              value="transport"/>

                <ListChooser title="Restaurant" 
                navigation={navigation}
              icon={require('../assets/icons/ic_restaurent.svg')}
              subtitle="Add your In-house restaurant or independent restaurant, to avail food on arrival to guests" 
              value="restaurent"/>

               </ScrollView>
            </View>
          
        
    </VStack>
  );
}

const styles = StyleSheet.create({
 
  app_flex_container:{
    flex:1, 
    paddingTop:16, 
    justifyContent:'space-between', 
    backgroundColor:"#ffffff" 
  },
  app_content:{
      padding:16,
  },
  login_title:{
    fontSize:21,
    fontFamily:'Barlow_700Bold',
    paddingVertical:2,
    color:'#000'
},
 login_subtitle:{
    fontSize:14,
    fontFamily:'Barlow_400Regular',
    paddingVertical:4,
    color:'#000'
}
});
