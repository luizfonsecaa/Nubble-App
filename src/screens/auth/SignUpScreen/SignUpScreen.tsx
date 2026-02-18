import React from 'react'

import { useAuthSignUp } from '@domain'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import {
  ActivityIndicator,
  Button,
  FormPasswordInput,
  FormTextInput,
  Screen,
  Text,
} from '@components'
import { useResetNavigationSuccess } from '@hooks'
import { AuthScreenProps, RootStackParamList } from '@routes'

import { signUpSchema, SignUpSchema } from './signUpSchema'
import { useAsyncValidation } from './useAsyncValidation'

const resetParam: RootStackParamList['SuccessScreen'] = {
  title: 'Sua conta foi criada com sucesso!',
  description: 'Agora é só fazer login na nossa plataforma',
  icon: {
    name: 'checkRound',
    color: 'success',
  },
}

const defaultValues: SignUpSchema = {
  username: '',
  firstName: '',
  lastName: '',
  email: '',
  password: '',
}

export function SignUpScreen({}: AuthScreenProps<'SignUpScreen'>) {
  const { reset } = useResetNavigationSuccess()
  const { signUp, isLoading } = useAuthSignUp({
    onSuccess: () => {
      reset(resetParam)
    },
  })

  const { control, formState, handleSubmit, watch, getFieldState } =
    useForm<SignUpSchema>({
      resolver: zodResolver(signUpSchema),
      defaultValues,
      mode: 'onChange',
    })
  function submitForm(formValues: SignUpSchema) {
    signUp(formValues)
  }

  const { usernameValidation, emailValidation } = useAsyncValidation({
    watch,
    getFieldState,
  })

  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>

      <FormTextInput
        control={control}
        name="username"
        label="Seu username"
        placeholder="@"
        errorMessage={usernameValidation.errorMessage}
        BoxProps={{ mb: 's20' }}
        rightComponent={
          usernameValidation.isFetching ? (
            <ActivityIndicator size="small" />
          ) : undefined
        }
      />

      <FormTextInput
        control={control}
        name="firstName"
        autoCapitalize="words"
        label="Nome"
        placeholder="Digite seu nome"
        BoxProps={{ mb: 's20' }}
      />
      <FormTextInput
        control={control}
        name="lastName"
        autoCapitalize="words"
        label="Sobrenome"
        placeholder="Digite seu sobrenome"
        BoxProps={{ mb: 's20' }}
      />
      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        BoxProps={{ mb: 's20' }}
        errorMessage={emailValidation.errorMessage}
        rightComponent={
          emailValidation.isFetching ? (
            <ActivityIndicator size="small" />
          ) : undefined
        }
      />

      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
        BoxProps={{ mb: 's48' }}
      />

      <Button
        loading={isLoading}
        disabled={
          !formState.isValid ||
          usernameValidation.notReady ||
          emailValidation.notReady
        }
        onPress={handleSubmit(submitForm)}
        title="Criar uma conta"
      />
    </Screen>
  )
}
