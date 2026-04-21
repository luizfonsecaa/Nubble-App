import React from 'react'

import { fireEvent, renderWithTheme } from 'test-utils'

import { PasswordInput } from '../PasswordInput'

describe('PasswordInput', () => {
  it('should starts with hidden password', () => {
    const { getByPlaceholderText } = renderWithTheme(
      <PasswordInput label="Label" placeholder="Enter your password" />
    )
    const inputElement = getByPlaceholderText('Enter your password')
    expect(inputElement.props.secureTextEntry).toBeTruthy()
  })

  it('should pressing the eye icon, it should show the password, and change to the eye off icon', () => {
    const { getByTestId, getByPlaceholderText } = renderWithTheme(
      <PasswordInput label="Label" placeholder="Enter your password" />
    )
    const inputElement = getByPlaceholderText('Enter your password')

    expect(getByTestId('eyeOn')).toBeTruthy()
    fireEvent.press(getByTestId('eyeOn'))
    expect(inputElement.props.secureTextEntry).toBeFalsy()
    expect(getByTestId('eyeOff')).toBeTruthy()
  })
})
