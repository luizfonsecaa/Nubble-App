import React from 'react'

import { Text } from '../../../components/Text/Text'
import { TextInput } from '../../../components/TextInput/TextInput'
import { Button } from '../../../components/Button/Button'
import { Screen } from '../../../components/Screen/Screen'
import { PasswordInput } from '../../../components/PasswordInput/PasswordInput'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../routes/Routes'
import { Pressable } from 'react-native'

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>

export function LoginScreen({ navigation }: ScreenProps) {
  function navigateToSingUpScreen() {
    navigation.navigate('SignScreen')
  }

  async function handleLogin() {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users/1',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )

      if (!response.ok) {
        throw new Error('Erro na requisição')
      }

      const data = await response.json()
      console.log('Dados recebidos:', data)
    } catch (error) {
      console.error('Erro ao fazer login:', error)
    }
  }

  return (
    <Screen>
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
      <PasswordInput
        label="Senha"
        placeholder="Digite sua senha"
        BoxProps={{ mb: 's10' }}
      />
      <Pressable onPress={() => navigation.navigate('ForgotPasswordScreen')}>
        <Text color="primary" bold preset="paragraphSmall">
          Esqueci minha senha
        </Text>
      </Pressable>
      <Button mt="s48" title="Entrar" onPress={handleLogin} />
      <Button
        mt="s12"
        onPress={navigateToSingUpScreen}
        preset="outline"
        title="Criar uma conta"
      />
    </Screen>
  )
}
