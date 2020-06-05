import store from '@/store'

const errorHandler = (responseData, status) => {
  const message = status === 404 ? 'Entity not found.' : responseData

  store.dispatch('errors/pushError', `${message}`, { root: true })
}

export default errorHandler
