import { Link as RouterLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

function Footer() {
  const { t } = useTranslation()
  const footerLinks = [
    { label: t('footer.links.terms'), to: '/terms' },
    { label: t('footer.links.privacy'), to: '/privacy' },
    { label: t('footer.links.contact'), to: '/contact' }
  ]

  return (
    <Box component="footer" className="footer">
      <Box className="footer-content">
        <Stack spacing={1} className="footer-info">
          <Typography component="strong">{t('nav.logo')} GPU</Typography>
          <Typography variant="body2" className="text-muted">
            {t('footer.tagline')}
          </Typography>
        </Stack>
        <Stack direction="row" spacing={3} className="footer-links">
          {footerLinks.map((link) => (
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
          {t('footer.copyright')}
        </Typography>
      </Box>
    </Box>
  )
}

export default Footer
