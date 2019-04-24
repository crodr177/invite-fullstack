import store from '../store'
import axios from 'axios'

export function getUser(){
  axios.get('https://randomuser.me/api/').then(resp => {
    const userData = resp.data
    store.dispatch({
      type: 'GET_USER',
      name: userData.results[0].name,
      picture: userData.results[0].picture,
      phone: userData.results[0].phone,
      email: userData.results[0].email
    })
  })
}

export function userGoing(person) {
  axios.post('/api/going', person)
}

export function userNotGoing(person) {
  axios.post('/api/notgoing', person)
}

export function allGoing(){
  axios.get('/api/going').then(resp => {
    console.log(resp.data)
    const userData = resp.data.going.map(item =>(
      item.user
    ))
    store.dispatch({
      type: 'ALL_GOING',
      goingUsers: userData
    })
    console.log(userData)
  })
}

export function allNotGoing(){
  axios.get('/api/notgoing').then(resp => {
    console.log(resp.data)
    const userData = resp.data.notgoing.map(item =>(
      item.user
    ))
    store.dispatch({
      type: 'ALL_NOT_GOING',
      notGoingUsers: userData
    })
    console.log(userData)
  })
}