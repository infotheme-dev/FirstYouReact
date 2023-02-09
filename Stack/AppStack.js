import { createStackNavigator } from '@react-navigation/stack';
import { CardStyleInterpolators } from '@react-navigation/stack';
import Dashboard from '../dashboard/dashboard';

const { Navigator, Screen } = createStackNavigator();

const AppStack = ()=> {
   

    return (
    <Navigator 
        screenOptions={{headerShown:false}} 
        initialRouteName="Dasbhaord"
        initialRouteParams={{ transition: 'vertical' }}
        >
            <Screen name='Dasbhaord' component={Dashboard}
            options={{gestureDirection:"horizontal",
            cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS
            }}
            />
          </Navigator>
    );

}

export default AppStack;