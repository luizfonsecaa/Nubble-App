import { useEffect } from 'react'

import { ToastProvider } from '@services'
import { initializeStorage, MMKVStorage } from '@services'
import { ThemeProvider } from '@shopify/restyle'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import BootSplash from 'react-native-bootsplash'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { Toast } from '@components'

import { Router } from './src/routes/Routes'
import { AuthCredentialsProvider } from './src/services/authCredentials/Providers/AuthCredentialsProvider'
import { theme } from './src/theme/theme'

const queryClient = new QueryClient()

initializeStorage(MMKVStorage)

function App() {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    }

    init().finally(async () => {
      await BootSplash.hide({ fade: true })
      console.log('BootSplash has been hidden successfully')
    })
  }, [])

  return (
    <AuthCredentialsProvider>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <ThemeProvider theme={theme}>
            <ToastProvider>
              <Router />
              <Toast />
            </ToastProvider>
          </ThemeProvider>
        </SafeAreaProvider>
      </QueryClientProvider>
    </AuthCredentialsProvider>
  )
}

export default App
