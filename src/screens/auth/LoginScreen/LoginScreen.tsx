import React from 'react'

import { Text } from '../../../components/Text/Text'
import { TextInput } from '../../../components/TextInput/TextInput'
import { Button } from '../../../components/Button/Button'
import { Icon } from '../../../components/Icon/Icon'
import { Screen } from '../../../components/Screen/Screen'
import { PasswordInput } from '../../../components/PasswordInput/PasswordInput'

export function LoginScreen() {
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
      <Text color="primary" bold preset="paragraphSmall">
        Esqueci minha senha
      </Text>
      <Button mt="s48" title="Entrar" />
      <Button mt="s12" preset="outline" title="Criar uma conta" />
    </Screen>
  )
}
