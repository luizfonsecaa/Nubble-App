import React, { useState } from 'react'

import { Icon } from '../Icon/Icon'
import { TextInput, TextInputProps } from '../TextInput/TextInput'

export type PasswordInputProps = Omit<
  TextInputProps,
  'rightComponent' | 'secureTextEntry'
>

export function PasswordInput({ ...rest }: PasswordInputProps) {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true)
  return (
    <TextInput
      secureTextEntry={isSecureTextEntry}
      {...rest}
      rightComponent={
        <Icon
          onPress={() => setIsSecureTextEntry((value) => !value)}
          name={isSecureTextEntry ? 'eyeOn' : 'eyeOff'}
          color="gray2"
        />
      }
      BoxProps={{ mb: 's10' }}
    />
  )
}
