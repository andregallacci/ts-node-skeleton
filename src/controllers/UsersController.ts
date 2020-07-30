import { User } from '@models/User'

export class UsersController {
  testFunction () {
    const user = new User()
    console.log(user)
  }
}
