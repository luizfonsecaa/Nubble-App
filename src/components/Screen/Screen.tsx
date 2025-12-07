import { KeyboardAvoidingView, Platform } from 'react-native'

import { useAppSafeArea } from '../../hooks/useAppSafeArea'

import {
  ScrollViewContainer,
  ViewContainer,
} from './components/ScreenContainers'
import { Box, TouchableOpacityBox } from '../Box/Box'
import { useAppTheme } from '../../hooks/useAppTheme'
import { Icon } from '../Icon/Icon'
import { Text } from '../Text/Text'
import { useNavigation } from '@react-navigation/native'

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
  const navigatin = useNavigation()
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
            <TouchableOpacityBox
              mb="s24"
              flexDirection="row"
              onPress={navigatin.goBack}
            >
              <Icon name="arrowLeft" color="primary" />
              <Text preset="paragraphMedium" semiBold ml="s8">
                Voltar
              </Text>
            </TouchableOpacityBox>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  )
}
