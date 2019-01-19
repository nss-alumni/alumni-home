import './bootstrap'
import { StylesProvider, ThemeProvider } from '@material-ui/styles'
import { create } from 'jss'
import { jssPreset } from '@material-ui/core/styles'
import { unregister } from './registerServiceWorker'
import App from './App'
import CssBaseline from '@material-ui/core/CssBaseline'
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import jssExpand from 'jss-expand'
import theme from './theme'

const jss = create({ plugins: [...jssPreset().plugins, jssExpand()] })

const CompleteApp = () => (
  <Fragment>
    <CssBaseline />
    <StylesProvider jss={jss}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StylesProvider>
  </Fragment>
)

ReactDOM.render(<CompleteApp />, document.getElementById('root'))

// registerServiceWorker()
unregister()
