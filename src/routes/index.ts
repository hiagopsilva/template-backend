import { Router } from 'express'

import UserController from '@controllers/UsersController'

const routes = Router()

routes.get('/', UserController.index)

export default routes
