import React, { Component } from 'react'
import { allNotGoing } from '../actions/actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class NotGoing extends Component {
  componentDidMount(){
    allNotGoing()
  }

  render(){
    return (
      <div>
        <Link to="/"><button>Back</button></Link>
        {
          this.props.notGoingUsers.map(item =>(
            <div key={"key -" + item.phone}>
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
    notGoingUsers: appState.notGoingUsers
  }
}

export default connect(mapStateToProps)(NotGoing)