import { Pressable } from 'react-native'

import { Text } from '@components'

interface PostCommentBottomProps {
  fetchNextPage: () => void
  hasNextPage?: boolean
}

export function PostCommentBottom({
  fetchNextPage,
  hasNextPage,
}: PostCommentBottomProps) {
  return (
    <>
      {hasNextPage && (
        <Pressable onPress={fetchNextPage}>
          <Text color="primary" textAlign="center">
            Ver mais
          </Text>
        </Pressable>
      )}
    </>
  )
}
