/** @format */

const todos = (state = [], action) => {
  console.log(action);
  let list;
  switch (action.type) {
    case 'GET_ROOMS_LIST':
      const { list } = action;
      return { ...state, list };
    case 'GET_ROOMS_MSGS':
      const { roomMsgs } = action;
      return { ...state, roomMsgs };
    case 'GET_USERS_PER_ROOM':
      const { userPerRoom } = action;
      return { ...state, userPerRoom };
    default:
      return state;
  }
};

export default todos;
