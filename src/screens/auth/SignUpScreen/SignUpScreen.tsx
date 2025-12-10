import React from 'react'

import { Text } from '../../../components/Text/Text'
import { Button } from '../../../components/Button/Button'
import { Screen } from '../../../components/Screen/Screen'
import { useResetNavigationSuccess } from '../../../hooks/useResetNavigationSuccess'
import { useForm } from 'react-hook-form'
import { FormTextInput } from '../../../components/Form/FormTextInput/FormTextInput'
import { FormPasswordInput } from '../../../components/Form/FormPasswordInput/FormPasswordInput'
import { zodResolver } from '@hookform/resolvers/zod'
import { SignUpSchema, signUpSchema } from './signUpSchema'

export function SignUpScreen() {
  const { reset } = useResetNavigationSuccess()
  const { control, formState, handleSubmit } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: '',
      fullName: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  })

  function submitForm(formData: SignUpSchema) {
    console.log('Submitting form:', formData)
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
      <FormTextInput
        control={control}
        name="username"
        label="Seu username"
        placeholder="@"
        BoxProps={{ marginBottom: 's20' }}
      />
      <FormTextInput
        control={control}
        name="fullName"
        label="Nome completo"
        placeholder="Digite seu nome completo"
        BoxProps={{ marginBottom: 's20' }}
      />
      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        BoxProps={{ marginBottom: 's20' }}
      />

      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
        BoxProps={{ mb: 's10' }}
      />

      <Button
        onPress={handleSubmit(submitForm)}
        disable={!formState.isValid}
        mt="s48"
        title="Criar minha conta"
      />
    </Screen>
  )
}
