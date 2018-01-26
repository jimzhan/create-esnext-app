import * as User from '../example'

const URL = 'https://jsonplaceholder.typicode.com'

it(`find users from ${URL}`, async () => {
  const users = await User.find()
  expect(users.length).toBeGreaterThan(3)
})

it(`find specific user from ${URL}`, async () => {
  const user = await User.findById(3)
  expect(user.id).toEqual(3)
})
