import React from 'react'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import { ConnectedRouter, routerMiddleware } from 'connected-react-router'
import { createStore, applyMiddleware, compose } from 'redux'
import { Route, Switch } from 'react-router-dom'
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

const App = () => (
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

export default App
