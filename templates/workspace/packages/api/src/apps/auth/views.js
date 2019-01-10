
export const login = async (request, h) => {
  return h.response({ data: 'token' })
}

export const logout = async (request, h) => {
  return h.response({ data: 'logout' })
}