import { Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';

import THEME from '@theme/index'
import { Routes } from './src/routes/index';

export default function App() {
  return (
    <ThemeProvider theme={THEME}>
      <StatusBar style="auto" />
      <Routes />
    </ThemeProvider>
  );
}