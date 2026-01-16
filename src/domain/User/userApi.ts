import { api } from '@api'

import { UserAPI } from './userType'

const PATH = 'users'

async function getById(userId: string): Promise<UserAPI> {
  const response = await api.get<UserAPI>(`${PATH}/${userId}`)
  return response.data
}

export const userApi = {
  getById,
}
