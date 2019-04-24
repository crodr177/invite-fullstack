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
        <Link to="/"><button>Back</button></Link>
        {
          this.props.goingUsers.map(item =>(
            <div key={"user - " + item.phone}>
            <p><img alt="user" src={item.picture.large}/></p>
            <p>Name: {item.name.first} {item.name.last}</p>
            <p>Phone: {item.phone}</p>
            <p>Email: {item.email}</p>
            </div>
          ))
        }
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