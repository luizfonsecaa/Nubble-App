import React from 'react'

import { Text } from '../../../components/Text/Text'
import { TextInput } from '../../../components/TextInput/TextInput'
import { Button } from '../../../components/Button/Button'
import { Screen } from '../../../components/Screen/Screen'
import { PasswordInput } from '../../../components/PasswordInput/PasswordInput'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../routes/Routes'
import { useResetNavigationSuccess } from '../../../hooks/useResetNavigationSuccess'

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>

export function SignScreen({ navigation }: ScreenProps) {
  const { reset } = useResetNavigationSuccess()

  function submitForm() {
    reset({
      title: 'Sua conta foi criada com sucesso!',
      description: 'Agora é só fazer login na nossa plataforma!',
      icon: {
        name: 'checkRound',
        color: 'success',
      },
    })
  }
  return (
    <Screen canGoBack scrollable>
      <Text mb="s32" preset="headingLarge">
        Criar uma conta
      </Text>
      <TextInput
        label="Seu username"
        placeholder="@"
        BoxProps={{ marginBottom: 's20' }}
      />
      <TextInput
        label="Nome completo"
        placeholder="Digite seu nome completo"
        BoxProps={{ marginBottom: 's20' }}
      />
      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        BoxProps={{ marginBottom: 's20' }}
      />

      <PasswordInput
        label="Senha"
        placeholder="Digite sua senha"
        BoxProps={{ mb: 's10' }}
      />
      <Button onPress={submitForm} mt="s48" title="Criar minha conta" />
    </Screen>
  )
}
