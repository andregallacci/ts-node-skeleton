import { User } from '@models/User'

test('it should be ok', () => {
  const user = new User()

  user.name = 'Sample user'

  expect(user.name).toEqual('Sample user')
})
