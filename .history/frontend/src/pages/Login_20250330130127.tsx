import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Card, 
  CardContent, 
  Container,
  Link,
  InputAdornment,
  IconButton,
  Divider,
  useTheme,
  Alert,
} from '@mui/material';
import { 
  Email as EmailIcon,
  Lock as LockIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
  Google as GoogleIcon,
  GitHub as GitHubIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import AnimatedBackground from '../components/AnimatedBackground';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Validation
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    try {
      setIsLoading(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, just hard-code successful login
      // In a real app, this would call your authentication API
      localStorage.setItem('token', 'demo-token');
      
      // Navigate to dashboard
      navigate('/');
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatedBackground variant="login">
      <Container maxWidth="xs" sx={{ py: 8, height: '100vh', display: 'flex', alignItems: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ width: '100%' }}
        >
          <Box 
            sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              mb: 4
            }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.2
              }}
            >
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 3,
                  boxShadow: theme.shadows[4],
                }}
              >
                <Typography variant="h4" component="span" color="white" fontWeight="bold">
                  S
                </Typography>
              </Box>
            </motion.div>
            
            <Typography
              component="h1"
              variant="h4"
              gutterBottom
              fontWeight="bold"
              align="center"
            >
              Welcome to StoneScan
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              Sign in to access your dashboard
            </Typography>
          </Box>

          <Card
            component={motion.div}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            sx={{ 
              borderRadius: 4,
              boxShadow: theme.shadows[8],
              overflow: 'visible',
              p: 0.5
            }}
          >
            <CardContent sx={{ p: 3 }}>
              {error && (
                <Alert 
                  severity="error" 
                  sx={{ mb: 3, borderRadius: 2 }}
                  component={motion.div}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {error}
                </Alert>
              )}
              
              <Box component="form" onSubmit={handleLogin} noValidate>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ mb: 2 }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon color="action" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{ mb: 3 }}
                />
                
                <Box sx={{ textAlign: 'right', mb: 2 }}>
                  <Link
                    component={motion.a}
                    whileHover={{ color: theme.palette.primary.dark }}
                    href="#"
                    variant="body2"
                    underline="hover"
                  >
                    Forgot password?
                  </Link>
                </Box>
                
                <Button
                  component={motion.button}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  disabled={isLoading}
                  sx={{ 
                    mt: 1, 
                    mb: 3, 
                    py: 1.5, 
                    borderRadius: 2, 
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {isLoading ? 'Signing in...' : 'Sign In'}
                  
                  {/* Hover effect */}
                  {!isLoading && (
                    <Box
                      component={motion.div}
                      layoutId="loginButtonBackground"
                      initial={{ opacity: 0 }}
                      whileHover={{ 
                        opacity: 1,
                        transition: { duration: 0.3 }
                      }}
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: `linear-gradient(90deg, ${theme.palette.primary.main}80 0%, ${theme.palette.primary.dark} 100%)`,
                        zIndex: -1,
                      }}
                    />
                  )}
                </Button>
                
                <Divider sx={{ my: 2 }}>
                  <Typography variant="body2" color="text.secondary">
                    OR
                  </Typography>
                </Divider>
                
                <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                  <Button
                    component={motion.button}
                    whileHover={{ y: -3 }}
                    fullWidth
                    variant="outlined"
                    startIcon={<GoogleIcon />}
                    sx={{ py: 1, borderRadius: 2 }}
                  >
                    Google
                  </Button>
                  <Button
                    component={motion.button}
                    whileHover={{ y: -3 }}
                    fullWidth
                    variant="outlined"
                    startIcon={<GitHubIcon />}
                    sx={{ py: 1, borderRadius: 2 }}
                  >
                    GitHub
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
          
          <Box sx={{ mt: 3, textAlign: 'center' }}>
            <Typography variant="body2" color="text.secondary">
              Don't have an account?{' '}
              <Link
                component={motion.a}
                whileHover={{ color: theme.palette.primary.dark }}
                href="#"
                variant="body2"
                fontWeight="medium"
              >
                Sign up
              </Link>
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </AnimatedBackground>
  );
};

export default Login; 