import { Snackbar, withStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'

export const ErrorSnackbarContext = React.createContext()

const defaultTimeout = 5000

const styles = ({ palette }) => ({
  root: {
    backgroundColor: palette.error.dark,
    color: palette.getContrastText(palette.error.dark),
  },
})

const ErrorSnackbar = ({ children, classes }) => {
  const [messages, setMessages] = useState([])

  const addMessage = message => setMessages([...messages, message])
  const removeMessage = () => {
    const [, ...remainingMessages] = messages
    setMessages(remainingMessages)
  }

  useEffect(
    () => {
      if (messages.length) {
        const timeout = setTimeout(removeMessage, defaultTimeout)
        return () => clearTimeout(timeout)
      }
    },
    [messages],
  )

  return (
    <ErrorSnackbarContext.Provider value={{ addMessage }}>
      {children}
      <Snackbar
        ContentProps={{ className: classes.root }}
        message={messages[0]}
        onClose={removeMessage}
        open={!!messages.length}
      />
    </ErrorSnackbarContext.Provider>
  )
}

ErrorSnackbar.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
}

ErrorSnackbar.defaultProps = {
  children: null,
}

export default withStyles(styles)(ErrorSnackbar)
