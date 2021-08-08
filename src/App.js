import React from 'lib-app/react'
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'lib-app/react-router-dom'
import Amplify from 'lib-app/aws-amplify'
import awsconfig from './aws-exports'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Confirm from './components/Confirm'
import Reset from './components/Reset'
import './app.styles.scss'

Amplify.configure(awsconfig)
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
