import React, { Component } from 'react'
import { allGoing } from '../actions/actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Going extends Component {
  componentDidMount(){
    allGoing()
  }

  render(){
    return (
      <div>
        <Link to="/"><button className="back-button">&#8249;</button></Link>
        <div className="going-notgoing-container">
          {
            this.props.goingUsers.map(item =>(
              <div className="invitee-info-2" key={"user - " + item.phone}>
              <p className="image"><img alt="user" src={item.picture.large}/></p>
              <div className="bottom-info">
                <p><span>Name:</span> {item.name.first} {item.name.last}</p>
                <p><span>Phone:</span> {item.phone}</p>
                <p><span>Email:</span>  {item.email}</p>
              </div>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps(appState){
  console.log(appState)
  return {
    goingUsers: appState.goingUsers
  }
}

export default connect(mapStateToProps)(Going)