import { View } from 'react-native'
import { Text } from './src/components/Text/Text'

import { ThemeProvider } from '@shopify/restyle'
import { theme } from './src/theme/theme'

import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import { Box } from './src/components/Box/Box'
import { Button } from './src/components/Button/Button'
import { TextInput } from './src/components/TextInput.tsx/TextInput'
import { Icon } from './src/components/Icon/Icon'

function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <SafeAreaView>
          <View style={{ marginHorizontal: 24 }}>
            <Text mb="s8" preset="headingLarge">
              Olá
            </Text>
            <Text mb="s40" preset="paragraphLarge">
              Digite seu e-mail e senha para entrar
            </Text>
            <TextInput
              label="Email"
              placeholder="Digite seu Email"
              errorMessage="mensagem de erro"
              BoxProps={{ mb: 's20' }}
            />
            <TextInput
              label="Senha"
              placeholder="Digite sua senha"
              rightComponent={<Icon name="eyeOn" color="gray2" />}
              BoxProps={{ mb: 's10' }}
            />
            <Text color="primary" bold preset="paragraphSmall">
              Esqueci minha senha
            </Text>
            <Button mt="s48" title="Entrar" />
            <Button mt="s12" preset="outline" title="Criar uma conta" />
          </View>
        </SafeAreaView>
      </ThemeProvider>
    </SafeAreaProvider>
  )
}

export default App
