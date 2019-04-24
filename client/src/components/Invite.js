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
      <div id="invite-container">
        <div id="going-notgoing">
          <p><Link to="/going">Going: {this.props.goingUsers.length}</Link></p>
          <p><Link to="/notgoing">Not Going: {this.props.notGoingUsers.length}</Link></p>
        </div>
        <div className="invitee-info">
          <p className="image"><img alt="user" src={this.props.picture.large}/></p>
          <div className="bottom-info">
            <p><span>Name:</span> {this.props.name.first} {this.props.name.last}</p>
            <p><span>Phone:</span> {this.props.phone}</p>
            <p><span>Email:</span> {this.props.email}</p>
          </div>
        </div>
        <div id="invite-buttons">
          <button className="going" onClick={this.going}>&#10003;</button>
          <button className="notgoing" onClick={this.notGoing}>X</button>
        </div>
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