import { Snackbar, withStyles } from '@material-ui/core'
import {
  clearMessage,
  getSnackbarErrorMessage,
} from 'data/snackbarErrorMessage'
import { connect } from 'react-redux'

const styles = ({ palette }) => ({
  root: {
    backgroundColor: palette.error.dark,
    color: palette.getContrastText(palette.error.dark),
  },
})

const mapStateToProps = (state, props) => ({
  ContentProps: { className: props.classes.root },
  message: getSnackbarErrorMessage(state),
  open: !!getSnackbarErrorMessage(state),
})

const mapDispatchToProps = {
  onClose: clearMessage,
}

// NOTE(adam): must connect first for classes to exist in mapStateToProps
const ErrorConnectedSnackbar = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Snackbar)
export default withStyles(styles)(ErrorConnectedSnackbar)
