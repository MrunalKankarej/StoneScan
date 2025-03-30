import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Avatar,
  Divider,
  Card,
  CardContent,
  Rating,
} from '@mui/material';
import {
  VerifiedUser as VerifiedUserIcon,
  Speed as SpeedIcon,
  Psychology as PsychologyIcon,
  QueryStats as QueryStatsIcon,
} from '@mui/icons-material';

const featureItems = [
  {
    icon: <VerifiedUserIcon fontSize="large" />,
    title: 'Accurate Detection',
    description: 'Our neural network model achieves 98% accuracy in detecting kidney stones from medical scans.',
  },
  {
    icon: <SpeedIcon fontSize="large" />,
    title: 'Fast Results',
    description: 'Get scan analysis results in seconds, not hours or days.',
  },
  {
    icon: <PsychologyIcon fontSize="large" />,
    title: 'AI-Powered',
    description: 'Advanced machine learning algorithms trained on thousands of medical images.',
  },
  {
    icon: <QueryStatsIcon fontSize="large" />,
    title: 'Detailed Analytics',
    description: 'Comprehensive reports with stone location, size, and density measurement.',
  },
];

const testimonials = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Radiologist',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
    comment: 'StoneScan has revolutionized our workflow. The accuracy is impressive, and it helps us deliver faster results to patients.',
  },
  {
    name: 'Dr. Michael Chen',
    role: 'Urologist',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    comment: 'The detailed stone analysis provides critical information for treatment planning. A game-changer for our practice.',
  },
  {
    name: 'Lisa Williams',
    role: 'Patient',
    avatar: 'https://randomuser.me/api/portraits/women/67.jpg',
    rating: 4,
    comment: 'Having quick access to my scan results through the app reduced my anxiety during my kidney stone treatment journey.',
  },
];

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const About: React.FC = () => {
  const sectionRefs = {
    hero: useRef<HTMLDivElement>(null),
    mission: useRef<HTMLDivElement>(null),
    features: useRef<HTMLDivElement>(null),
    testimonials: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <Box sx={{ overflow: 'hidden' }}>
      {/* Hero Section */}
      <Box 
        ref={sectionRefs.hero}
        className="animated-gradient-bg"
        sx={{ 
          py: 12, 
          textAlign: 'center',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Container maxWidth="md">
            <Typography variant="h2" gutterBottom fontWeight="bold">
              StoneScan
            </Typography>
            <Typography variant="h5" gutterBottom>
              Revolutionizing Kidney Stone Detection with AI
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, mb: 4, maxWidth: '700px', mx: 'auto' }}>
              StoneScan uses advanced neural networks to identify kidney stones in MRI and CT scans with unprecedented accuracy and speed, 
              helping doctors provide better care and patients get faster treatment.
            </Typography>
          </Container>
        </motion.div>
        
        {/* Floating particles for visual effect */}
        {[...Array(5)].map((_, i) => (
          <Box
            key={i}
            component={motion.div}
            className="floating"
            sx={{
              position: 'absolute',
              width: '120px',
              height: '120px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '50%',
              left: `${20 + i * 20}%`,
              top: `${30 + (i % 3) * 20}%`,
              zIndex: 0,
              backdropFilter: 'blur(5px)',
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, i % 2 === 0 ? 10 : -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: i * 0.5,
            }}
          />
        ))}
      </Box>

      {/* Mission Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box ref={sectionRefs.mission}>
              <Typography variant="h3" component="h2" gutterBottom color="primary">
                Our Mission
              </Typography>
              <Typography variant="body1" paragraph>
                At StoneScan, we're committed to bridging the gap between advanced medical imaging and accessible healthcare. 
                Our mission is to provide cutting-edge AI tools that empower both healthcare providers and patients.
              </Typography>
              <Typography variant="body1" paragraph>
                Kidney stones affect millions of people worldwide, and early detection is crucial for effective treatment. 
                We've developed a state-of-the-art neural network trained on thousands of medical scans to identify kidney stones 
                with remarkable accuracy.
              </Typography>
              <Typography variant="body1">
                Our technology allows for faster diagnosis, reduced healthcare costs, and improved patient outcomes through 
                earlier intervention and treatment.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Paper 
                elevation={5} 
                sx={{ 
                  p: 2, 
                  borderRadius: 4, 
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1581595219315-a187f997ba7c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8bWVkaWNhbCx0ZWNobm9sb2d5fHx8fHx8MTY5NTk3NjMwNA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800" 
                  alt="Medical Technology" 
                  style={{ width: '100%', borderRadius: '12px' }}
                />
                <Box 
                  sx={{ 
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: 2,
                    borderBottomLeftRadius: '12px',
                    borderBottomRightRadius: '12px',
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                    color: 'white',
                  }}
                >
                  <Typography variant="subtitle1">
                    Advanced AI for Medical Imaging
                  </Typography>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Features Section */}
      <Box sx={{ bgcolor: 'rgba(33, 150, 243, 0.05)', py: 10 }}>
        <Container maxWidth="lg">
          <Box ref={sectionRefs.features} sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" component="h2" gutterBottom>
              Key Features
            </Typography>
            <Typography variant="subtitle1" sx={{ maxWidth: '700px', mx: 'auto' }}>
              Discover how StoneScan is changing the landscape of kidney stone detection and analysis
            </Typography>
          </Box>
          
          <Grid container spacing={4}>
            {featureItems.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUpVariants}
                >
                  <Paper 
                    elevation={2} 
                    className="hover-scale"
                    sx={{ 
                      p: 3, 
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      borderRadius: 3,
                    }}
                  >
                    <Box sx={{ color: 'primary.main', mb: 2 }}>
                      {feature.icon}
                    </Box>
                    <Typography variant="h6" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Box ref={sectionRefs.testimonials} sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" component="h2" gutterBottom>
            Testimonials
          </Typography>
          <Typography variant="subtitle1" sx={{ maxWidth: '700px', mx: 'auto' }}>
            Hear from doctors and patients who have experienced the StoneScan difference
          </Typography>
        </Box>
        
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card 
                  elevation={3}
                  sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 3,
                    overflow: 'visible',
                    position: 'relative',
                    pt: 4,
                  }}
                >
                  <Avatar
                    src={testimonial.avatar}
                    sx={{
                      width: 80,
                      height: 80,
                      position: 'absolute',
                      top: -30,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      border: '4px solid white',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                    }}
                  />
                  <CardContent sx={{ pt: 5, textAlign: 'center' }}>
                    <Typography variant="h6" gutterBottom>
                      {testimonial.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {testimonial.role}
                    </Typography>
                    <Rating value={testimonial.rating} readOnly precision={0.5} sx={{ mb: 2 }} />
                    <Typography variant="body2" paragraph>
                      "{testimonial.comment}"
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action */}
      <Box 
        sx={{ 
          bgcolor: 'primary.main', 
          color: 'white', 
          py: 8,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Typography variant="h4" gutterBottom>
              Ready to Experience StoneScan?
            </Typography>
            <Typography variant="body1" paragraph sx={{ maxWidth: '700px', mx: 'auto' }}>
              Join the community of healthcare providers leveraging AI to transform medical imaging analysis
            </Typography>
          </motion.div>
        </Container>
        
        {/* Background decoration */}
        <Box 
          sx={{ 
            position: 'absolute',
            top: '10%',
            right: '5%',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            bgcolor: 'rgba(255,255,255,0.1)',
            filter: 'blur(40px)',
          }} 
        />
        <Box 
          sx={{ 
            position: 'absolute',
            bottom: '10%',
            left: '5%',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            bgcolor: 'rgba(255,255,255,0.1)',
            filter: 'blur(60px)',
          }} 
        />
      </Box>
    </Box>
  );
};

export default About; 