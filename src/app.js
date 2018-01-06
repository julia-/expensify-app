import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'normalize.css/normalize.css'

import './styles/styles.scss'

const ExpenseDashboardPage = () => (
  <div>
    <p>ExpenseDashboardPage</p>
  </div>
)

const AddExpensePage = () => (
  <div>
    <p>AddExpensePage</p>
  </div>
)

const EditExpensePage = () => (
  <div>
    <p>EditExpensePage</p>
  </div>
)

const HelpPage = () => (
  <div>
    <p>HelpPage</p>
  </div>
)

const NotFoundPage = () => (
  <div>
    <p>404</p>
  </div>
)

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} exact={true} />
      <Route path="/edit" component={EditExpensePage} exact={true} />
      <Route path="/help" component={HelpPage} exact={true} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'))
