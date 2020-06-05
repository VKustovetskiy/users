export const required = value => value.length !== 0 || 'Required.'

export const minCharCount = value => value.length >= 3 || 'Name must be at least 3 characters.'

export const maxCharCount = value => value.length <= 20 || 'Name must be not greater than 20 characters.'
