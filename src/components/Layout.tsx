import { useState } from 'react';
import {
  Box, AppBar, Toolbar, useScrollTrigger, Container, Typography, Divider,
  IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Stack,
} from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DownloadIcon from '@mui/icons-material/Download';
import { Link } from 'react-scroll';

const RESUME_URL = 'https://github.com/Skeletoskull/portfolio/raw/gh-pages/ahmad_jamal_khan.pdf';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });

  const navigation = [
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Education', to: 'education' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  const socialLinks = [
    { icon: <GitHubIcon />, href: 'https://github.com/Skeletoskull', label: 'GitHub' },
    { icon: <LinkedInIcon />, href: 'https://www.linkedin.com/in/ahmad-jamal-khan-jadoon/', label: 'LinkedIn' },
    { icon: <EmailIcon />, href: 'mailto:engr.ahmadjamalkhan@gmail.com', label: 'Email' },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar
        position="fixed"
        elevation={trigger ? 4 : 0}
        sx={{ backgroundColor: 'transparent', backdropFilter: 'blur(10px)', transition: 'all 0.3s ease' }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Brand — mobile only */}
          <Typography
            sx={{
              display: { xs: 'block', md: 'none' },
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 600,
              color: '#E6F1FF',
              fontSize: '1rem',
            }}
          >
            Ahmad Jamal Khan
          </Typography>

          {/* Desktop nav links */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            {navigation.map((item) => (
              <motion.div key={item.name} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  style={{
                    color: 'white', textDecoration: 'none', cursor: 'pointer',
                    padding: '0.5rem 1rem', borderRadius: '8px', transition: 'all 0.3s ease',
                  }}
                  className="nav-link"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </Box>

          {/* Desktop right cluster */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, alignItems: 'center' }}>
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{ color: 'white', display: 'flex' }}
              >
                {link.icon}
              </motion.a>
            ))}
            <motion.a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                color: 'white', textDecoration: 'none', padding: '0.5rem 1rem', borderRadius: '8px',
                backgroundColor: 'rgba(0, 216, 255, 0.1)', border: '1px solid #00D8FF', marginLeft: '1rem',
              }}
            >
              Download Resume
            </motion.a>
          </Box>

          {/* Mobile hamburger */}
          <IconButton
            aria-label="open menu"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: 'flex', md: 'none' }, color: '#00D8FF' }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: 260,
            backgroundColor: 'rgba(10, 25, 47, 0.97)',
            backdropFilter: 'blur(12px)',
            borderLeft: '1px solid rgba(0, 216, 255, 0.2)',
            color: '#E6F1FF',
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
          <IconButton aria-label="close menu" onClick={() => setOpen(false)} sx={{ color: '#00D8FF' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navigation.map((item, i) => (
            <ListItem key={item.name} disablePadding>
              <Link
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setOpen(false)}
                style={{ width: '100%', cursor: 'pointer' }}
              >
                <ListItemButton sx={{ py: 1.5 }}>
                  <ListItemText
                    primary={
                      <Box component="span">
                        <Box component="span" sx={{ color: '#00D8FF', fontFamily: '"Fira Code", monospace', mr: 1.5, fontSize: '0.85rem' }}>
                          0{i + 1}.
                        </Box>
                        {item.name}
                      </Box>
                    }
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
        <Divider sx={{ bgcolor: 'rgba(0, 216, 255, 0.15)', my: 1 }} />
        <Box sx={{ px: 2, py: 2 }}>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
              color: '#00D8FF', textDecoration: 'none', padding: '0.7rem 1rem', borderRadius: '8px',
              border: '1px solid #00D8FF', backgroundColor: 'rgba(0, 216, 255, 0.08)',
            }}
          >
            <DownloadIcon fontSize="small" /> Download Resume
          </a>
          <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 3 }}>
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" style={{ color: '#00D8FF', display: 'flex' }}>
                {link.icon}
              </a>
            ))}
          </Stack>
        </Box>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, pt: 8 }}>
        {children}
      </Box>

      <Box
        component="footer"
        sx={{ py: 4, mt: 'auto', backgroundColor: 'rgba(17, 34, 64, 0.7)', backdropFilter: 'blur(10px)', borderTop: '1px solid rgba(0, 216, 255, 0.1)' }}
      >
        <Container maxWidth="lg">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <Divider sx={{ mb: 3, bgcolor: 'rgba(0, 216, 255, 0.2)' }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
              <Typography variant="body2" color="text.secondary">
                © {new Date().getFullYear()} Ahmad Jamal Khan. All rights reserved.
              </Typography>
              <Box sx={{ display: 'flex', gap: 3 }}>
                {socialLinks.map((link) => (
                  <motion.a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} style={{ color: '#00D8FF', display: 'flex' }}>
                    {link.icon}
                  </motion.a>
                ))}
              </Box>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2, textAlign: 'center' }}>
              Built with React, TypeScript, Material UI, and Framer Motion
            </Typography>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default Layout;
