const types = {
  GET_USER: 'GET_USER',
  GET_USER_DATA: 'GET_USER_DATA'
};

export const getUser = (data) => {
  return { type: types.GET_USER, data: data };
};

export const getAllUserData = (data) => {
  return { type: types.GET_USER_DATA, data: data };
};
