import { Post, postService } from '@domain'
import { usePaginatedList, QueryKeys } from '@infra'

export function usePostList() {
  return usePaginatedList<Post>([QueryKeys.PostList], postService.getList)
}
