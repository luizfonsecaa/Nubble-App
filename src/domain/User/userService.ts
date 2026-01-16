import { userAdapter } from './userAdapter'
import { userApi } from './userApi'
import { User } from './userType'

async function getById(id: number): Promise<User> {
  const userAPI = await userApi.getById(id.toString())
  return userAdapter.toUser(userAPI)
}

export const userService = {
  getById,
}
