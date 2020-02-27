import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Main from './pages/Main'
import Profile from './pages/Profile'
import { Platform } from 'react-native'

const Routes = createAppContainer(
  createStackNavigator({
    Main: {
      screen: Main,
      navigationOptions: {
        title: 'DevRadar',
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: 'Perfil no Github   ',
      }
    }
  }, {
    defaultNavigationOptions: {
      headerTitleAlign: "center",
      headerTitleStyle: {
        ...Platform.select({
          ios: { fontFamily: 'Arial', },
          android: { fontFamily: 'Roboto' }
        })
      },
      headerTintColor: '#fff',
      headerBackTitleVisible: false,
      headerStyle: {
        backgroundColor: '#7d40e7'
      }
    }
  })
)

export default Routes