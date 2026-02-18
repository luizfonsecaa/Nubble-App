import { useAuthRequestNewPassword } from '@domain'
import { zodResolver } from '@hookform/resolvers/zod'
import { useToastService } from '@services'
import { useForm } from 'react-hook-form'

import { Text, Screen, FormTextInput, Button } from '@components'
import { useResetNavigationSuccess } from '@hooks'
import { RootStackParamList } from '@routes'

import {
  ForgotPasswordSchema,
  forgotPasswordSchema,
} from './ForgotPasswordSchema'

const resetParam: RootStackParamList['SuccessScreen'] = {
  title: `Enviamos as instruções ${'\n'}para seu e-mail`,
  description: 'Clique no link enviado no seu e-mail para recuperar sua senha',
  icon: {
    name: 'messageRound',
    color: 'primary',
  },
}

export function ForgotPasswordScreen() {
  const { reset } = useResetNavigationSuccess()
  const { showToast } = useToastService()
  const { control, handleSubmit, formState } = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
    },
  })
  const { requestNewPassword, isLoading } = useAuthRequestNewPassword({
    onSuccess: () => reset(resetParam),
    onError: (message) => showToast({ message, type: 'error' }),
  })

  function submitForm({ email }: ForgotPasswordSchema) {
    requestNewPassword(email)
  }

  return (
    <Screen canGoBack>
      <Text preset="headingLarge" bold>
        {`Esqueci minha\nsenha`}
      </Text>
      <Text preset="paragraphLarge" mt="s16">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>
      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        BoxProps={{ marginBottom: 's48' }}
      />

      <Button
        loading={isLoading}
        disabled={!formState.isValid}
        title="Recuperar minha senha"
        onPress={handleSubmit(submitForm)}
      />
    </Screen>
  )
}
