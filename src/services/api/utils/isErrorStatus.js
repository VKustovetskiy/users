const isErrorStatus = (status) => {
  return status >= 400 && status <= 503
}

export default isErrorStatus
