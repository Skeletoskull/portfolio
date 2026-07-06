import { Box, Typography, Container, useTheme, useMediaQuery, Grid, Chip } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@mui/lab';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const education = [
  {
    school: 'Institute of Space Technology (IST)',
    degree: 'Bachelor of Science in Avionics Engineering',
    year: '2018 - 2022',
    thesis: 'Final-year project: Non-contact heartbeat detection using a micromotion Doppler radar',
    description: 'Relevant coursework: Digital Signal Processing, Analog & Digital Communication, Microwave Engineering, Antenna Theory & Design, Transmission Lines & Waveguides, Instrumentation & Measurements, Control Systems, Embedded Systems.'
  }
];

const certifications = [
  { name: 'Introduction to FPGA Design for Embedded Systems', issuer: 'University of Colorado Boulder', date: 'Mar 2024', id: '5CVYADJFUAFJ' },
  { name: 'Hardware Description Languages for FPGA Design', issuer: 'University of Colorado Boulder', date: 'Mar 2024', id: 'HG3X8553TRV8' },
  { name: 'Registered Engineer — Avionics', issuer: 'Pakistan Engineering Council', date: 'Feb 2023', id: 'AVION/00361' },
  { name: 'Foundations of Project Management', issuer: 'Google · Coursera', date: 'Dec 2022', id: 'T49TYYZTK2XH' },
  { name: 'Project Initiation: Starting a Successful Project', issuer: 'Google · Coursera', date: 'Mar 2023', id: 'SJQ6SYJJ4TKY' },
  { name: 'Foundations: Data, Data, Everywhere', issuer: 'Google · Coursera', date: 'Mar 2023', id: 'E76THN8FQ7K4' },
];

const Education = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      id="education"
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 30%, rgba(0, 216, 255, 0.03) 0%, rgba(10, 25, 47, 0) 70%)',
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ mb: 8, textAlign: 'center' }}>
            <Typography
              variant="body1"
              sx={{ color: theme.palette.primary.main, fontFamily: '"Fira Code", monospace', mb: 2 }}
            >
              <span style={{ color: theme.palette.primary.main }}>03.</span> Where I've Studied
            </Typography>
            <Typography variant="h2">Education & Certifications</Typography>
          </Box>

          <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
            <Timeline position={isMobile ? 'right' : 'alternate'} sx={{ p: { xs: 0, md: 2 } }}>
              {education.map((edu, index) => (
                <TimelineItem key={index} sx={{ '&::before': { display: { xs: 'none', md: 'block' } } }}>
                  <TimelineOppositeContent
                    sx={{ display: { xs: 'none', md: 'block' }, m: 'auto 0', color: 'rgba(230, 241, 255, 0.7)', fontFamily: '"Fira Code", monospace', fontSize: { xs: '0.8rem', md: '0.9rem' } }}
                  >
                    {edu.year}
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, type: 'spring' }}>
                      <TimelineDot sx={{ bgcolor: '#00D8FF', boxShadow: '0 0 15px rgba(0, 216, 255, 0.5)' }}>
                        <SchoolIcon />
                      </TimelineDot>
                    </motion.div>
                    <TimelineConnector sx={{ background: 'linear-gradient(180deg, #00D8FF 0%, rgba(0, 216, 255, 0.1) 100%)', width: '2px' }} />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <motion.div initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
                      <Box
                        sx={{
                          p: 3,
                          background: 'rgba(17, 34, 64, 0.5)',
                          backdropFilter: 'blur(10px)',
                          borderRadius: 2,
                          border: '1px solid rgba(0, 216, 255, 0.1)',
                          transition: 'all 0.3s ease',
                          '&:hover': { transform: 'translateY(-5px)', boxShadow: '0 10px 20px rgba(0, 216, 255, 0.1)', borderColor: '#00D8FF' },
                        }}
                      >
                        <Typography variant="caption" sx={{ display: { xs: 'block', md: 'none' }, color: theme.palette.primary.main, fontFamily: '"Fira Code", monospace', mb: 1 }}>
                          {edu.year}
                        </Typography>
                        <Typography variant="h5" component="h3" sx={{ color: '#00D8FF', mb: 1, fontWeight: 'bold' }}>
                          {edu.school}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: '#E6F1FF', fontWeight: 'medium', mb: 2 }}>
                          {edu.degree}
                        </Typography>
                        <Typography variant="body2" sx={{ color: theme.palette.primary.main, fontStyle: 'italic', mb: 2, borderLeft: `2px solid ${theme.palette.primary.main}`, pl: 2 }}>
                          {edu.thesis}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'rgba(230, 241, 255, 0.8)' }}>
                          {edu.description}
                        </Typography>
                      </Box>
                    </motion.div>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </Box>

          {/* English proficiency */}
          <Box sx={{ textAlign: 'center', mt: 2, mb: 6 }}>
            <Chip
              label="English — IELTS Academic 7.5 (CEFR C1)"
              sx={{ fontFamily: '"Fira Code", monospace', py: 2, px: 1, fontSize: '0.85rem' }}
            />
          </Box>

          {/* Certifications grid */}
          <Box sx={{ mb: 4, textAlign: 'center' }}>
            <Typography variant="h5" sx={{ color: '#E6F1FF', fontWeight: 600 }}>
              Licenses & Certifications
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {certifications.map((cert, index) => (
              <Grid item xs={12} sm={6} md={4} key={cert.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  style={{ height: '100%' }}
                >
                  <Box
                    sx={{
                      height: '100%',
                      p: 2.5,
                      display: 'flex',
                      flexDirection: 'column',
                      background: 'rgba(17, 34, 64, 0.5)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: 2,
                      border: '1px solid rgba(0, 216, 255, 0.12)',
                      transition: 'all 0.3s ease',
                      '&:hover': { transform: 'translateY(-4px)', borderColor: 'rgba(0, 216, 255, 0.4)' },
                    }}
                  >
                    <WorkspacePremiumIcon sx={{ color: theme.palette.primary.main, mb: 1 }} />
                    <Typography variant="subtitle1" sx={{ color: '#E6F1FF', fontWeight: 600, lineHeight: 1.35, mb: 0.5 }}>
                      {cert.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.primary.main, mb: 0.5 }}>
                      {cert.issuer}
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Typography variant="caption" sx={{ color: theme.palette.text.secondary, fontFamily: '"Fira Code", monospace', display: 'block' }}>
                      {cert.date}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'rgba(136, 146, 176, 0.7)', fontFamily: '"Fira Code", monospace', display: 'block' }}>
                      ID: {cert.id}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Education;
