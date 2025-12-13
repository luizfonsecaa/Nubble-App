import React from 'react'

import { Button, Screen, Text } from '@components'
import { AppTabScreenProps } from '@routes'

export function HomeScreen({ navigation }: AppTabScreenProps<'HomeScreen'>) {
  return (
    <Screen>
      <Text preset="headingLarge"> Home Screen</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('SettingsScreen')}
      />
      <Button
        mt="s12"
        title="Go to Favorite"
        onPress={() => navigation.navigate('FavoriteScreen')}
      />
    </Screen>
  )
}
