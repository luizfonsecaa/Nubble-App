import { Button } from '../../../components/Button/Button'
import { Screen } from '../../../components/Screen/Screen'
import { Text } from '../../../components/Text/Text'
import { TextInput } from '../../../components/TextInput/TextInput'
import { useResetNavigationSuccess } from '../../../hooks/useResetNavigationSuccess'

export function ForgotPasswordScreen() {
  const { reset } = useResetNavigationSuccess()

  function submitForm() {
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
      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        BoxProps={{ marginBottom: 's48' }}
      />
      <Button title="Recuperar minha senha" onPress={submitForm} />
    </Screen>
  )
}
