import { ThemeProvider } from '@shopify/restyle'
import { theme } from './src/theme/theme'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import { LoginScreen } from './src/screens/auth/LoginScreen/LoginScreen'
import { SignScreen } from './src/screens/auth/SignScreen/SignScreen'

function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        {/* <LoginScreen /> */}
        <SignScreen />
      </ThemeProvider>
    </SafeAreaProvider>
  )
}

export default App
