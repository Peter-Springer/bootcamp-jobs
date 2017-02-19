const types = {
  GET_USER: 'GET_USER'
}

export const getUser = (data) => {
  return { type: types.GET_USER, data: data }
}
