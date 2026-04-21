import { BASE_URL, PageAPI } from '@api'
import { POST_COMMENT_PATH, PostCommentAPI } from '@domain'
import { cloneDeep } from 'lodash'
import { rest } from 'msw'

import { mockedData } from './mocks'

const FULL_URL = `${BASE_URL}/${POST_COMMENT_PATH}`
let inMemoryResponse = cloneDeep(mockedData.mockedPostCommentResponse)

export function resetInMemoryResponse() {
  inMemoryResponse = cloneDeep(mockedData.mockedPostCommentResponse)
}

export const postCommentHandler = [
  rest.get(FULL_URL, async (req, res, ctx) => {
    const response: PageAPI<PostCommentAPI> = inMemoryResponse
    return res(ctx.status(200), ctx.json(response))
  }),

  rest.post(FULL_URL, async (req, res, ctx) => {
    const body = await req.json()

    const newPostCommentAPI: PostCommentAPI = {
      ...mockedData.postCommentAPI,
      id: 999,
      post_id: body.post_id,
      message: body.message,
    }
    inMemoryResponse.data.unshift(newPostCommentAPI)
    inMemoryResponse.meta = {
      ...inMemoryResponse.meta,
      total: inMemoryResponse.meta.total + 1,
    }
    return res(ctx.status(201), ctx.json(newPostCommentAPI))
  }),

  rest.delete(`${FULL_URL}/:postCommentId`, async (req, res, ctx) => {
    const { postCommentId } = req.params

    // Filtra corretamente removendo o comentário
    inMemoryResponse.data = inMemoryResponse.data.filter(
      (comment) => comment.id !== Number(postCommentId)
    )

    inMemoryResponse.meta = {
      ...inMemoryResponse.meta,
      total: inMemoryResponse.meta.total - 1,
    }

    return res(ctx.status(200), ctx.json({ message: 'sucesso' }))
  }),
]
