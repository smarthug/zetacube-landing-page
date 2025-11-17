import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'

function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const navLinks = [
    { label: 'Products', to: '/products' },
    { label: 'Providers', to: '/providers' },
    { label: 'Documentation', to: '/documentation' },
    { label: 'Company', to: '/company' }
  ]

  const toggleDrawer = () => {
    setMobileOpen((prev) => !prev)
  }

  const drawerContent = (
    <Box
      sx={{
        width: 280,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        p: 3,
        backgroundColor: '#0C162A'
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
        <Typography
          component={RouterLink}
          to="/"
          sx={{
            textDecoration: 'none',
            fontFamily: '"Bricolage Grotesque", sans-serif',
            fontSize: 18,
            fontWeight: 700,
            color: '#fff'
          }}
          onClick={() => setMobileOpen(false)}
        >
          ZetaCube
        </Typography>
        <IconButton onClick={toggleDrawer} aria-label="Close navigation" sx={{ color: '#fff' }}>
          <CloseRoundedIcon />
        </IconButton>
      </Stack>
      <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', mb: 2 }} />
      <List sx={{ flex: 1 }}>
        {navLinks.map((link) => (
          <ListItem disablePadding key={link.label}>
            <ListItemButton
              component={RouterLink}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              sx={{
                borderRadius: 2,
                '&:hover': { backgroundColor: 'rgba(255,255,255,0.06)' }
              }}
            >
              <ListItemText
                primary={link.label}
                primaryTypographyProps={{
                  fontFamily: '"Bricolage Grotesque", sans-serif',
                  fontWeight: 600,
                  color: '#fff'
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Button
        component={RouterLink}
        to="/contact"
        variant="contained"
        color="primary"
        fullWidth
        onClick={() => setMobileOpen(false)}
      >
        Request Access
      </Button>
    </Box>
  )

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: 'rgba(12, 22, 42, 0.7)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.08)'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            minHeight: 72,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 3
          }}
        >
          <Typography
            component={RouterLink}
            to="/"
            sx={{
              textDecoration: 'none',
              fontFamily: '"Bricolage Grotesque", sans-serif',
              fontSize: 18,
              fontWeight: 700,
              color: '#fff'
            }}
          >
            ZetaCube
          </Typography>
          <Stack
            direction="row"
            spacing={4}
            sx={{
              flex: 1,
              justifyContent: 'center',
              display: { xs: 'none', md: 'flex' }
            }}
          >
            {navLinks.map((link) => (
              <Button
                key={link.label}
                component={RouterLink}
                to={link.to}
                variant="text"
                color="inherit"
                sx={{
                  color: 'var(--muted)',
                  fontWeight: 500,
                  fontSize: 15,
                  '&:hover': { color: 'var(--accent)' }
                }}
              >
                {link.label}
              </Button>
            ))}
          </Stack>
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Button
              component={RouterLink}
              to="/contact"
              variant="contained"
              color="primary"
              sx={{ display: { xs: 'none', md: 'inline-flex' } }}
            >
              Request Access
            </Button>
            {isMobile && (
              <IconButton onClick={toggleDrawer} aria-label="Open navigation" sx={{ color: '#fff' }}>
                <MenuRoundedIcon />
              </IconButton>
            )}
          </Stack>
        </Toolbar>
      </Container>
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={toggleDrawer}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            backgroundColor: '#0C162A',
            color: '#fff'
          }
        }}
      >
        {drawerContent}
      </Drawer>
    </AppBar>
  )
}

export default Navigation
