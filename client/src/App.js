import React, { Component } from 'react'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import { ConnectedRouter, routerMiddleware } from 'connected-react-router'
import { createStore, applyMiddleware, compose } from 'redux'
import { Route, Switch } from 'react-router-dom'
import queryString from "query-string";
import thunk from 'redux-thunk'
import reducers from './reducers'
import QuestionList from './components/Questions/QuestionList'
import QuestionForm from './components/Questions/QuestionForm'
import Signup from './components/Signup'
import Login from './components/Login'
import NavBar from './components/NavBar'
import './App.css'

const history = createBrowserHistory()

let composeEnhancers = compose
if (process.env.NODE_ENV === 'development') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}

const store = createStore(
  reducers(history),
  composeEnhancers(
    applyMiddleware(routerMiddleware(history), thunk)
  )
)

class App extends Component {

  componentWillMount() {
    let query = queryString.parse(history.location.search);
    if (query.token && query.userId) {
      window.localStorage.setItem("jwt", query.token);
      window.localStorage.setItem("userId", query.userId);
      history.push("/questions");
    }
  }

  render() {
    console.log(history)
    return (
      <div>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <NavBar />
            <div className='container mt-3'>
              <Switch>
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/questions' component={QuestionList} />
                <Route exact path='/questions/create' component={QuestionForm} />
              </Switch>
            </div>
          </ConnectedRouter>
        </Provider>
      </div>
    )
  }
} 

export default App
