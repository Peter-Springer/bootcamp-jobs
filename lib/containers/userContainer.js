import { connect } from 'react-redux';
import { getUser } from '../actions/index';

const mapStateToProps = (state) => {
  return { user: state.user };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (user) => {
      dispatch(getUser(user));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
