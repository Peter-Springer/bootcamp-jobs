import { connect } from 'react-redux';
import { getUser, getAllUserData } from '../actions/index';

const getUserLocations = (userData) => {
  return userData.map((user) => user.location)
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    userData: state.userData,
    userLocations: getUserLocations(state.userData),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (user) => {
      dispatch(getUser(user));
    },
    getAllUserData: (data) => {
      dispatch(getAllUserData(data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
