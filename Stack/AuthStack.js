import { createStackNavigator } from '@react-navigation/stack';

import { CardStyleInterpolators } from '@react-navigation/stack';
import Header from '../componenets/global/Header';
import CSplashScreen from '../screens/CSplashScreen';
import LoginPage from '../screens/LoginPage';
import OtpVerify from '../screens/OtpVerify';

const { Navigator, Screen } = createStackNavigator();


const AuthStack = ()=> {


    return (
        
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
          </Navigator>
    );

}


export default AuthStack;