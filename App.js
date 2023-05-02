import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/login/index'
import Feed from './screens/feed/index'
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './redux/store'
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle={'light-content'} />
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen component={Login} name='Login' />
          <Stack.Screen component={Feed} name='Feed' />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}