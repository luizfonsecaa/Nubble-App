import { Text } from '../Text/Text'
import { TouchableOpacityBox, TouchableOpacityBoxProps } from '../Box/Box'
import { buttonPresets } from './ButtonPresets'
import { ActivityIndicator } from '../ActivityIndicator/ActivityIndicator'

export type ButtonPreset = 'primary' | 'outline'

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string
  loading?: boolean
  preset?: ButtonPreset
  disable?: boolean
}
export function Button({
  title,
  loading,
  preset = 'primary',
  disable,
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const buttonPreset = buttonPresets[preset][disable ? 'disabled' : 'default']

  return (
    <TouchableOpacityBox
      paddingHorizontal="s20"
      disabled={disable || loading}
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      {...buttonPreset.container}
      {...touchableOpacityBoxProps}
    >
      {loading ? (
        <ActivityIndicator color={buttonPreset.content} />
      ) : (
        <Text preset="paragraphMedium" bold color={buttonPreset.content}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  )
}
