import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import './i18n'
import './index.css'
import App from './App.jsx'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#41F5C7',
      contrastText: '#010616'
    },
    secondary: {
      main: '#F5A623',
      contrastText: '#010616'
    },
    background: {
      default: '#010616',
      paper: '#0C162A'
    },
    text: {
      primary: 'rgba(255,255,255,0.92)',
      secondary: 'rgba(255,255,255,0.65)'
    }
  },
  typography: {
    fontFamily: '"Bricolage Grotesque","IBM Plex Mono",sans-serif',
    h1: {
      fontWeight: 800,
      fontSize: '3.5rem',
      letterSpacing: '-0.02em'
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.25rem'
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: 0
    }
  },
  shape: {
    borderRadius: 16
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true
      },
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: 32,
          height: 48,
          fontFamily: '"Bricolage Grotesque","IBM Plex Mono",sans-serif'
        },
        containedPrimary: {
          boxShadow: '0 0 30px rgba(65,245,199,0.35)'
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(12, 22, 42, 0.7)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.08)'
        }
      }
    }
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
