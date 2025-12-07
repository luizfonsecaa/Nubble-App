import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Button } from '../../../components/Button/Button'
import { Icon } from '../../../components/Icon/Icon'
import { Screen } from '../../../components/Screen/Screen'
import { Text } from '../../../components/Text/Text'
import { RootStackParamList } from '../../../routes/Routes'

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
