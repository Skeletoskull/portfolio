import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Hero = () => {
  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(0, 216, 255, 0.15) 0%, rgba(10, 25, 47, 0) 50%)',
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: { xs: 'wrap', md: 'nowrap' } }}>
          <Box sx={{ flex: 1 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: '#00D8FF',
                  fontFamily: '"Fira Code", monospace',
                  mb: 2,
                }}
              >
                Hi, my name is
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  fontWeight: 'bold',
                  background: 'linear-gradient(45deg, #00D8FF, #FF69B4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 2,
                }}
              >
                Ahmad Jamal Khan
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.5rem', md: '2.5rem' },
                  color: 'rgba(230, 241, 255, 0.8)',
                  mb: 3,
                }}
              >
                I build advanced RF systems.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(230, 241, 255, 0.6)',
                  maxWidth: '600px',
                  mb: 4,
                  fontSize: '1.1rem',
                  lineHeight: 1.7,
                }}
              >
                I'm an RF Systems Engineer specializing in radar systems, electronic warfare, and signal processing. Currently focused on developing innovative solutions for mission-critical defense applications at Pakistan Air Force.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{ display: 'flex', gap: '1rem' }}
            >
              <Button
                variant="outlined"
                startIcon={<EmailIcon />}
                href="mailto:design.engineer.ahmadjamal@gmail.com"
                sx={{
                  borderColor: '#00D8FF',
                  color: '#00D8FF',
                  '&:hover': {
                    borderColor: '#00D8FF',
                    backgroundColor: 'rgba(0, 216, 255, 0.1)',
                  },
                }}
              >
                Get In Touch
              </Button>
              <Button
                variant="outlined"
                startIcon={<GitHubIcon />}
                href="https://github.com/Ahmad-Jamal-Khan"
                target="_blank"
                sx={{
                  borderColor: '#00D8FF',
                  color: '#00D8FF',
                  '&:hover': {
                    borderColor: '#00D8FF',
                    backgroundColor: 'rgba(0, 216, 255, 0.1)',
                  },
                }}
              >
                GitHub
              </Button>
              <Button
                variant="outlined"
                startIcon={<LinkedInIcon />}
                href="https://www.linkedin.com/in/ahmad-jamal-khan-jadoon/"
                target="_blank"
                sx={{
                  borderColor: '#00D8FF',
                  color: '#00D8FF',
                  '&:hover': {
                    borderColor: '#00D8FF',
                    backgroundColor: 'rgba(0, 216, 255, 0.1)',
                  },
                }}
              >
                LinkedIn
              </Button>
            </motion.div>
          </Box>

          <Box
            sx={{
              flex: '0 0 auto',
              display: { xs: 'none', md: 'block' }
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.3,
                type: "spring",
                stiffness: 100
              }}
              style={{
                width: '300px',
                height: '300px',
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    right: '-10px',
                    bottom: '-10px',
                    border: '2px solid #00D8FF',
                    borderRadius: '8px',
                    zIndex: 0,
                  },
                }}
              >
                <Box
                  component="img"
                  src="profile.png"
                  alt="Ahmad Jamal Khan"
                  loading="eager"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    position: 'relative',
                    zIndex: 1,
                    transition: 'all 0.3s ease',
                    p: 2,
                    backgroundColor: 'rgba(0, 216, 255, 0.03)',
                    '&:hover': {
                      transform: 'translate(-5px, -5px)',
                      backgroundColor: 'rgba(0, 216, 255, 0.05)',
                    },
                  }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    console.error('Error loading image:', target.src);
                    target.onerror = null;
                  }}
                />
              </Box>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero; 