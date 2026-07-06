import { Box, Typography, Container, useTheme, Grid, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const theme = useTheme();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const facts = [
    '2.5+ years in RF / DSP engineering',
    'Open-source maintainer — DroneSecurity',
    'Reverse-engineered DJI OcuSync 2.0',
    'LabVIEW · VEE Pro · Python · C/C++',
    'IELTS Academic 7.5 (CEFR C1)',
    'BS Avionics Engineering — IST',
  ];

  const stats = [
    { value: '2.5+', label: 'Years Experience' },
    { value: '10+', label: 'RF / SDR Projects' },
    { value: 'L1–S', label: 'GNSS Bands Tested' },
  ];

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 20% 20%, rgba(0, 216, 255, 0.04) 0%, rgba(10, 25, 47, 0) 55%)',
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ mb: 6, textAlign: 'center' }}>
            <Typography variant="body1" sx={{ color: theme.palette.primary.main, fontFamily: '"Fira Code", monospace', mb: 2 }}>
              <span style={{ color: theme.palette.primary.main }}>01.</span> Who I Am
            </Typography>
            <Typography variant="h2">About Me</Typography>
          </Box>

          <Grid container spacing={5} alignItems="stretch">
            <Grid item xs={12} md={7}>
              <Typography variant="body1" sx={{ color: 'rgba(230, 241, 255, 0.85)', mb: 2.5, fontSize: '1.05rem', lineHeight: 1.8 }}>
                I'm an RF and DSP engineer based in Islamabad, Pakistan, with 2.5+ years turning
                software-defined radio into working systems. My focus is the full signal path — from raw
                IQ captures to decoded intelligence and validated hardware.
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(230, 241, 255, 0.85)', mb: 2.5, fontSize: '1.05rem', lineHeight: 1.8 }}>
                As an RF Systems Engineer at <Box component="span" sx={{ color: theme.palette.primary.main }}>Shaheen Aero Traders</Box>,
                I've built distributed multi-node SDR systems, reverse-engineered DJI drone protocols and
                developed multi-band GNSS resilience testbeds. Alongside that I write automated RF test and
                calibration software in LabVIEW, VEE Pro and Python, and I maintain the open-source Windows
                port of DroneSecurity.
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(230, 241, 255, 0.85)', fontSize: '1.05rem', lineHeight: 1.8 }}>
                I'm currently open to RF, SDR/DSP and LabVIEW test-automation roles — remote, or on-site in
                the Gulf or Europe.
              </Typography>

              <Box sx={{ display: 'flex', gap: { xs: 2, sm: 4 }, mt: 4, flexWrap: 'wrap' }}>
                {stats.map((s) => (
                  <Box key={s.label}>
                    <Typography sx={{ color: theme.palette.primary.main, fontWeight: 700, fontSize: '1.9rem', fontFamily: '"Poppins", sans-serif' }}>
                      {s.value}
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                      {s.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>

            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  height: '100%',
                  p: 4,
                  background: 'rgba(17, 34, 64, 0.6)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 2,
                  border: '1px solid rgba(0, 216, 255, 0.15)',
                }}
              >
                <Typography variant="h6" sx={{ color: theme.palette.primary.main, mb: 3, fontFamily: '"Fira Code", monospace' }}>
                  Quick Facts
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  {facts.map((f) => (
                    <Box key={f} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                      <Box component="span" sx={{ color: theme.palette.primary.main, mt: '2px', fontFamily: '"Fira Code", monospace' }}>▹</Box>
                      <Typography variant="body1" sx={{ color: 'rgba(230, 241, 255, 0.8)' }}>{f}</Typography>
                    </Box>
                  ))}
                </Box>
                <Box sx={{ mt: 3, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {['Islamabad, PK', 'Remote', 'Gulf', 'Europe'].map((tag) => (
                    <Chip key={tag} label={tag} size="small" />
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;
