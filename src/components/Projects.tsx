import { Box, Typography, Container, useTheme, Grid, Chip, Card, CardContent, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import GitHubIcon from '@mui/icons-material/GitHub';
import FlightIcon from '@mui/icons-material/Flight';
import RadarIcon from '@mui/icons-material/Radar';
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';
import MemoryIcon from '@mui/icons-material/Memory';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import ScienceIcon from '@mui/icons-material/Science';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  icon: JSX.Element;
  link?: string;
}

const Projects = () => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects: Project[] = [
    {
      title: 'DroneSecurity — Windows Port',
      description:
        'Lead developer & maintainer of the open-source Windows port of a DJI DroneID receiver. Implemented Zadoff-Chu sequence detection and Turbo decoding to intercept and decode DJI signals in real time on BladeRF, and authored 50,000+ words of documentation.',
      technologies: ['C++', 'Python', 'BladeRF', 'DSP', 'Open Source'],
      link: 'https://github.com/Skeletoskull/DroneSecurity',
      icon: <FlightIcon sx={{ fontSize: 60 }} />,
    },
    {
      title: 'DJI Drone Classifier',
      description:
        "Decodes RemoteID from a flying DJI drone on an NI USRP X310 with TwinRX daughterboards, demodulating IQ samples to expose the drone's live latitude/longitude, speed and serial number.",
      technologies: ['Python', 'LabVIEW', 'USRP X310', 'RemoteID'],
      icon: <RadarIcon sx={{ fontSize: 60 }} />,
    },
    {
      title: 'Multi-Band GNSS Resilience Testbed',
      description:
        'SDR-based signal generator that creates a controlled interference environment across the L1, L2 and S bands to analyze GNSS receiver resilience — with real-time health monitoring of SDRs and amplifiers and robust exception handling for hardware safety.',
      technologies: ['NI USRP X310', 'LabVIEW', 'Python', 'GNSS'],
      icon: <SatelliteAltIcon sx={{ fontSize: 60 }} />,
    },
    {
      title: 'O-Level Tester for EW Equipment',
      description:
        'Automated test system for electronic-warfare equipment — validating direction-finding, radiated-power, network functionality and built-in test (I-BIT). Built on a Raspberry Pi 4 with a Nuand BladeRF transceiver.',
      technologies: ['Python', 'Raspberry Pi', 'BladeRF', 'SDR'],
      icon: <MemoryIcon sx={{ fontSize: 60 }} />,
    },
    {
      title: 'BladeRF A4 FPGA Customization',
      description:
        'Extracted and modified the Verilog FPGA bitstream of the Nuand BladeRF A4, adding custom GPIO and status logic, then reflashed the FPGA to validate hardware-in-the-loop triggers.',
      technologies: ['Verilog', 'VHDL', 'Intel Quartus', 'FPGA'],
      icon: <DeveloperBoardIcon sx={{ fontSize: 60 }} />,
    },
    {
      title: 'Pneumatic Test Bench Suite',
      description:
        'Modular, plug-in-based LabVIEW test application (queued-message-handler architecture) acquiring from pressure and flow transducers over NI-DAQmx, with a linear calibration module and automated report generation.',
      technologies: ['LabVIEW', 'NI-DAQmx', 'Test Automation'],
      icon: <ScienceIcon sx={{ fontSize: 60 }} />,
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
                  style={{ height: '100%' }}
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
                        borderColor: 'rgba(0, 216, 255, 0.4)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        height: 130,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#00D8FF',
                        background:
                          'linear-gradient(135deg, rgba(0, 216, 255, 0.15) 0%, rgba(255, 105, 180, 0.10) 100%)',
                        borderBottom: '1px solid rgba(0, 216, 255, 0.1)',
                      }}
                    >
                      {project.icon}
                    </Box>
                    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                      <Typography
                        variant="h5"
                        component="h3"
                        sx={{ color: '#00D8FF', mb: 2, fontWeight: 'bold' }}
                      >
                        {project.title}
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#E6F1FF', mb: 2, flexGrow: 1 }}>
                        {project.description}
                      </Typography>
                      <Box sx={{ mb: project.link ? 2 : 0 }}>
                        {project.technologies.map((tech, techIndex) => (
                          <Chip
                            key={techIndex}
                            label={tech}
                            size="small"
                            sx={{
                              mr: 1,
                              mb: 1,
                              backgroundColor: 'rgba(0, 216, 255, 0.1)',
                              color: '#00D8FF',
                              border: '1px solid rgba(0, 216, 255, 0.2)',
                              fontFamily: '"Fira Code", monospace',
                              fontSize: '0.72rem',
                            }}
                          />
                        ))}
                      </Box>
                      {project.link && (
                        <Button
                          startIcon={<GitHubIcon />}
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          size="small"
                          sx={{
                            alignSelf: 'flex-start',
                            color: '#00D8FF',
                            textTransform: 'none',
                            '&:hover': { backgroundColor: 'rgba(0, 216, 255, 0.1)' },
                          }}
                        >
                          View Code
                        </Button>
                      )}
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
