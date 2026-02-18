import React, { useEffect } from 'react'
import { createContext, useState } from 'react'

import { AuthCredentials, authService } from '@domain'

import { authCredentialsStorage } from '../authCredentialsStorage'
import { AuthCredentialsService } from '../authCredentialsTypes'

export const AuthCredentialsContext = createContext<AuthCredentialsService>({
  authCredentials: null,
  isLoading: true,
  saveCredentials: async () => {},
  removeCredentials: async () => {},
})

export function AuthCredentialsProvider({
  children,
}: React.PropsWithChildren<{}>) {
  const [authCredentials, setAuthCredentials] =
    useState<AuthCredentials | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  async function saveCredentials(ac: AuthCredentials): Promise<void> {
    authCredentialsStorage.set(ac)
    setAuthCredentials(ac)
  }

  async function removeCredentials(): Promise<void> {
    authService.removeToken()
    authCredentialsStorage.remove()
    setAuthCredentials(null)
  }

  async function startAuthCredentials() {
    try {
      // await new Promise(resolve => setTimeout(resolve, 2000, ''));
      const ac = await authCredentialsStorage.get()
      if (ac) {
        authService.updateToken(ac.token)
        setAuthCredentials(ac)
      }
    } catch (error) {
      // TODO: handle error
      console.error('Error starting auth credentials:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    startAuthCredentials()
  }, [])

  return (
    <AuthCredentialsContext.Provider
      value={{ authCredentials, isLoading, saveCredentials, removeCredentials }}
    >
      {children}
    </AuthCredentialsContext.Provider>
  )
}
