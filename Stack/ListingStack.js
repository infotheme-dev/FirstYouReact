import { createStackNavigator } from '@react-navigation/stack';

import { CardStyleInterpolators } from '@react-navigation/stack';
import ChooseAccount from '../screens/ChooseAccount';
import ChooseLocation from '../screens/ChooseLocation';
import ChooseService from '../screens/ChooseService';
import ConfirmLocation from '../screens/ConfirmLocation';
import EditProfile from '../screens/EditProfile';
import KycPage from '../screens/KycPage';
import PhotoUploader from '../screens/PhotoUploader';
import PreviewPage from '../screens/PreviewPage';
import PricingPage from '../screens/PricingPage';
import RoomAmenties from '../screens/RoomAmenties';
import RoomInfo from '../screens/RoomInfo';

const { Navigator, Screen } = createStackNavigator();

const ListingStack = ()=> {
   

    return (
    <Navigator 
        screenOptions={{headerShown:false}} 
        initialRouteName="ChooseAccount"
        initialRouteParams={{ transition: 'vertical' }}
        >
                
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
          </Navigator>
    );

}

export default ListingStack;