import { grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          border: '1px solid black',
        }
      }
    },
    MuiTableRow: {
      styleOverrides: {
        head: {
          backgroundColor: grey[300],
        }
      }
    }
  }
})

