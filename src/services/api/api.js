import axios from 'axios'

import { isErrorStatus, errorHandler } from './utils'

const isSecure = process.env.VUE_APP_SECURE === 'true'
const domain = process.env.VUE_APP_DOMAIN

const service = axios.create({
  baseURL: `http${isSecure ? 's' : ''}://${domain}/api/`,
  timeout: 50 * 1000,
  headers: {
    "Content-Type": "application/json; charset=UTF-8"
  }
})

service.interceptors.response.use(
  response => {
    const { data, status } = response

    if (isErrorStatus(status)) {
      errorHandler(data, status)
    }

    return data
  },
  error => {
    const { data, status } = error.response

    errorHandler(data, status)
  }
)

export default service
