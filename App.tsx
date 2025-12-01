import { View } from 'react-native'
import { Text } from './src/components/Text/Text'

import { ThemeProvider } from '@shopify/restyle'
import { theme } from './src/theme/theme'
import { Icon } from './src/components/Icon/Icon'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <View style={{ marginTop: 50, marginHorizontal: 30 }}>
        <Text preset="headingLarge">Olá</Text>
        <Icon name="eyeOff" size={30} />
      </View>
    </ThemeProvider>
  )
}

export default App
