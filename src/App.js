import {
  Route,
  BrowserRouter as Router
} from 'react-router-dom'
import EventsPage from 'views/EventsPage'
import React from 'react'

// NOTE(adam): want to keep props in specific order for router
/* eslint-disable react/jsx-sort-props */
const App = () => (
  <Router basename='/alumni-home'>
    <Route path='/' component={EventsPage} />
  </Router>
)
/* eslint-enable react/jsx-sort-props */

export default App
