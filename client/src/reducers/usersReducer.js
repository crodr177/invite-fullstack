const initialState = {
  name: {},
  picture: {},
  phone: '',
  email: '',
  goingUsers: [],
  notGoingUsers: []
}

export default function (state = initialState, action) {
  switch(action.type){
    case 'GET_USER':
      return {...state, name: action.name, picture: action.picture, phone: action.phone, email: action.email}
    case 'ALL_GOING': 
      return {...state, goingUsers: action.goingUsers }
    case 'ALL_NOT_GOING':
      return {...state, notGoingUsers: action.notGoingUsers}
    default:
      return state
  }
}