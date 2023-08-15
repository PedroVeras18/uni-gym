import { Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';

import THEME from '@theme/index'

export default function App() {
  return (
    <ThemeProvider theme={THEME}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}