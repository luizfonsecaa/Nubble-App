import React from 'react'
import { Dimensions, Image } from 'react-native'

import { Post } from '@domain'

import { Box } from '@components'

type Props = Pick<Post, 'imageURL'>

export function PostImage({ imageURL }: Props) {
  return (
    <Box mb="s16" flexDirection="row" alignItems="center">
      <Image
        source={{ uri: imageURL }}
        resizeMode="cover"
        style={{
          width: Dimensions.get('screen').width,
          height: 300,
          marginHorizontal: -24,
        }}
      />
    </Box>
  )
}
