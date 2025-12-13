import { IconProps } from '@components'
import { AppTabBottomTabParamList } from '@routes'

export type ScreenToProps = {
  label: string
  icon: {
    focused: IconProps['name']
    unfocused: IconProps['name']
  }
}

export const mapScreenToProps: Record<
  keyof AppTabBottomTabParamList,
  ScreenToProps
> = {
  HomeScreen: {
    label: 'Inicio',
    icon: {
      focused: 'homeFill',
      unfocused: 'home',
    },
  },
  NewPostScreen: {
    label: 'Novo Post',
    icon: {
      focused: 'newPost',
      unfocused: 'newPost',
    },
  },
  FavoriteScreen: {
    label: 'Favoritos',
    icon: {
      focused: 'bookmark',
      unfocused: 'bookmark',
    },
  },
  MyProfileScreen: {
    label: 'Meu Perfil',
    icon: {
      focused: 'profileFill',
      unfocused: 'profile',
    },
  },
}
