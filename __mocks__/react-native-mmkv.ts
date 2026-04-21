let storage: Record<string, any> = {}

export const createMMKV = jest.fn().mockReturnValue({
  set: (key: string, value: any) => {
    storage[key] = value
  },
  getString: (key: string) => {
    return typeof storage[key] === 'string' ? storage[key] : null
  },
  removeItem: (key: string) => {
    delete storage[key]
  },
  clearAll: () => {
    storage = {}
  },
})
