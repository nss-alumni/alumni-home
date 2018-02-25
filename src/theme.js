import * as palette from 'material-ui/colors'
import { createMuiTheme } from 'material-ui/styles'

export const colors = {
  accent: palette.blueGrey[700],
  faintText: palette.grey[600],
  neutral: palette.grey[200],
  orange: palette.orange[600],
  text: palette.grey[900],
  white: palette.blueGrey[50],
}

export default createMuiTheme({
  palette: {
    type: 'dark',
  },
})
