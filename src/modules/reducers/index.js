/** @format */

import { combineReducers } from 'redux';
import chat from './Chat';

const mapStateToProps = (state) => {
  // const { todos } = state;
  // const { list } = todos;
  // return { list };
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  getRooms: () => dispatch(getRooms())
  // addTodo: (data) => dispatch(addTodo(data))
});

export default combineReducers({
  chat
});
