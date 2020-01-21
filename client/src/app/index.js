import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { StrollersList, StrollersCreate, StrollersUpdate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/strollers/list" exact component={StrollersList} />
        <Route path="/stroller/create" exact component={StrollersCreate} />
        <Route
          path="/stroller/update/:id"
          exact
          component={StrollersUpdate}
        />
      </Switch>
    </Router>
    )
}

export default App;
