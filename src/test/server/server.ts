import { setupServer } from 'msw/node'

import { postCommentHandler } from './postComment/postCommentHandler'

export const server = setupServer(...postCommentHandler)
