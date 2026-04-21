import { waitFor, renderHookWithTheme } from 'test-utils'

import { authService } from '../../authService'
import { useAuthSignIn } from '../useAuthSingIn'

import { mockedAuthCredentials } from './mockedData/mocks'
jest.useFakeTimers()
const mockSaveCredentials = jest.fn()

jest.mock('@services', () => {
  return {
    ...jest.requireActual('@services'),
    useAuthCredentials: () => ({
      saveCredentials: mockSaveCredentials,
      authCredentials: null,
      removeCredentials: jest.fn(),
      isLoading: false,
    }),
  }
})

describe('useAuthSignIn', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('saves credentials if the sign-in successfully', async () => {
    jest.spyOn(authService, 'signIn').mockResolvedValue(mockedAuthCredentials)

    const { result } = renderHookWithTheme(() => useAuthSignIn())

    result.current.signIn({
      email: 'mariajulia@coffstack.com',
      password: '123',
    })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))
    expect(mockSaveCredentials).toHaveBeenCalledWith(mockedAuthCredentials)
    expect(mockSaveCredentials).toHaveBeenCalledTimes(1)
  })

  it('calls the onError function with a message if sign-in fails', async () => {
    const mockOnError = jest.fn()
    const errorMessage = 'email ou senha inválido'

    jest.spyOn(authService, 'signIn').mockRejectedValue(new Error(errorMessage))

    const { result } = renderHookWithTheme(() =>
      useAuthSignIn({ onError: mockOnError })
    )

    result.current.signIn({
      email: 'invalid@email.com',
      password: 'wrong',
    })

    await waitFor(() => expect(mockOnError).toHaveBeenCalled())

    expect(mockOnError).toHaveBeenCalledWith(errorMessage)
    expect(result.current.isSuccess).toBe(false)
    expect(mockSaveCredentials).not.toHaveBeenCalled()
  })
})
