import axios from 'axios'

const root = 'https://jsonplaceholder.typicode.com/users'

export const find = async () => {
  const response = await axios.get(`${root}/`)
  return response.data
}

export const findById = async (id) => {
  const response = await axios.get(`${root}/${id}`)
  return response.data
}

export const create = async () => {
  axios.post(root, {})
}

export const update = async () => {
  axios.put(root, {})
}

export const remove = async () => {
  axios.delete(root, {})
}
