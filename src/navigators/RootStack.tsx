import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from '../screens/Welcome';
import Home from '../screens/Home';
import {colors} from '../components/colors';
import Avi from '../../assets/avi/avatar.png';
import Profile from '../components/Header/Profile';
import Greeting from '../components/Header/Greeting';

export type RootStackParamsList = {
  Welcome: undefined;
  Home: undefined;
};

const Stack = createStackNavigator<RootStackParamsList>();

const RootStack: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.graylight,
            borderBottomWidth: 0,
            shadowColor: 'transparent',
            shadowOpacity: 0,
            elevation: 0,
            height: 120,
          },
          headerTintColor: colors.secondary,
          headerRightContainerStyle: {paddingRight: 25},
          headerLeftContainerStyle: {paddingLeft: 10},
          headerRight: () => (
            <Profile
              img={Avi}
              imgContainerStyle={{backgroundColor: colors.tertiary}}
            />
          ),
        }}
        initialRouteName="Home">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: props => (
              <Greeting
                mainText="Hey Krish!"
                subText="Welcome back"
                {...props}
              />
            ),
            headerLeft: () => <></>,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
