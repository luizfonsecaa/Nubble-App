import React from 'react'
import { FlatList, ListRenderItemInfo } from 'react-native'

import { PostComment, usePostCommentList } from '@domain'
import { useAuthCredentials } from '@services'

import { Box, Screen } from '@components'
import { useAppSafeArea } from '@hooks'
import { AppScreenProps } from '@routes'

import {
  PostCommentItem,
  PostCommentBottom,
  PostCommentTextMessage,
} from './components'
export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  const { postId, postAuthorId } = route.params
  const { list, fetchNextPage, hasNextPage, refresh } =
    usePostCommentList(postId)
  const { userId } = useAuthCredentials()

  const { bottom } = useAppSafeArea()

  function renderItem({ item }: ListRenderItemInfo<PostComment>) {
    return (
      <PostCommentItem
        postComment={item}
        postId={postId}
        userId={userId as number}
        postAuthorId={postAuthorId}
      />
    )
  }

  return (
    <Screen flex={1} title="Comentários" canGoBack>
      <Box flex={1} justifyContent="space-between">
        <FlatList
          showsVerticalScrollIndicator={false}
          data={list}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: bottom }}
          ListFooterComponent={
            <PostCommentBottom
              hasNextPage={hasNextPage}
              fetchNextPage={fetchNextPage}
            />
          }
        />
        <PostCommentTextMessage postId={postId} onAddComment={refresh} />
      </Box>
    </Screen>
  )
}
