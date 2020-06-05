export const passwordOnlyLatin = (password) => {
  const regExp = new RegExp('^([A-Za-z0-9!-_|` \u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff]*)$')
  return password && !regExp.test(password) ? 'Password should contain only latin letters.' : true
}

export const passwordMinLength = (password) => {
  return password && password.length < 3 ? 'Min password length should be at least 3 characters.' : true
}

export const passwordMaxLength = (password) => {
  return password && password.length > 20 ? 'Max password length should be not greater than 20 characters.' : true
}

export const passwordInvalidFormat = (password) => {
  return password && password.includes(' ') ? 'Password should not contain spaces' : true
}

export const passwordEquality = (password, confirmPwd) => {
  return confirmPwd === password || 'Confirmation password not equal to password.'
}