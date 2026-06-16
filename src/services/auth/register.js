import { api } from '../api/axiosClient'

export const registerMarketer = (data) => {
  return api.post('/api/register', data)
}

export const registerMerchant = (data) => {
  return api.post('/api/register', data)
}
