import { TouchableOpacityBox, TouchableOpacityBoxProps } from '@components'
import { ActivityIndicator } from '@components'

import { Text } from '../Text/Text'

import { buttonPresets } from './ButtonPresets'

export type ButtonPreset = 'primary' | 'outline'

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string
  loading?: boolean
  preset?: ButtonPreset
  disabled?: boolean
}
export function Button({
  title,
  loading,
  preset = 'primary',
  disabled,
  ...touchableOpacityBoxProps
}: ButtonProps) {
  console.log('disabled', disabled)
  const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default']

  return (
    <TouchableOpacityBox
      paddingHorizontal="s20"
      disabled={disabled || loading}
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
