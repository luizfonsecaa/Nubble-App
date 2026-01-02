/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react'
import {
  FlatList,
  ListRenderItemInfo,
  ViewStyle,
  StyleProp,
  RefreshControl,
} from 'react-native'

import { Post, usePostList } from '@domain'
import { useScrollToTop } from '@react-navigation/native'

import { PostItem, Screen } from '@components'
import { useAppSafeArea } from '@hooks'
import { AppTabScreenProps } from '@routes'

import { HomeEmpty } from './components/HomeEmpty'
import { HomeHeader } from './components/HomeHeader'
export function HomeScreen({ navigation }: AppTabScreenProps<'HomeScreen'>) {
  const {
    list: postList,
    error,
    loading,
    refresh,
    fetchNextPage,
  } = usePostList()
  const { top } = useAppSafeArea()

  const FlatlistRef = React.useRef<FlatList>(null)
  useScrollToTop(FlatlistRef)

  function renderItem({ item }: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />
  }

  return (
    <Screen style={$screen}>
      <FlatList
        ref={FlatlistRef}
        showsVerticalScrollIndicator={false}
        data={postList}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={<HomeHeader />}
        onEndReached={fetchNextPage}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={refresh}
            progressViewOffset={top}
            tintColor="#000"
          />
        }
        onEndReachedThreshold={0.1}
        contentContainerStyle={{ flex: postList.length === 0 ? 1 : undefined }}
        renderItem={renderItem}
        ListEmptyComponent={
          <HomeEmpty refetch={refresh} error={error} loading={loading} />
        }
      />
    </Screen>
  )
}

const $screen: StyleProp<ViewStyle> = {
  paddingTop: 0,
  paddingBottom: 0,
  paddingHorizontal: 0,
  flex: 1,
}
