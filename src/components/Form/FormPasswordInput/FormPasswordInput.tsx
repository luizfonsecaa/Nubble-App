import React from 'react'

import { Controller, UseControllerProps, FieldValues } from 'react-hook-form'

import { PasswordInput, PasswordInputProps } from '@components'

type newPasswordInputProps = Omit<
  PasswordInputProps,
  'value' | 'onChangeText' | 'errorMessage'
>

type FormPasswordInputProps<T extends FieldValues> = {
  name: string
  control: any
} & newPasswordInputProps &
  UseControllerProps<T>

export function FormPasswordInput<FormType extends FieldValues>({
  control,
  name,
  ...rest
}: FormPasswordInputProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <PasswordInput
          {...rest}
          value={field.value}
          onChangeText={field.onChange}
          errorMessage={fieldState?.error?.message}
        />
      )}
    />
  )
}
