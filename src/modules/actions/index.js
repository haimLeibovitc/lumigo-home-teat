/** @format */

const getRoomsAction = (list) => ({
  type: 'GET_ROOMS_LIST',
  list
});

const getRoomsMsgsAction = (roomMsgs) => ({
  type: 'GET_ROOMS_MSGS',
  roomMsgs
});

const getUsersPerRoomAction = (userPerRoom) => ({
  type: 'GET_USERS_PER_ROOM',
  userPerRoom
});

// const addTodo = (newItem) => ({
//   type: 'ADD_TODO',
//   newItem
// });

const getRooms = () => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:3001/rooms');
    const result = await response.json();
    dispatch(getRoomsAction(result));
  } catch (ex) {
    console.log(ex);
  }
};

const getRoomsMsgs = (roomId) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:3001/rooms/${roomId}/text`);
    const result = await response.json();
    dispatch(getRoomsMsgsAction(result));
  } catch (ex) {
    console.log(ex);
  }
};

const getUsersPerRoom = (roomId) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:3001/rooms/${roomId}/users`);
    const result = await response.json();
    dispatch(getUsersPerRoomAction(result));
  } catch (ex) {
    console.log(ex);
  }
};

const postMsg = (roomId, text, userId) => async (dispatch) => {
  try {
    await fetch(`http://localhost:3001/rooms/${roomId}/text`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text, userId: 0 })
    });
    //dispatch(getRoomsAction(result));
  } catch (ex) {
    console.log(ex);
  }
};

export { getRooms, postMsg, getRoomsMsgs, getUsersPerRoom };
