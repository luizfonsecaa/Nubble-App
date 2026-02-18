import { MutationOptions } from '@infra'
import { useAuthCredentials } from '@services'
import { useMutation } from '@tanstack/react-query'

import { authService } from '../authService'

export function useAuthSignOut(options?: MutationOptions<void>) {
  const { removeCredentials } = useAuthCredentials()
  const mutation = useMutation<string, unknown, void>({
    mutationFn: authService.signOut,
    retry: false,
    onSuccess: async () => {
      await removeCredentials()
      if (options?.onSuccess) {
        options.onSuccess()
      }
    },
  })

  return {
    isLoading: mutation.isPending,
    signOut: () => mutation.mutate(),
  }
}
