import { Snackbar, withStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'

export const ErrorSnackbarContext = React.createContext()

const defaultTimeout = 5000

const styles = ({ palette }) => ({
  root: {
    backgroundColor: palette.error.dark,
    color: palette.getContrastText(palette.error.dark),
  },
})

class ErrorSnackbar extends React.Component {
  state = {
    messages: [],
  }

  // NOTE(adam): not in state because not related to rendering
  timeout = null

  createTimeout = () => {
    if (this.state.messages.length) {
      this.timeout = setTimeout(this.removeMessage, defaultTimeout)
    }
  }

  addMessage = message =>
    this.setState(
      ({ messages }) => ({ messages: [...messages, message] }),
      this.createTimeout,
    )

  removeMessage = () => {
    if (this.timeout) clearTimeout(this.timeout)

    this.setState(
      ({ messages: [_message, ...remainingMessages] }) => ({
        messages: remainingMessages,
      }),
      this.createTimeout,
    )
  }

  contextProps = {
    addMessage: this.addMessage,
  }

  render() {
    const { children, classes } = this.props
    const { messages } = this.state

    return (
      <ErrorSnackbarContext.Provider value={this.contextProps}>
        {children}
        <Snackbar
          ContentProps={{ className: classes.root }}
          message={messages[0]}
          onClose={this.removeMessage}
          open={!!messages.length}
        />
      </ErrorSnackbarContext.Provider>
    )
  }
}

ErrorSnackbar.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
}

ErrorSnackbar.defaultProps = {
  children: null,
}

export default withStyles(styles)(ErrorSnackbar)
