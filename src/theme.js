import { createMuiTheme } from '@material-ui/core/styles'
import deepOrange from '@material-ui/core/colors/deepOrange'

export default createMuiTheme({
  // NOTE(adam): needed suppress typography warning
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: deepOrange,
  },
})
