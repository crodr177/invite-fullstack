import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import store from '../store'
import Invite from './Invite'
import Going from './Going'
import NotGoing from './NotGoing'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div id="main-container">
            <div id="pages">
              <Route exact path="/" component={Invite}/>
              <Route exact path="/going" component={Going}/>
              <Route exact path="/notgoing" component={NotGoing}/>
            </div>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
