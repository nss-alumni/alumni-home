import { MuiThemeProvider, jssPreset } from '@material-ui/core/styles'
import { create } from 'jss'
import { unregister } from './registerServiceWorker'
import App from './App'
import CssBaseline from '@material-ui/core/CssBaseline'
import JssProvider from 'react-jss/lib/JssProvider'
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import jssExpand from 'jss-expand'
import theme from './theme'

const jss = create({ plugins: [...jssPreset().plugins, jssExpand()] })

const CompleteApp = () => (
  <Fragment>
    <CssBaseline />
    <JssProvider jss={jss}>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </JssProvider>
  </Fragment>
)

ReactDOM.render(<CompleteApp />, document.getElementById('root'))

// registerServiceWorker()
unregister()
