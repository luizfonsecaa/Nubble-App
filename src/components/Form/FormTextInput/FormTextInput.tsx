import React from 'react'

import { Controller, UseControllerProps, FieldValues } from 'react-hook-form'

import { TextInput, TextInputProps } from '@components'

type newTextInputProps = Omit<
  TextInputProps,
  'value' | 'onChangeText' | 'errorMessage'
>

type FormTextInputProps<T extends FieldValues> = {
  name: string
  control: any
} & newTextInputProps &
  UseControllerProps<T>

export function FormTextInput<FormType extends FieldValues>({
  control,
  name,
  ...rest
}: FormTextInputProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <TextInput
          {...rest}
          value={field.value}
          onChangeText={field.onChange}
          errorMessage={fieldState?.error?.message}
        />
      )}
    />
  )
}
