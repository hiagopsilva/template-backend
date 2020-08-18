// import { User } from '@models/User'

class UsersController {
  index (request, response) {
    // const user = new User()

    return response.json({ message: 'Welcome to Template Backend.   by: Hiago Prates @hiagopsilva' })
  }
}

export default new UsersController()
