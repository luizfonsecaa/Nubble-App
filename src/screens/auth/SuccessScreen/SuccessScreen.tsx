import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { Text, Screen, Icon, Button } from '@components'
import { RootStackParamList } from '@routes'

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>

export function SuccessScreen({ route, navigation }: ScreenProps) {
  const { description, icon, title } = route.params

  const goBackToBegin = () => {
    navigation.goBack()
  }

  return (
    <Screen>
      <Icon {...icon} />
      <Text mt="s24" preset="headingLarge">
        {title}
      </Text>
      <Text mt="s16" preset="paragraphLarge">
        {description}
      </Text>
      <Button mt="s40" onPress={goBackToBegin} title="Voltar ao inicio" />
    </Screen>
  )
}
