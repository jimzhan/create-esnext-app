import { http } from '../utils'

// Sample API Endpoint.
const url = 'https://jsonplaceholder.typicode.com/users'

export const find = async () => {
  const { data } = await http.get(url)
  return data
}

export const update = async () => {

}
