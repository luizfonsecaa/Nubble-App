import React from 'react'
import { Alert, AlertButton } from 'react-native'

import { authCredentialsStorage } from '@services'
import {
  server,
  mateusAuthCredentials,
  mateusPostCommentAPI,
  resetInMemoryResponse,
} from '@test'
import {
  act,
  customRenderScreen,
  fireEvent,
  screen,
  waitForElementToBeRemoved,
} from 'test-utils'

import { PostCommentScreen } from '../../PostCommentScreen'

beforeAll(() => {
  server.listen()
  jest.useFakeTimers()
})

afterEach(() => {
  server.resetHandlers()
  resetInMemoryResponse()
})

afterAll(() => {
  server.close()
  resetInMemoryResponse()
  jest.useRealTimers()
})

describe('integration: PostCommentScreen', () => {
  test('when ADDING a comment the list is automatically updated', async () => {
    jest.spyOn(authCredentialsStorage, 'get').mockResolvedValue(null)

    customRenderScreen(
      <PostCommentScreen
        navigation={{} as any}
        route={{
          name: 'PostCommentScreen',
          key: 'post-comment-screen-key',
          params: { postId: 1, postAuthorId: 1 },
        }}
      />
    )
    const comment = await screen.findByText(/comentário aleatório/i)

    expect(comment).toBeTruthy()

    const inputText = screen.getByPlaceholderText(/Adicione um comentário/i)

    fireEvent.changeText(inputText, 'novo comentário')

    fireEvent.press(screen.getByText(/enviar/i))

    const newComment = await screen.findByText(/novo comentário/i)
    expect(newComment).toBeTruthy()

    const comments = await screen.findAllByTestId('post-comment-id')

    expect(comments.length).toBe(3)
  })

  test('when DELETING a comment the list is automatically updated', async () => {
    jest
      .spyOn(authCredentialsStorage, 'get')
      .mockResolvedValue(mateusAuthCredentials)

    let mockedConfirm: AlertButton['onPress']
    const mockedAlert = jest
      .spyOn(Alert, 'alert')
      .mockImplementation((title, message, buttons) => {
        if (buttons && buttons[0]) {
          mockedConfirm = buttons[0].onPress
        }
      })

    customRenderScreen(
      <PostCommentScreen
        navigation={{} as any}
        route={{
          name: 'PostCommentScreen',
          key: 'PostCommentScreen',
          params: {
            postId: 1,
            postAuthorId: 1,
          },
        }}
      />
    )

    const comment = await screen.findByText(mateusPostCommentAPI.message, {
      exact: false,
    })

    expect(comment).toBeTruthy()

    fireEvent(comment, 'longPress')

    expect(mockedAlert).toHaveBeenCalled()

    mockedConfirm && mockedConfirm()

    await waitForElementToBeRemoved(() =>
      screen.queryByText(mateusPostCommentAPI.message, {
        exact: false,
      })
    )

    const comments = await screen.findAllByTestId('post-comment-id')

    expect(comments.length).toBe(1)

    expect(await screen.findByTestId('toast-message')).toBeTruthy()

    act(() => jest.runAllTimers())

    expect(screen.queryByTestId('toast-message')).toBeNull()
  })
})
