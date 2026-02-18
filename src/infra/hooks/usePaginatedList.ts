import { useInfiniteQuery } from '@tanstack/react-query'
import { Page } from '@types'

export interface usePaginatedListResult<TData> {
  list: TData[]
  isError: boolean | null
  isLoading: boolean
  hasNextPage: boolean
  refresh: () => void
  fetchNextPage: () => void
}

export function usePaginatedList<Data>(
  queryKey: readonly unknown[],
  getList: (page: number) => Promise<Page<Data>>
): usePaginatedListResult<Data> {
  const query = useInfiniteQuery({
    queryKey,
    queryFn: ({ pageParam }) => getList(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.meta.hasNextPage) {
        return lastPage.meta.currentPage + 1
      }
      return undefined
    },
    staleTime: 1000 * 60 * 5, // 5 minuto
  })

  const list = query.data?.pages.flatMap((page) => page.data) || []

  return {
    list,
    isError: query.isError,
    isLoading: query.isLoading,
    refresh: query.refetch,
    fetchNextPage: query.fetchNextPage,
    hasNextPage: !!query.hasNextPage,
  }
}
