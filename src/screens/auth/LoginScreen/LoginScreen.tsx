import React from 'react'
import { Pressable } from 'react-native'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import {
  Text,
  Button,
  Screen,
  FormTextInput,
  FormPasswordInput,
} from '@components'
import { AuthScreenProps } from '@routes'

import { loginSchema, LoginSchema } from './LoginSchema'

export function LoginScreen({ navigation }: AuthScreenProps<'LoginScreen'>) {
  const { control, formState, handleSubmit } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  })

  function navigateToSingUpScreen() {
    navigation.navigate('SignUpScreen')
  }

  function submitForm(formData: LoginSchema) {
    console.log('Submitting form:', formData)
  }

  return (
    <Screen scrollable>
      <Text mb="s8" preset="headingLarge">
        Olá
      </Text>
      <Text mb="s40" preset="paragraphLarge">
        Digite seu e-mail e senha para entrar
      </Text>

      <FormTextInput
        control={control}
        name="email"
        label="Email"
        placeholder="Digite seu Email"
        BoxProps={{ mb: 's20' }}
      />

      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
        BoxProps={{ mb: 's10' }}
      />

      <Pressable onPress={() => navigation.navigate('ForgotPasswordScreen')}>
        <Text color="primary" bold preset="paragraphSmall">
          Esqueci minha senha
        </Text>
      </Pressable>
      <Button
        mt="s48"
        title="Entrar"
        onPress={handleSubmit(submitForm)}
        disable={!formState.isValid}
      />
      <Button
        mt="s12"
        onPress={navigateToSingUpScreen}
        preset="outline"
        title="Criar uma conta"
      />
    </Screen>
  )
}
