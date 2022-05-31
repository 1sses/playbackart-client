import { authClient } from '@/api/clients'

const endpoints = {
  login: '/login',
  register: '/register',
  validate: '/validate',
  logout: '/logout'
}

export class AuthAPI {
  static async register (email, password) {
    const response = await authClient.post(endpoints.register, {
      email,
      password
    })
    return response.data
  }

  static async login (email, password) {
    const response = await authClient.post(endpoints.login, {
      email,
      password
    })
    return response.data
  }

  static async validate () {
    const response = await authClient.get(endpoints.validate)
    return response.data
  }

  static async logout () {
    const response = await authClient.get(endpoints.logout)
    return response.data
  }
}