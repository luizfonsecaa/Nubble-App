import {
  BottomTabBarProps,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs'

import {
  Icon,
  Text,
  TextProps,
  Box,
  TouchableOpacityBox,
  TouchableOpacityBoxProps,
  BoxProps,
} from '@components'
import { useAppSafeArea } from '@hooks'
import { $shadowProps } from '@theme'

import { AppTabBottomTabParamList } from './AppTabNavigator'
import { ScreenToProps, mapScreenToProps } from './mapScreenToProps'

type RenderButtonBarProps = {
  isFocused: boolean
  tabItem: ScreenToProps
  onPress: () => void
  onLongPress: () => void
  options: BottomTabNavigationOptions
}

export function AppTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const { bottom } = useAppSafeArea()

  function renderButtonBar({
    isFocused,
    tabItem,
    options,
    onPress,
    onLongPress,
  }: RenderButtonBarProps) {
    return (
      <TouchableOpacityBox
        {...$itemWrapper}
        key={tabItem.label}
        accessibilityState={isFocused ? { selected: true } : {}}
        accessibilityLabel={options.tabBarAccessibilityLabel}
        testID={options?.tabBarButtonTestID}
        onPress={onPress}
        onLongPress={onLongPress}
      >
        <Icon
          color={isFocused ? 'primary' : 'backgroundContrast'}
          name={isFocused ? tabItem.icon.focused : tabItem.icon.unfocused}
        />
        <Text {...$labe} color={isFocused ? 'primary' : 'backgroundContrast'}>
          {tabItem.label}
        </Text>
      </TouchableOpacityBox>
    )
  }

  return (
    <Box {...$BoxWrapper} style={[{ paddingBottom: bottom }, $shadowProps]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]

        const isFocused = state.index === index

        const tabItem =
          mapScreenToProps[route.name as keyof AppTabBottomTabParamList]

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params)
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          })
        }

        return renderButtonBar({
          isFocused,
          tabItem,
          options,
          onPress,
          onLongPress,
        })
      })}
    </Box>
  )
}

const $labe: TextProps = {
  preset: 'paragraphCaption',
  marginTop: 's4',
  semiBold: true,
}

const $itemWrapper: TouchableOpacityBoxProps = {
  activeOpacity: 1,
  alignItems: 'center',
  flex: 1,
  accessibilityRole: 'button',
}

const $BoxWrapper: BoxProps = {
  flexDirection: 'row',
  paddingTop: 's12',
  backgroundColor: 'background',
}
