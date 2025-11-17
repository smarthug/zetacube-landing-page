import { Link as RouterLink } from 'react-router-dom'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

function Footer() {
  return (
    <Box component="footer" className="footer">
      <Box className="footer-content">
        <Stack spacing={1} className="footer-info">
          <Typography component="strong">ZetaCube GPU</Typography>
          <Typography variant="body2" className="text-muted">
            Distributed GPU compute for everyone
          </Typography>
        </Stack>
        <Stack direction="row" spacing={3} className="footer-links">
          {[
            { label: 'Terms', to: '/terms' },
            { label: 'Privacy', to: '/privacy' },
            { label: 'Contact', to: '/contact' }
          ].map((link) => (
            <Link
              key={link.to}
              component={RouterLink}
              to={link.to}
              underline="none"
              className="text-muted"
              sx={{ fontWeight: 500 }}
            >
              {link.label}
            </Link>
          ))}
        </Stack>
      </Box>
      <Box className="footer-copyright">
        <Typography variant="body2" className="text-muted">
          © 2024 ZetaCube. All rights reserved.
        </Typography>
      </Box>
    </Box>
  )
}

export default Footer
