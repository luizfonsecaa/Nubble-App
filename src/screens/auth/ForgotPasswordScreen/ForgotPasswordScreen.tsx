import { Button } from '../../../components/Button/Button'
import { FormTextInput } from '../../../components/Form/FormTextInput/FormTextInput'
import { Screen } from '../../../components/Screen/Screen'
import { Text } from '../../../components/Text/Text'
import { useResetNavigationSuccess } from '../../../hooks/useResetNavigationSuccess'
import { useForm } from 'react-hook-form'
import {
  ForgotPasswordSchema,
  forgotPasswordSchema,
} from './ForgotPasswordSchema'
import { zodResolver } from '@hookform/resolvers/zod'
export function ForgotPasswordScreen() {
  const { reset } = useResetNavigationSuccess()

  const { control, handleSubmit, formState } = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
    },
  })

  function submitForm(data: ForgotPasswordSchema) {
    console.log('Submitting form:', data)
    reset({
      title: `Enviamos as\ninstruções para seu\ne-mail`,
      description:
        'Clique no link enviado no seu e-mail para recuperar sua senha',
      icon: {
        name: 'messageRound',
        color: 'primary',
      },
    })
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
        disable={!formState.isValid}
        title="Recuperar minha senha"
        onPress={handleSubmit(submitForm)}
      />
    </Screen>
  )
}
