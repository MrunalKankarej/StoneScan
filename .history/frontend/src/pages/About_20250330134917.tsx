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

  // Team members data
  const teamMembers = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Lead Researcher',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      bio: 'Ph.D. in Radiology with over 10 years of experience specializing in kidney stone detection and research.',
      links: {
        email: 'sarah.johnson@example.com',
        github: 'https://github.com/sarahjohnson',
        linkedin: 'https://linkedin.com/in/sarahjohnson'
      }
    },
    {
      name: 'Mark Wilson',
      role: 'Software Engineer',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      bio: 'Full-stack developer with expertise in medical imaging processing and machine learning implementations.',
      links: {
        email: 'mark.wilson@example.com',
        github: 'https://github.com/markwilson',
        linkedin: 'https://linkedin.com/in/markwilson'
      }
    },
    {
      name: 'Dr. Emily Chen',
      role: 'Medical Advisor',
      image: 'https://randomuser.me/api/portraits/women/63.jpg',
      bio: 'Urologist with specialty in non-invasive kidney stone treatments and digital healthcare innovations.',
      links: {
        email: 'emily.chen@example.com',
        github: 'https://github.com/emilychen',
        linkedin: 'https://linkedin.com/in/emilychen'
      }
    },
    {
      name: 'James Rodriguez',
      role: 'AI Specialist',
      image: 'https://randomuser.me/api/portraits/men/66.jpg',
      bio: 'Machine learning expert focused on medical image analysis and neural network design.',
      links: {
        email: 'james.rodriguez@example.com',
        github: 'https://github.com/jamesrodriguez',
        linkedin: 'https://linkedin.com/in/jamesrodriguez'
      }
    },
    {
      name: 'Dr. Anna Smith',
      role: 'Clinical Director',
      image: 'https://randomuser.me/api/portraits/women/28.jpg',
      bio: 'Specialist in integrating AI solutions into clinical workflows with a focus on patient outcomes.',
      links: {
        email: 'anna.smith@example.com',
        github: 'https://github.com/annasmith',
        linkedin: 'https://linkedin.com/in/annasmith'
      }
    },
    {
      name: 'Michael Jordan',
      role: 'UX Designer',
      image: 'https://randomuser.me/api/portraits/men/22.jpg',
      bio: 'Expert in creating intuitive interfaces for healthcare professionals with a focus on accessibility.',
      links: {
        email: 'michael.jordan@example.com',
        github: 'https://github.com/michaeljordan',
        linkedin: 'https://linkedin.com/in/michaeljordan'
      }
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Dr. Robert Chen",
      position: "Chief Radiologist, Memorial Hospital",
      image: "https://randomuser.me/api/portraits/men/41.jpg",
      text: "StoneScan has revolutionized our workflow. The AI-powered detection has reduced our analysis time by 40% while improving accuracy.",
      rating: 5
    },
    {
      name: "Dr. Lisa Wong",
      position: "Urologist, Pacific Medical Center",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      text: "The platform's precision in detecting small stones that could be easily missed has been invaluable for early intervention.",
      rating: 5
    },
    {
      name: "Dr. James Miller",
      position: "Director of Radiology, Central Hospital",
      image: "https://randomuser.me/api/portraits/men/33.jpg",
      text: "Implementation was seamless, and the support team has been exceptional. Our diagnostic confidence has significantly improved.",
      rating: 4
    },
    {
      name: "Dr. Sarah Thompson",
      position: "Nephrologist, University Medical Center",
      image: "https://randomuser.me/api/portraits/women/24.jpg",
      text: "StoneScan has become an essential tool in our practice. The detailed analysis and measurement features save us critical time.",
      rating: 5
    },
    {
      name: "Dr. Michael Brown",
      position: "Emergency Physician, City Hospital",
      image: "https://randomuser.me/api/portraits/men/81.jpg",
      text: "In emergency situations, having rapid and reliable detection makes all the difference. StoneScan delivers exactly that.",
      rating: 5
    },
    {
      name: "Dr. Emily Johnson",
      position: "Research Director, Medical AI Institute",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      text: "As someone researching medical AI applications, I'm impressed by the accuracy and continuous improvement of StoneScan's algorithms.",
      rating: 4
    }
  ];

  // Scroll handlers for horizontal scrolling sections
  const scrollTestimonials = (direction: 'left' | 'right') => {
    if (testimonialScrollRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      testimonialScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollTeam = (direction: 'left' | 'right') => {
    if (teamScrollRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      teamScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
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
                About StoneScan
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
                <Button 
                  variant="contained" 
                  endIcon={<ArrowForwardIcon />}
                  component={motion.button}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  sx={{ 
                    mt: 2,
                    borderRadius: 2,
                    px: 3,
                    py: 1
                  }}
                >
                  Learn More
                </Button>
              </Grid>
              <Grid item xs={12} md={6}>
                {/* Decorative image or animation could go here */}
                <Box
                  component={motion.div}
                  whileHover={{ scale: 1.02 }}
                  sx={{
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: theme.shadows[10],
                    height: '300px',
                    background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Typography variant="h2" sx={{ color: 'white', opacity: 0.7 }}>
                    AI + Medicine
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Testimonials Section - Horizontal Scrolling */}
        <Box 
          sx={{ 
            py: 6, 
            background: `linear-gradient(135deg, ${theme.palette.background.paper}, ${theme.palette.grey[50]})`,
            position: 'relative',
          }}
        >
          <Container maxWidth="lg">
            <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography 
                variant="h4" 
                component="h2" 
                fontWeight="bold"
              >
                What Our Users Say
              </Typography>

              {!isMobile && (
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <IconButton 
                    onClick={() => scrollTestimonials('left')}
                    sx={{ 
                      bgcolor: 'background.paper',
                      boxShadow: theme.shadows[2],
                      '&:hover': { bgcolor: 'background.paper' }
                    }}
                    component={motion.button}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ArrowBackIosIcon fontSize="small" />
                  </IconButton>
                  <IconButton 
                    onClick={() => scrollTestimonials('right')}
                    sx={{ 
                      bgcolor: 'background.paper',
                      boxShadow: theme.shadows[2],
                      '&:hover': { bgcolor: 'background.paper' }
                    }}
                    component={motion.button}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ArrowForwardIosIcon fontSize="small" />
                  </IconButton>
                </Box>
              )}
            </Box>

            <Box 
              ref={testimonialScrollRef}
              sx={{ 
                display: 'flex',
                overflowX: 'auto',
                gap: 3,
                pb: 2,
                px: 1,
                scrollbarWidth: 'none',
                '&::-webkit-scrollbar': {
                  display: 'none'
                },
                msOverflowStyle: 'none'
              }}
            >
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  sx={{ 
                    minWidth: 300,
                    maxWidth: 350,
                    borderRadius: 3,
                    boxShadow: theme.shadows[4],
                    flex: '0 0 auto'
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        sx={{ width: 60, height: 60, mr: 2 }}
                      />
                      <Box>
                        <Typography variant="subtitle1" fontWeight="bold">
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {testimonial.position}
                        </Typography>
                      </Box>
                    </Box>
                    
                    <Typography 
                      variant="body1" 
                      paragraph
                      sx={{ 
                        fontStyle: 'italic',
                        color: 'text.primary',
                        mb: 2
                      }}
                    >
                      "{testimonial.text}"
                    </Typography>
                    
                    <Box sx={{ display: 'flex' }}>
                      {[...Array(5)].map((_, i) => (
                        <StarIcon 
                          key={i} 
                          sx={{ 
                            color: i < testimonial.rating ? theme.palette.warning.main : theme.palette.grey[300],
                            fontSize: 20 
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Container>
        </Box>

        {/* Team Section - Horizontal Scrolling */}
        <Box sx={{ py: 6 }}>
          <Container maxWidth="lg">
            <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography 
                variant="h4" 
                component="h2" 
                fontWeight="bold"
              >
                Meet Our Team
              </Typography>

              {!isMobile && (
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <IconButton 
                    onClick={() => scrollTeam('left')}
                    sx={{ 
                      bgcolor: 'background.paper',
                      boxShadow: theme.shadows[2],
                      '&:hover': { bgcolor: 'background.paper' }
                    }}
                    component={motion.button}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ArrowBackIosIcon fontSize="small" />
                  </IconButton>
                  <IconButton 
                    onClick={() => scrollTeam('right')}
                    sx={{ 
                      bgcolor: 'background.paper',
                      boxShadow: theme.shadows[2],
                      '&:hover': { bgcolor: 'background.paper' }
                    }}
                    component={motion.button}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ArrowForwardIosIcon fontSize="small" />
                  </IconButton>
                </Box>
              )}
            </Box>

            <Box 
              ref={teamScrollRef}
              sx={{ 
                display: 'flex',
                overflowX: 'auto',
                gap: 3,
                pb: 2,
                px: 1,
                scrollbarWidth: 'none',
                '&::-webkit-scrollbar': {
                  display: 'none'
                },
                msOverflowStyle: 'none'
              }}
            >
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  component={motion.div}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -10,
                    boxShadow: theme.shadows[10],
                    transition: { duration: 0.3 }
                  }}
                  sx={{ 
                    width: 280,
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: theme.shadows[2],
                    flex: '0 0 auto',
                    height: '100%'
                  }}
                >
                  <Box sx={{ position: 'relative', pt: '100%' }}>
                    <Avatar
                      src={member.image}
                      alt={member.name}
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        borderRadius: 0
                      }}
                    />
                  </Box>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {member.name}
                    </Typography>
                    <Typography 
                      variant="subtitle2" 
                      color="primary" 
                      gutterBottom
                      sx={{ mb: 2 }}
                    >
                      {member.role}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {member.bio}
                    </Typography>
                    
                    <Divider sx={{ my: 2 }} />
                    
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', pt: 1 }}>
                      <Link href={`mailto:${member.links.email}`} color="inherit">
                        <motion.div whileHover={{ y: -3, color: theme.palette.primary.main }}>
                          <EmailIcon fontSize="small" />
                        </motion.div>
                      </Link>
                      <Link href={member.links.github} target="_blank" color="inherit">
                        <motion.div whileHover={{ y: -3, color: theme.palette.primary.main }}>
                          <GitHubIcon fontSize="small" />
                        </motion.div>
                      </Link>
                      <Link href={member.links.linkedin} target="_blank" color="inherit">
                        <motion.div whileHover={{ y: -3, color: theme.palette.primary.main }}>
                          <LinkedInIcon fontSize="small" />
                        </motion.div>
                      </Link>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>
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