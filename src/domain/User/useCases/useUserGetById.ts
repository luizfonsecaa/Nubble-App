import { QueryKeys } from '@infra'
import { useQuery } from '@tanstack/react-query'

import { userService } from '../userService'
export function useUserGetById(id: number) {
  const { data, isLoading, isError } = useQuery({
    queryKey: [QueryKeys.UserGetById, id],
    queryFn: () => userService.getById(id),
    staleTime: 5 * 60 * 1000, // 5 minutes
  })

  return {
    user: data,
    isLoading,
    isError,
  }
}
