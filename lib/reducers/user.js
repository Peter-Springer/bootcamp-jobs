const user = (state = null, action) => {
  const { type, data } = action;
  switch (type) {
    case 'GET_USER':
      return data;
    default:
      return state;
  }
};

export default user;
