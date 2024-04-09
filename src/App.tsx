import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

import RootStack from './navigators/RootStack';

const App: React.FC = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 700);
  }, []);

  return <RootStack />;
};

export default App;
