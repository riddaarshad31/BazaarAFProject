import React, {useEffect, useState} from 'react';
import SplashScreen from './screens/SplashScreen';
import HomeRoute from './stackNavigator/HomeRoute';

const AppContainer = () => {
  const [isAppLoading, setIsAppLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsAppLoading(false), 500);
  }, []);

  if (isAppLoading) {
    return <SplashScreen />;
  }

  return <HomeRoute />;
};

export default AppContainer;
