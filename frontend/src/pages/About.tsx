import React, { useRef } from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Avatar, 
  useTheme,
  Divider,
  Button,
  Link,
  Container,
  IconButton,
  useMediaQuery
} from '@mui/material';
import { 
  Email as EmailIcon, 
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  ArrowForward as ArrowForwardIcon,
  ArrowBackIos as ArrowBackIosIcon,
  ArrowForwardIos as ArrowForwardIosIcon,
  Star as StarIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import Grid from '../components/CustomGrid';

const About: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const testimonialScrollRef = useRef<HTMLDivElement>(null);
  const teamScrollRef = useRef<HTMLDivElement>(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 24
      }
    }
  };

  return (
    <Box sx={{ overflow: 'hidden', mt: 0 }}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section - More compact */}
        <Box 
          sx={{ 
            py: 6, 
            background: `linear-gradient(135deg, ${theme.palette.primary.main}15 0%, ${theme.palette.primary.light}05 100%)`,
            position: 'relative',
            overflow: 'hidden',
            zIndex: 1
          }}
        >
          <Container maxWidth="lg">
            <motion.div variants={itemVariants}>
              <Typography 
                variant="h3" 
                component="h1" 
                align="center"
                gutterBottom
                sx={{ 
                  fontWeight: 'bold',
                  mb: 2,
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  position: 'relative',
                  zIndex: 2
                }}
              >
                StoneScan
              </Typography>
              
              <Typography 
                variant="h6" 
                align="center" 
                color="text.secondary"
                sx={{ maxWidth: '800px', mx: 'auto', mb: 2, position: 'relative', zIndex: 2 }}
              >
                Revolutionizing kidney stone detection through advanced AI and machine learning technology.
              </Typography>
            </motion.div>
          </Container>

          {/* Background bubbles positioned not to interfere with text */}
          <Box
            component={motion.div}
            animate={{ 
              y: [0, -15, 0],
              opacity: [0.5, 0.7, 0.5]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 8,
              ease: "easeInOut" 
            }}
            sx={{
              position: 'absolute',
              width: 200,
              height: 200,
              right: '5%',
              bottom: '-50px',
              borderRadius: '50%',
              background: `radial-gradient(circle, ${theme.palette.primary.main}20, ${theme.palette.primary.main}05)`,
              filter: 'blur(30px)',
              zIndex: 1
            }}
          />
        </Box>

        {/* Mission Section */}
        <Box 
          component={motion.div} 
          variants={itemVariants}
          sx={{ 
            py: 6,
            px: 3,
            position: 'relative',
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography variant="h4" component="h2" gutterBottom fontWeight="bold">
                  Our Mission
                </Typography>
                <Typography variant="body1" paragraph>
                  At StoneScan, we're dedicated to improving the accuracy and efficiency of kidney stone detection 
                  and analysis. Our platform combines cutting-edge artificial intelligence with medical imaging 
                  expertise to provide healthcare professionals with a powerful diagnostic tool.
                </Typography>
                <Typography variant="body1" paragraph>
                  By leveraging machine learning algorithms trained on thousands of CT scans and ultrasound images,
                  we can identify kidney stones with higher precision and provide detailed analysis about their size,
                  composition, and location.
                </Typography>
                
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Technology Section */}
        <Box 
          component={motion.div} 
          variants={itemVariants}
          sx={{ 
            py: 6,
            background: `linear-gradient(135deg, ${theme.palette.secondary.main}10 0%, ${theme.palette.secondary.light}05 100%)`,
            border: `1px solid ${theme.palette.secondary.main}20`,
          }}
        >
          <Container maxWidth="lg">
            <Typography variant="h4" component="h2" gutterBottom fontWeight="bold" align="center">
              Our Technology
            </Typography>
            
            <Typography variant="body1" paragraph align="center" sx={{ maxWidth: '800px', mx: 'auto', mb: 4 }}>
              StoneScan employs state-of-the-art technology to deliver accurate and reliable results.
            </Typography>

            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={12} sm={6} md={4}>
                <Box 
                  sx={{ 
                    p: 3, 
                    textAlign: 'center',
                    height: '100%',
                    background: 'white',
                    borderRadius: 3,
                    boxShadow: theme.shadows[2],
                  }}
                  component={motion.div}
                  whileHover={{ y: -5, boxShadow: theme.shadows[8] }}
                >
                  <Typography variant="h6" gutterBottom color="secondary" fontWeight="bold">
                    Deep Learning AI
                  </Typography>
                  <Typography variant="body2">
                    Our algorithms use convolutional neural networks trained on diverse medical imaging datasets 
                    to accurately identify and classify kidney stones regardless of size or location.
                  </Typography>
                </Box>
              </Grid>
              
              <Grid item xs={12} sm={6} md={4}>
                <Box 
                  sx={{ 
                    p: 3, 
                    textAlign: 'center',
                    height: '100%',
                    background: 'white',
                    borderRadius: 3,
                    boxShadow: theme.shadows[2],
                  }}
                  component={motion.div}
                  whileHover={{ y: -5, boxShadow: theme.shadows[8] }}
                >
                  <Typography variant="h6" gutterBottom color="secondary" fontWeight="bold">
                    Secure Cloud Platform
                  </Typography>
                  <Typography variant="body2">
                    All patient data and scan results are stored on HIPAA-compliant secure servers with 
                    end-to-end encryption to ensure privacy and data protection.
                  </Typography>
                </Box>
              </Grid>
              
              <Grid item xs={12} sm={6} md={4}>
                <Box 
                  sx={{ 
                    p: 3, 
                    textAlign: 'center',
                    height: '100%',
                    background: 'white',
                    borderRadius: 3,
                    boxShadow: theme.shadows[2],
                  }}
                  component={motion.div}
                  whileHover={{ y: -5, boxShadow: theme.shadows[8] }}
                >
                  <Typography variant="h6" gutterBottom color="secondary" fontWeight="bold">
                    Real-time Analysis
                  </Typography>
                  <Typography variant="body2">
                    Process images and receive detailed analysis in seconds, allowing for faster diagnosis
                    and treatment planning for patients suffering from kidney stones.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Contact Section */}
        <Box 
          component={motion.div} 
          variants={itemVariants}
          sx={{ 
            py: 6,
            textAlign: 'center'
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="h4" component="h2" gutterBottom fontWeight="bold">
              Get In Touch
            </Typography>
            
            <Typography variant="body1" sx={{ mb: 4 }}>
              Have questions about StoneScan or interested in implementing our solution at your healthcare facility?
              We'd love to hear from you.
            </Typography>
            
            <Button 
              variant="contained" 
              size="large"
              component={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              sx={{ 
                borderRadius: 2,
                px: 4,
                py: 1.5
              }}
            >
              Contact Us
            </Button>
          </Container>
        </Box>

        {/* Footer */}
        <Box 
          component="footer" 
          sx={{ 
            py: 4,
            borderTop: `1px solid ${theme.palette.divider}`,
            textAlign: 'center',
            bgcolor: theme.palette.grey[50]
          }}
        >
          <Container>
            <Typography variant="body2" color="text.secondary">
              © {new Date().getFullYear()} StoneScan. All rights reserved.
            </Typography>
          </Container>
        </Box>
      </motion.div>
    </Box>
  );
};

export default About; 
