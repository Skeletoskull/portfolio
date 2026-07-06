import { Box, Typography, Container, useTheme, Grid, Chip, Card, CardContent, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Remote Sensing of Heart Beat using a Micromotion Doppler Radar',
      description: 'Developed a system using a micromotion doppler radar for non-contact heart rate monitoring. Implemented signal processing algorithms to extract heart rate from radar data.',
      technologies: ['Radar Technology', 'Signal Processing', 'MATLAB', 'GNURadio'],
      image: 'https://placehold.co/600x400/112240/00D8FF?text=Heart+Rate+Radar',
    },
    {
      title: 'University Exit/Entry System',
      description: 'Created a C++ based access control system for university premises. Implemented database management and user authentication features.',
      technologies: ['C++', 'Database Management', 'SQL', 'Windows Forms'],
      image: 'https://placehold.co/600x400/112240/00D8FF?text=University+Access+System',
    },
    {
      title: 'Arduino-based G-Force Measurement',
      description: 'Built a system to measure and analyze gravitational acceleration using Arduino and various sensors. Implemented data logging and real-time visualization.',
      technologies: ['Arduino', 'Sensors', 'Data Analysis', 'C++'],
      image: 'https://placehold.co/600x400/112240/00D8FF?text=G-Force+Measurement',
    },
    {
      title: 'Ground Proximity Warning System',
      description: 'Implemented safety systems for aircraft navigation and ground proximity alerts. Developed using PIC-16 and Arduino with various sensors.',
      technologies: ['PIC-16', 'Arduino', 'Sensors', 'Embedded Systems'],
      image: 'https://placehold.co/600x400/112240/00D8FF?text=GPWS',
    },
    {
      title: 'ATR 42-500 Aircraft Cockpit Modification',
      description: 'Contributed to the redesign and modification of cockpit systems for improved functionality and user experience.',
      technologies: ['Avionics', 'System Design', 'Cockpit Systems', 'Safety Analysis'],
      image: 'https://placehold.co/600x400/112240/00D8FF?text=Cockpit+Modification',
    },
  ];

  return (
    <Box
      id="projects"
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
          background: 'radial-gradient(circle at 100% 50%, rgba(0, 216, 255, 0.03) 0%, rgba(10, 25, 47, 0) 50%)',
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
          <Box sx={{ mb: 8, textAlign: 'center' }}>
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.primary.main,
                fontFamily: '"Fira Code", monospace',
                mb: 2,
              }}
            >
              <span style={{ color: theme.palette.primary.main }}>03.</span> Some Things I've Built
            </Typography>
            <Typography variant="h2">Featured Projects</Typography>
          </Box>

          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} key={project.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      background: 'rgba(17, 34, 64, 0.5)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(0, 216, 255, 0.1)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 10px 20px rgba(0, 216, 255, 0.1)',
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={project.image}
                      alt={project.title}
                      sx={{
                        objectFit: 'cover',
                        borderBottom: '1px solid rgba(0, 216, 255, 0.1)',
                      }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography
                        variant="h5"
                        component="h3"
                        sx={{
                          color: '#00D8FF',
                          mb: 2,
                          fontWeight: 'bold',
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: '#E6F1FF',
                          mb: 2,
                        }}
                      >
                        {project.description}
                      </Typography>
                      <Box sx={{ mb: 2 }}>
                        {project.technologies.map((tech, techIndex) => (
                          <Chip
                            key={techIndex}
                            label={tech}
                            sx={{
                              mr: 1,
                              mb: 1,
                              backgroundColor: 'rgba(0, 216, 255, 0.1)',
                              color: '#00D8FF',
                              border: '1px solid rgba(0, 216, 255, 0.2)',
                            }}
                          />
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects; 