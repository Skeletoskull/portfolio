import { Box, Typography, Container, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'RF Systems Engineer',
      company: 'Shaheen Aero Traders (on-site, NASTP)',
      period: 'Nov 2023 - Present',
      location: 'Rawalpindi, Pakistan',
      description: [
        'Architected a distributed, multi-node SDR system integrating 3× NI USRP X310, high-power amplifiers and antenna rotators across a 4-PC networked cluster',
        'Reverse-engineered DJI OcuSync 2.0 and decode DroneID / RemoteID drone telemetry and pilot location from IQ captures using BladeRF and USRP',
        'Built a versatile LabVIEW instrument-control library to generate and measure complex RF waveforms (FM/AM/PSK/ASK/noise) plus a real-time spectrum-visualization HMI',
        'Developed a multi-band GNSS resilience test suite (L1/L2/L5/S) evaluating receiver performance under high-interference conditions, with RF link-budget analysis and spectrum planning',
        'Implemented custom TCP/IP command-and-control and UDP telemetry for reliable, low-latency hardware coordination and health monitoring',
      ],
    },
    {
      title: 'Freelance RF / Test-Automation Engineer',
      company: 'Independent — Remote (US client)',
      period: 'Oct 2025 - Present',
      location: 'Remote',
      description: [
        'Develop automated calibration and RF measurement procedures for signal generators and spectrum analyzers in Keysight VEE (VEE Pro) and LabVIEW',
        'Control multi-vendor bench instruments over SCPI / VISA and validate every measurement live, delivering clean, documented procedures on tight timelines',
      ],
    },
    {
      title: 'Lecturer',
      company: 'NCS University System — Dept. of Management Sciences',
      period: 'Oct 2022 - Jan 2023',
      location: 'Peshawar, Pakistan',
      description: [
        'Delivered lectures on C/C++ programming, Operating Systems, Computer Networking and ICT',
        'Designed and supervised practical lab exercises, assessments and course materials',
        'Mentored students in developing technical and problem-solving skills',
      ],
    },
  ];

  return (
    <Box
      id="experience"
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
          background: 'radial-gradient(circle at 0% 50%, rgba(0, 216, 255, 0.03) 0%, rgba(10, 25, 47, 0) 50%)',
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
              <span style={{ color: theme.palette.primary.main }}>02.</span> Where I've Worked
            </Typography>
            <Typography variant="h2">My Experience</Typography>
          </Box>

          <Box sx={{ position: 'relative' }}>
            {/* Timeline line */}
            <Box
              sx={{
                position: 'absolute',
                left: { xs: 20, md: '50%' },
                transform: { xs: 'none', md: 'translateX(-50%)' },
                top: 0,
                bottom: 0,
                width: '2px',
                background: 'linear-gradient(180deg, #00D8FF 0%, rgba(0, 216, 255, 0.1) 100%)',
                zIndex: 0,
              }}
            />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    mb: 8,
                    ml: { xs: 6, md: index % 2 === 0 ? '0' : '50%' },
                    mr: { xs: 0, md: index % 2 === 0 ? '50%' : '0' },
                    pl: { xs: 4, md: index % 2 === 0 ? 0 : 4 },
                    pr: { xs: 0, md: index % 2 === 0 ? 4 : 0 },
                  }}
                >
                  {/* Timeline dot */}
                  <Box
                    sx={{
                      position: 'absolute',
                      left: { xs: -28, md: index % 2 === 0 ? 'auto' : -6 },
                      right: { xs: 'auto', md: index % 2 === 0 ? -6 : 'auto' },
                      top: 8,
                      width: 12,
                      height: 12,
                      borderRadius: '50%',
                      bgcolor: 'primary.main',
                      zIndex: 1,
                    }}
                  />

                  <Box
                    sx={{
                      p: 3,
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
                    <Typography variant="h5" gutterBottom color="primary.main">
                      {exp.title}
                    </Typography>
                    <Typography variant="h6" gutterBottom color="text.primary">
                      {exp.company}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.text.secondary,
                        mb: 2,
                        fontFamily: '"Fira Code", monospace',
                      }}
                    >
                      {exp.period} | {exp.location}
                    </Typography>
                    <Box component="ul" sx={{ pl: 2 }}>
                      {exp.description.map((item, i) => (
                        <Typography
                          key={i}
                          component="li"
                          variant="body1"
                          sx={{
                            mb: 1,
                            '&::marker': {
                              color: theme.palette.primary.main,
                            },
                          }}
                        >
                          {item}
                        </Typography>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Experience; 