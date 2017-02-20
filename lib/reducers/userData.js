const userData = (state = [], action) => {
  const { type, data } = action;
  switch (type) {
    case 'GET_USER_DATA':
      return data;
    default:
      return state;
  }
};

export default userData;
