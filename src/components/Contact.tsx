import { useState } from 'react';
import { Box, Typography, Container, useTheme, TextField, Button, Stack, IconButton, Tooltip } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SendIcon from '@mui/icons-material/Send';

const EMAIL = 'engr.ahmadjamalkhan@gmail.com';

const Contact = () => {
  const theme = useTheme();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [field]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name || 'someone'}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const fieldSx = {
    '& .MuiOutlinedInput-root': {
      backgroundColor: 'rgba(17, 34, 64, 0.5)',
      '& fieldset': { borderColor: 'rgba(0, 216, 255, 0.2)' },
      '&:hover fieldset': { borderColor: 'rgba(0, 216, 255, 0.4)' },
      '&.Mui-focused fieldset': { borderColor: theme.palette.primary.main },
    },
    '& .MuiInputLabel-root': { color: theme.palette.text.secondary },
    '& .MuiInputBase-input': { color: theme.palette.text.primary },
  };

  const socials = [
    { icon: <GitHubIcon />, href: 'https://github.com/Skeletoskull', label: 'GitHub' },
    { icon: <LinkedInIcon />, href: 'https://www.linkedin.com/in/ahmad-jamal-khan-jadoon/', label: 'LinkedIn' },
    { icon: <EmailIcon />, href: `mailto:${EMAIL}`, label: 'Email' },
  ];

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 100%, rgba(0, 216, 255, 0.05) 0%, rgba(10, 25, 47, 0) 60%)',
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ mb: 5, textAlign: 'center' }}>
            <Typography variant="body1" sx={{ color: theme.palette.primary.main, fontFamily: '"Fira Code", monospace', mb: 2 }}>
              <span style={{ color: theme.palette.primary.main }}>06.</span> What's Next
            </Typography>
            <Typography variant="h2" sx={{ mb: 2 }}>Get In Touch</Typography>
            <Typography variant="body1" sx={{ color: theme.palette.text.secondary, maxWidth: 480, mx: 'auto' }}>
              Have a role, a project, or just want to talk RF and SDR? Drop me a message —
              I'm currently open to new opportunities and reply quickly.
            </Typography>
          </Box>

          <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
            <Stack spacing={2.5}>
              <TextField label="Your name" required fullWidth value={form.name} onChange={handleChange('name')} sx={fieldSx} />
              <TextField label="Your email" type="email" required fullWidth value={form.email} onChange={handleChange('email')} sx={fieldSx} />
              <TextField label="Message" required fullWidth multiline minRows={4} value={form.message} onChange={handleChange('message')} sx={fieldSx} />
              <Button
                type="submit"
                variant="outlined"
                endIcon={<SendIcon />}
                sx={{ alignSelf: 'center', px: 5 }}
              >
                Send Message
              </Button>
            </Stack>
          </Box>

          <Stack direction="row" spacing={2} justifyContent="center">
            {socials.map((s) => (
              <Tooltip title={s.label} key={s.label}>
                <IconButton
                  component="a"
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: theme.palette.primary.main,
                    border: '1px solid rgba(0, 216, 255, 0.2)',
                    '&:hover': { backgroundColor: 'rgba(0, 216, 255, 0.1)', transform: 'translateY(-3px)' },
                    transition: 'all 0.2s ease',
                  }}
                >
                  {s.icon}
                </IconButton>
              </Tooltip>
            ))}
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact;
