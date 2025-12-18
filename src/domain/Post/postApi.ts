import { postListMock } from './postListMock'
import { Post } from './types'

async function getList(): Promise<Post[]> {
  new Promise((resolve) => setTimeout(() => resolve(''), 1000)) // Simulating API request delay for demonstration purposes
  return postListMock
}

export const postApi = {
  getList,
}
