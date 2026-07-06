import { Box, Typography, Container, useTheme, Grid, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    {
      category: 'Software Skills',
      items: ['NI Labview', 'Quartus', 'Multisim', 'Vivado', 'GNU Radio'],
    },
    {
      category: 'Programming Languages',
      items: ['C++', 'Python', 'Linux (Terminal Commands, Bash/Shell)', 'Verilog-HDL & VHDL'],
    },
    {
      category: 'RF & Signal Processing',
      items: ['USRP', 'SDR', 'Radar Systems', 'Signal Analysis', 'FPGA'],
    },
    {
      category: 'Embedded Systems',
      items: ['Arduino', 'PIC-16', 'Sensors', 'Microcontrollers', 'Circuit Design'],
    },
    {
      category: 'Avionics',
      items: ['Cockpit Systems', 'Navigation Systems', 'Safety Analysis', 'System Integration'],
    },
    {
      category: 'Soft Skills',
      items: ['Problem Solving', 'Team Leadership', 'Technical Writing', 'Project Management', 'Mentoring'],
    },
  ];

  return (
    <Box
      id="skills"
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
          background: 'radial-gradient(circle at 50% 0%, rgba(0, 216, 255, 0.03) 0%, rgba(10, 25, 47, 0) 50%)',
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
              <span style={{ color: theme.palette.primary.main }}>04.</span> What I'm Good At
            </Typography>
            <Typography variant="h2">Skills & Expertise</Typography>
          </Box>

          <Grid container spacing={4}>
            {skills.map((skill, index) => (
              <Grid item xs={12} sm={6} md={4} key={skill.category}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                >
                  <Box
                    sx={{
                      p: 3,
                      height: '100%',
                      background: 'rgba(17, 34, 64, 0.7)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: 2,
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        borderColor: theme.palette.primary.main,
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      color="primary.main"
                      sx={{
                        mb: 2,
                        fontFamily: '"Fira Code", monospace',
                        position: 'relative',
                        display: 'inline-block',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: -4,
                          left: 0,
                          width: '40%',
                          height: '2px',
                          background: `linear-gradient(90deg, ${theme.palette.primary.main}, transparent)`,
                        },
                      }}
                    >
                      {skill.category}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {skill.items.map((item, itemIndex) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: index * 0.1 + itemIndex * 0.05 }}
                        >
                          <Chip
                            label={item}
                            size="small"
                            sx={{
                              background: 'rgba(0, 216, 255, 0.1)',
                              color: theme.palette.primary.main,
                              fontFamily: '"Fira Code", monospace',
                              fontSize: '0.75rem',
                              transition: 'all 0.2s ease-in-out',
                              '&:hover': {
                                background: 'rgba(0, 216, 255, 0.2)',
                                transform: 'translateY(-2px)',
                              },
                            }}
                          />
                        </motion.div>
                      ))}
                    </Box>
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

export default Skills; 