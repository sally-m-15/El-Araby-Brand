import { api } from '../api/axiosClient'

export const forgotPassword = (data) => {
  return api.post('/api/forgot-password', data)
}