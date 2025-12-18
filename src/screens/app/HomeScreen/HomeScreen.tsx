import React, { useEffect, useState } from 'react'
import {
  FlatList,
  ListRenderItemInfo,
  ViewStyle,
  StyleProp,
} from 'react-native'

import { Post, postService } from '@domain'

import { PostItem, Screen } from '@components'
import { AppTabScreenProps } from '@routes'

import { HomeHeader } from './components/HomeHeader'
export function HomeScreen({ navigation }: AppTabScreenProps<'HomeScreen'>) {
  const [postList, setPostList] = useState<Post[]>([])

  useEffect(() => {
    postService.getList().then((posts) => {
      setPostList(posts)
    })
  }, [])

  function renderItem({ item }: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />
  }

  return (
    <Screen style={$screen}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={postList}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<HomeHeader />}
        renderItem={renderItem}
      />
    </Screen>
  )
}

const $screen: StyleProp<ViewStyle> = {
  paddingTop: 0,
  paddingBottom: 0,
  paddingHorizontal: 0,
}
