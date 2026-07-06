import { Box, Typography, Container, useTheme } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@mui/lab';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';

const education = [
  {
    school: 'Institute of Space Technology',
    degree: 'Bachelor of Science in Avionics Engineering',
    year: '2018 - 2022',
    thesis: 'Thesis: Detection of Heart Beat using a Micromotion Doppler Radar',
    description: 'Relevant coursework: Digital Signal Processing, Communication Systems, Control Systems, Microprocessors, Electromagnetic Theory, Radar Systems, Embedded Systems, Circuit Design, Electronics'
  }
];

const Education = () => {
  const theme = useTheme();

  return (
    <Box
      id="education"
      sx={{
        py: { xs: 8, md: 12 },
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
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
              sx={{
                color: theme.palette.primary.main,
                fontFamily: '"Fira Code", monospace',
                mb: 2,
              }}
            >
              <span style={{ color: theme.palette.primary.main }}>02.</span> Where I've Studied
            </Typography>
            <Typography variant="h2">Education</Typography>
          </Box>

          <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
            <Timeline position="alternate">
              {education.map((edu, index) => (
                <TimelineItem key={index}>
                  <TimelineOppositeContent
                    sx={{ 
                      m: 'auto 0',
                      color: 'rgba(230, 241, 255, 0.7)',
                      fontFamily: '"Fira Code", monospace',
                      fontSize: { xs: '0.8rem', md: '0.9rem' }
                    }}
                  >
                    {edu.year}
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, type: 'spring' }}
                    >
                      <TimelineDot 
                        sx={{ 
                          bgcolor: '#00D8FF',
                          boxShadow: '0 0 15px rgba(0, 216, 255, 0.5)'
                        }}
                      >
                        <SchoolIcon />
                      </TimelineDot>
                    </motion.div>
                    <TimelineConnector sx={{ 
                      background: 'linear-gradient(180deg, #00D8FF 0%, rgba(0, 216, 255, 0.1) 100%)',
                      width: '2px' 
                    }} />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <Box 
                        sx={{ 
                          p: 3,
                          background: 'rgba(17, 34, 64, 0.5)',
                          backdropFilter: 'blur(10px)',
                          borderRadius: 2,
                          border: '1px solid rgba(0, 216, 255, 0.1)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-5px)',
                            boxShadow: '0 10px 20px rgba(0, 216, 255, 0.1)',
                            borderColor: '#00D8FF',
                          }
                        }}
                      >
                        <Typography 
                          variant="h5" 
                          component="h3" 
                          sx={{ 
                            color: '#00D8FF',
                            mb: 1,
                            fontWeight: 'bold',
                          }}
                        >
                          {edu.school}
                        </Typography>
                        <Typography 
                          variant="subtitle1"
                          sx={{ 
                            color: '#E6F1FF',
                            fontWeight: 'medium',
                            mb: 2,
                          }}
                        >
                          {edu.degree}
                        </Typography>
                        {edu.thesis && (
                          <Typography 
                            variant="body2"
                            sx={{ 
                              color: theme.palette.primary.main,
                              fontStyle: 'italic',
                              mb: 2,
                              borderLeft: `2px solid ${theme.palette.primary.main}`,
                              pl: 2,
                            }}
                          >
                            {edu.thesis}
                          </Typography>
                        )}
                        <Typography 
                          variant="body2"
                          sx={{ 
                            color: 'rgba(230, 241, 255, 0.8)',
                          }}
                        >
                          {edu.description}
                        </Typography>
                      </Box>
                    </motion.div>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Education; 