import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Confirm from './components/Confirm'
import Reset from './components/Reset'
import './app.styles.scss'

const App = () => {
  return (
    <BrowserRouter history={history} basename='/login'>
      <Switch>
        <Route path='/sign-in'>
          <SignIn />
        </Route>
        <Route path='/sign-up'>
          <SignUp />
        </Route>
        <Route path='/confirm'>
          <Confirm />
        </Route>
        <Route path='/reset'>
          <Reset />
        </Route>
        <Route>
          <Redirect to='/sign-up' />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
