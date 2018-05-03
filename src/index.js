import './index.css'
import 'rxjs'
import { unregister } from './registerServiceWorker'
import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(<App />, document.getElementById('root'))
// registerServiceWorker()
unregister()
