import React from 'react';

import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { default as mapping } from './mapping.json';
import { default as theme } from './theme.json'; 
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { NavigationContainer, useNavigationState  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';


const { Navigator, Screen } = createStackNavigator();

import { CardStyleInterpolators } from '@react-navigation/stack';
import Header from './componenets/global/Header';
import HeaderListing from './componenets/global/HeaderListing';
import AuthStack from './Stack/AuthStack';
import SplashScreen from 'react-native-splash-screen';
import { navigationRef } from './Navigation';
import ListingStack from './Stack/ListingStack';
import AppStack from './Stack/AppStack';
import CSplashScreen from './screens/CSplashScreen';
import LoginPage from './screens/LoginPage';
import ChooseAccount from './screens/ChooseAccount';
import EditProfile from './screens/EditProfile';
import ChooseService from './screens/ChooseService';
import ChooseLocation from './screens/ChooseLocation';
import ConfirmLocation from './screens/ConfirmLocation';
import RoomInfo from './screens/RoomInfo';
import RoomAmenties from './screens/RoomAmenties';
import PhotoUploader from './screens/PhotoUploader';
import PricingPage from './screens/PricingPage';
import PreviewPage from './screens/PreviewPage';
import KycPage from './screens/KycPage';
import OtpVerify from './screens/OtpVerify';
import Dashboard from './dashboard/dashboard';
const App = ()=> {

  SplashScreen.hide();

  return (
    <>
    <StatusBar
        backgroundColor="#fff"
        barStyle={'dark-content'}
        hidden={false}/>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}
    customMapping={mapping}>
       <NavigationContainer
        screenOptions={{ gestureDirection:"horizontal"}}>
      <Navigator 
        screenOptions={{headerShown:false}} 
        initialRouteParams={{ transition: 'vertical' }}
        >
            
       <Screen
          options={{
            gestureDirection:"vertical",
          }}
          name='SplashScreen' component={CSplashScreen}/>
          <Screen
          options={{
            gestureDirection:"horizontal",
            cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS
          }}
          name='LoginPage' component={LoginPage}/>
          <Screen name='OtpVerify' component={OtpVerify}
          options={{
            gestureDirection:"horizontal",
            cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS
          }}
          />
                   
                   <Screen name='ChooseAccount' component={ChooseAccount}
            options={{gestureDirection:"horizontal",
            cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS
            }}
            />
            <Screen name='EditProfile' component={EditProfile}
            options={{
            gestureDirection:"horizontal",
            cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS
            }}
            />
            <Screen name='ChooseService' component={ChooseService}
            options={{
            gestureDirection:"horizontal",
            cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS
            }}
            />
            <Screen name='ChooseLocation' component={ChooseLocation}
            options={{
            gestureDirection:"horizontal",
            cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS
            }}
            />
            <Screen name='ConfirmLocation' component={ConfirmLocation}
            options={{
            gestureDirection:"horizontal",
            cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS
            }}
            />
            <Screen name='RoomInfo' component={RoomInfo}
            options={{
            gestureDirection:"horizontal",
            cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS
            }}
            />
            <Screen name='RoomAmenties' component={RoomAmenties}
            options={{
            gestureDirection:"horizontal",
            cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS
            }}
            />
            <Screen name='PhotoUploader' component={PhotoUploader}
            options={{
            gestureDirection:"horizontal",
            cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS
            }}
            />
            <Screen name='PricingPage' component={PricingPage}
            options={{
            gestureDirection:"horizontal",
            cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS
            }}
            />
            <Screen name='PreviewPage' component={PreviewPage}
            options={{
            gestureDirection:"horizontal",
            cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS
            }}
            />
            <Screen name='KycPage' component={KycPage}
            options={{
            gestureDirection:"horizontal",
            cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS
            }}
            />
             <Screen name='Dashboard' component={Dashboard}
            options={{gestureDirection:"horizontal",
            cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS
            }}
            />
          </Navigator>
      </NavigationContainer>
      
  </ApplicationProvider>
  </>
  );
};

export default App;