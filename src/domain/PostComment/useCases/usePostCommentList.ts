import { PostComment } from '@domain'
import { usePaginatedList, QueryKeys } from '@infra'

import { postCommentService } from '../postCommentService'

export function usePostCommentList(postId: number) {
  function getList(page: number) {
    return postCommentService.getList(postId, page)
  }
  return usePaginatedList<PostComment>(
    [QueryKeys.PostCommentList, postId],
    getList
  )
}
