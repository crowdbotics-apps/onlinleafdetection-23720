import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList190941Navigator from '../features/NotificationList190941/navigator';
import Settings190940Navigator from '../features/Settings190940/navigator';
import Settings190932Navigator from '../features/Settings190932/navigator';
import UserProfile190930Navigator from '../features/UserProfile190930/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList190941: { screen: NotificationList190941Navigator },
Settings190940: { screen: Settings190940Navigator },
Settings190932: { screen: Settings190932Navigator },
UserProfile190930: { screen: UserProfile190930Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
