import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Avi from '../../assets/avi/avatar.png';
import Welcome from '../screens/Welcome';
import Home from '../screens/Home';
import {colors} from '../components/colors';
import {CardProps} from '../components/Cards/types';
import Profile from '../components/Header/Profile';
import Greeting from '../components/Header/Greeting';
import Balance from '../screens/Balance';

export type RootStackParamsList = {
  Welcome: undefined;
  Home: undefined;
  Balance: CardProps;
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
        initialRouteName="Welcome">
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
                mainText="Hey Boss!"
                subText="Welcome back"
                {...props}
              />
            ),
            headerLeft: () => <></>,
          }}
        />

        <Stack.Screen
          name="Balance"
          component={Balance}
          options={({route}) => ({
            headerTitle: route?.params?.alias,
            headerTitleAlign: 'center',
            headerBackImage: props => (
              <Ionicons
                {...props}
                name="chevron-back"
                size={25}
                color={colors.secondary}
              />
            ),
            headerLeftContainerStyle: {
              paddingLeft: 0,
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
