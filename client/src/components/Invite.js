import React, { Component } from 'react'
import { getUser, userGoing, userNotGoing, allGoing, allNotGoing } from '../actions/actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Invite extends Component {
  componentDidMount(){
    getUser()
    allGoing()
    allNotGoing()
  }

  going = (e) => {
    userGoing({
      name: this.props.name,
      picture: this.props.picture,
      phone: this.props.phone,
      email: this.props.email
    })
    window.location.reload();
  }

  notGoing = (e) => {
    userNotGoing({
      name: this.props.name,
      picture: this.props.picture,
      phone: this.props.phone,
      email: this.props.email
    })
    window.location.reload();
  }
  render(){
    return (
      <div>
        <Link to="/going"><p>Going: {this.props.goingUsers.length} </p></Link>
        <Link to="/notgoing"><p>Not Going: {this.props.notGoingUsers.length}</p></Link>
        <p><img alt="user" src={this.props.picture.large}/></p>
        <p>Name: {this.props.name.first} {this.props.name.last}</p>
        <p>Phone: {this.props.phone}</p>
        <p>Email: {this.props.email}</p>
        <button onClick={this.going}>Going</button>
        <button onClick={this.notGoing}>Not Going</button>
      </div>
    )
  }
}

function mapStateToProps(appState){
  console.log(appState)
  return {
    name: appState.name,
    picture: appState.picture,
    phone: appState.phone,
    email: appState.email,
    goingUsers: appState.goingUsers,
    notGoingUsers: appState.notGoingUsers
  }
}

export default connect(mapStateToProps)(Invite)