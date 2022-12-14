import React from 'react';
import { StatusBar as ExpoStatusBar} from 'expo-status-bar';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen';
import { ThemeProvider } from 'styled-components/native';
import {theme} from './src/infrastructure/theme'

import{
  useFonts as useOswald,
  Oswald_400Regular
}from '@expo-google-fonts/oswald';

import{
  useFonts as useLato,
  Lato_400Regular
}from '@expo-google-fonts/lato';



// const isAndroid = Platform.OS ==='android';
// console.log(StatusBar.currentHeight);
// console.log(ExpoStatusBar.currentHeight);
// <> are called fragments and they let us render two compoenent side by side

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if(!oswaldLoaded || !latoLoaded){
    return null;
  }

  return (
    <> 
    <ThemeProvider theme={theme}>
      <RestaurantsScreen />
    </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}