import { View } from 'react-native'
import { Text } from './src/components/Text/Text'
import { Button } from './src/components/Button/Button'
import { ThemeProvider } from '@shopify/restyle'
import { theme } from './src/theme/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <View style={{ marginTop: 50, marginHorizontal: 30 }}>
        <Text preset="headingLarge">Olá</Text>
        <Button title="Entrar" mb="s12" />
        <Button loading mb="s12" title="Entrar" preset="outline" />
        <Button title="Entrar" disable />
      </View>
    </ThemeProvider>
  )
}

export default App
