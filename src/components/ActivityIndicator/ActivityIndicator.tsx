import React from 'react'
import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps,
} from 'react-native'

import { useTheme } from '@shopify/restyle'

import { ThemeColors } from '@theme'

interface Props extends Omit<ActivityIndicatorProps, 'color'> {
  color: ThemeColors
}

export function ActivityIndicator({ color, ...activityIndicatorProps }: Props) {
  const { colors } = useTheme()
  return (
    <RNActivityIndicator color={colors[color]} {...activityIndicatorProps} />
  )
}
