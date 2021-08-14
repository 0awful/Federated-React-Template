import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import './app.styles.scss'

Amplify.configure(awsconfig)
const App = () => {
  return (
    <BrowserRouter history={history} basename='/'>
      <Switch>
        <Route path='/stub'>
          <div />
        </Route>
        <Route>
          <Redirect to='/stub' />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
