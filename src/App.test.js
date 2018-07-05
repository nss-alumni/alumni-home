import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})
