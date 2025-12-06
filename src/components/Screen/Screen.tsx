import { KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native'

import { useAppSafeArea } from '../../hooks/useAppSafeArea'

import {
  ScrollViewContainer,
  ViewContainer,
} from './components/ScreenContainers'
import { Box } from '../Box/Box'
import { useAppTheme } from '../../hooks/useAppTheme'
import { Icon } from '../Icon/Icon'
import { Text } from '../Text/Text'

interface ScreenProps {
  children: React.ReactNode
  canGoBack?: boolean
  scrollable?: boolean
}

export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
  ...boxProps
}: ScreenProps) {
  const { top, bottom } = useAppSafeArea()
  const { colors } = useAppTheme()
  const Container = scrollable ? ScrollViewContainer : ViewContainer

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
    >
      <Container backgroundColor={colors.background}>
        <Box
          paddingHorizontal="s24"
          style={[{ paddingTop: top, paddingBottom: bottom }]}
          {...boxProps}
        >
          {canGoBack && (
            <TouchableOpacity>
              <Box mb="s24" flexDirection="row">
                <Icon name="arrowLeft" color="primary" />
                <Text preset="paragraphMedium" semiBold ml="s8">
                  Voltar
                </Text>
              </Box>
            </TouchableOpacity>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  )
}
