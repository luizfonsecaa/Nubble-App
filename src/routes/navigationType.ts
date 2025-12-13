import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { AppStackParamList } from './AppStack'
import { AppTabBottomTabParamList } from './AppTabNavigator'
import { RootStackParamList } from './AuthStack'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type AuthScreenProps<RouteName extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, RouteName>

export type AppScreenProps<RouteName extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, RouteName>

export type AppTabScreenProps<
  RouteName extends keyof AppTabBottomTabParamList
> = CompositeScreenProps<
  BottomTabScreenProps<AppTabBottomTabParamList, RouteName>,
  NativeStackScreenProps<AppStackParamList, 'AppTabNavigator'>
>
