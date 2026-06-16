import { api } from '../api/axiosClient'

export const loginMarketer = (data) => {
  return api.post('/api/login', data)
}

export const loginMerchant = (data) => {
  return api.post('/api/login', data)
}
