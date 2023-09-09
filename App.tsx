import { StatusBar } from 'expo-status-bar';
import { Routes } from './src/routes/index';
import { TamaguiProvider } from 'tamagui';
import config from './tamagui.config'
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  if (!loaded) {
    return null
  }

  return (
    <TamaguiProvider config={config}>
      <StatusBar style="auto" />
      <Routes />
    </TamaguiProvider>
  );
}