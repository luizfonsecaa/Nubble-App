import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
} from 'react-native'
import { Box, BoxProps } from '../Box/Box'
import { $fontFamily, $fontSizes, Text } from '../Text/Text'
import { useAppTheme } from '../../hooks/useAppTheme'
import { useRef } from 'react'

export interface TextInputProps extends RNTextInputProps {
  label: string
  errorMessage?: string
  rightComponent?: React.ReactElement
  BoxProps?: BoxProps
}
export function TextInput({
  label,
  errorMessage,
  rightComponent,
  BoxProps,
  ...rnTextInputProps
}: TextInputProps) {
  const { colors } = useAppTheme()
  const inputRef = useRef<RNTextInput>(null)

  function focusInput() {
    inputRef.current?.focus()
  }

  const $textInputContainer: BoxProps = {
    borderWidth: errorMessage ? 2 : 1,
    borderColor: errorMessage ? 'error' : 'gray4',
    padding: 's16',
    borderRadius: 's12',
  }

  return (
    <Box {...BoxProps}>
      <Pressable onPress={focusInput}>
        <Text mb="s4" preset="paragraphMedium">
          {label}
        </Text>
        <Box {...$textInputContainer} flexDirection="row">
          <RNTextInput
            ref={inputRef}
            placeholderTextColor={colors.gray2}
            style={$textInputStyle}
            {...rnTextInputProps}
          />
          {rightComponent && (
            <Box ml="s16" justifyContent="center">
              {rightComponent}
            </Box>
          )}
        </Box>
        {errorMessage ? (
          <Text ml="s4" preset="paragraphSmall" bold color="error">
            {errorMessage}
          </Text>
        ) : null}
      </Pressable>
    </Box>
  )
}

const $textInputStyle: TextStyle = {
  flexGrow: 1,
  flexShrink: 1,
  padding: 0,
  fontFamily: $fontFamily.regular,
  ...$fontSizes.paragraphMedium,
}
