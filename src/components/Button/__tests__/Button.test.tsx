import React from 'react'
import { StyleSheet } from 'react-native'

import { renderWithTheme, fireEvent } from 'test-utils'

import { theme } from '@theme'

import { Button, ButtonProps } from '../Button'

const mockedOnPress = jest.fn()
const TITLE_BUTTON = 'Test Button'

interface TestProps extends Omit<ButtonProps, 'title' | 'onPress'> {}

const renderElement = (res?: TestProps) => {
  return renderWithTheme(
    <Button title={TITLE_BUTTON} onPress={mockedOnPress} {...res} />
  )
}

describe('<Button />', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders correctly', () => {
    renderElement()
  })

  it('should call the  onPress function when pressable button is pressed ', () => {
    const { getByText } = renderElement()
    const titleElement = getByText(TITLE_BUTTON)

    fireEvent.press(titleElement)

    expect(mockedOnPress).toHaveBeenCalled()
  })

  it('should not call the onPress function when pressable button is disabled ', () => {
    const { getByText } = renderElement({ disabled: true })
    const titleElement = getByText('Test button', { exact: false })

    fireEvent.press(titleElement)

    expect(mockedOnPress).not.toHaveBeenCalled()
  })

  it('should display loading state ', () => {
    const { queryByText, getByTestId } = renderElement({ loading: true })
    const loadingIndicator = getByTestId('loading-indicator')
    const titleElement = queryByText('Test button', { exact: false })

    expect(loadingIndicator).toBeTruthy()
    expect(titleElement).toBeNull()
  })

  test('the title should be gray if button is disabled', () => {
    const { getByText } = renderElement({ disabled: true })
    const titleElement = getByText('Test button', { exact: false })

    const titleStyle = StyleSheet.flatten(titleElement.props.style)
    expect(titleStyle.color).toEqual(theme.colors.gray2)
  })
})

// const tree = toJSON()
// console.log(JSON.stringify(tree, null, 2))
