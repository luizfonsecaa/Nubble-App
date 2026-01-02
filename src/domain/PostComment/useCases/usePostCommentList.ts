import { PostComment } from '@domain'
import { usePaginatedList } from '@infra'

import { postCommentService } from '../postCommentService'

export function usePostCommentList(postId: number) {
  function getList(page: number) {
    return postCommentService.getList(postId, page)
  }
  return usePaginatedList<PostComment>(getList)
}
