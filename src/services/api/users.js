import api from './api'

export function fetchUserList(params) {
  return api.get('users', { params })
}

export function fetchUser ({ userId, ...params }) {
  return api.get(`users/${userId}`, { params })
}

export function createUser (userDara) {
  return api.post('users', userDara)
}

export function updateUser (userDara) {
  return api.put(`users/${userDara.id}`, userDara)
}

export function deleteUser (userId) {
  return api.delete(`users/${userId}`)
}
