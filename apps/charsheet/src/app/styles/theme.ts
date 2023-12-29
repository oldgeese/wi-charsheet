import { grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          border: '1px solid black',
        },
        head: {
          backgroundColor: grey[300],
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        head: {
          backgroundColor: grey[300],
        },
      },
    },
  }
})

