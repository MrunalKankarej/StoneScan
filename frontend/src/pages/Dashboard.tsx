import React, { useState } from 'react';
import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  useTheme, 
  Avatar, 
  IconButton,
  Divider,
  LinearProgress,
  Button,
  CardHeader,
  Badge,
  Chip,
} from '@mui/material';
import { 
  Visibility as VisibilityIcon, 
  TrendingUp as TrendingUpIcon,
  Assessment as AssessmentIcon,
  CloudUpload as CloudUploadIcon,
  ArrowForward as ArrowForwardIcon,
  NotificationsActive as NotificationsActiveIcon,
  Autorenew as AutorenewIcon,
  MoreVert as MoreVertIcon,
  ReportProblem,
  FolderOpen,
  FileOpen,
  FolderOpenSharp,
  FileOpenRounded,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Grid from '../components/CustomGrid';
// import { ReactComponent as ChartSVG } from '../assets/chart.svg';

// Create a placeholder image data URL
//const chartPlaceholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200' width='400' height='200'%3E%3Crect width='400' height='200' fill='%23f5f5f5'/%3E%3Cpath d='M50,150 L100,100 L150,125 L200,80 L250,95 L300,50 L350,75' stroke='%234C9FD5' stroke-width='3' fill='none'/%3E%3Cpath d='M50,180 L100,160 L150,170 L200,130 L250,145 L300,120 L350,140' stroke='%235D72CC' stroke-width='3' fill='none'/%3E%3C/svg%3E";

const Dashboard: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [recentScans] = useState([
    { id: 12341, patient: 'John Smith', date: '2025-03-21', status: 'Pending', result: "", type: 'CT Scan' },
    { id: 12612, patient: 'Emily Johnson', date: '2025-03-21', status: 'Complete', result: 'Negative', type: 'MRI Scan' },
    { id: 12231, patient: 'Michael Brown', date: '2025-03-21', status: 'Complete', result: 'Positive', type: 'MRI Scan' },
    { id: 19775, patient: 'Alexander Jones', date: '2025-03-21', status: 'Complete', result: 'Positive', type: 'CT Scan' },
  ]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const StatCard = ({ title, value, icon, color, subtitle, percentage }: any) => (
    <Card
      component={motion.div}
      variants={itemVariants}
      whileHover={{ y: -5, boxShadow: theme.shadows[10] }}
      sx={{ 
        height: '100%',
        background: `linear-gradient(135deg, ${color}15 0%, ${color}05 100%)`,
        borderLeft: `4px solid ${color}`,
        borderRadius: 2,
        transition: 'all 0.3s',
        overflow: 'visible'
      }}
    >
      <CardContent sx={{ position: 'relative', p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
          <Typography variant="h6" color="text.secondary" fontWeight="medium">
            {title}
          </Typography>
          <Avatar
            component={motion.div}
            whileHover={{ rotate: 15 }}
            sx={{ 
              bgcolor: `${color}20`, 
              color: color,
              width: 48,
              height: 48
            }}
          >
            {icon}
          </Avatar>
        </Box>
        
        <Typography variant="h4" component="div" fontWeight="bold" mb={1} align="center">
          {value}
        </Typography>
        
        
      </CardContent>
    </Card>
  );

  return (
    <Box sx={{ py: 0, height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'auto' }}
      >
        <Box 
          component={motion.div} 
          variants={itemVariants}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 4,
            px: 1,
            pt: 1
          }}
        >
          <Box>
            <Typography 
              variant="h4" 
              sx={{ 
                fontWeight: 'bold', 
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 1
              }}
            >
              Welcome back, Dr. Wilson
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Here's what's happening with your patients today.
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              component={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variant="contained"
              startIcon={<CloudUploadIcon />}
              onClick={() => navigate('/upload')}
              sx={{ 
                borderRadius: 2,
                px: 3,
                boxShadow: theme.shadows[5]
              }}
            >
              Upload New Scan
            </Button>
            
            <IconButton
              component={motion.button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              sx={{ 
                backgroundColor: theme.palette.background.paper,
                boxShadow: theme.shadows[2],
                '&:hover': {
                  backgroundColor: theme.palette.background.paper
                },
              }}
              onClick={() => navigate("/notifications")} // Navigate to notifications popup
    
            >
              <Badge badgeContent={3} color="error">
                <NotificationsActiveIcon />
              </Badge>
            </IconButton>
          </Box>
        </Box>

        {/* Stats Row */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard 
              title="Reviewed Today:" 
              value="14" 
              icon={<AssessmentIcon />} 
              color={theme.palette.primary.main}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard 
              title="Active Files:" 
              value="31" 
              icon={<VisibilityIcon />} 
              color={theme.palette.error.main}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard 
              title="Pending Review:" 
              value="10" 
              icon={<FileOpenRounded />} 
              color={theme.palette.success.main}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard 
              title="Urgent Tags:" 
              value="2" 
              icon={<ReportProblem />} 
              color={theme.palette.warning.main}
            />
          </Grid>
        </Grid>

        {/* Recent Scans and Chart */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Card
              component={motion.div}
              variants={itemVariants}
              sx={{ 
                borderRadius: 2,
                boxShadow: theme.shadows[2],
                height: '100%'
              }}
            >
              <CardHeader
                title="Recent Scan Reports"
                action={
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                }
                sx={{ pb: 0 }}
              />
              <CardContent>
                <Box sx={{ overflowX: 'auto' }}>
                  <Box sx={{ minWidth: 950 }}>
                    <Box sx={{ 
                      display: 'grid', 
                      gridTemplateColumns: 'repeat(6, 1fr)',
                      p: 2,
                      fontWeight: 'bold'
                    }}>
                      <Typography variant="subtitle2" fontWeight="bold">ID</Typography>
                      <Typography variant="subtitle2" fontWeight="bold">Patient</Typography>
                      <Typography variant="subtitle2" fontWeight="bold">Date</Typography>
                      <Typography variant="subtitle2" fontWeight="bold">Type</Typography>
                      <Typography variant="subtitle2" fontWeight="bold">Status</Typography>
                      <Typography variant="subtitle2" fontWeight="bold">Result</Typography>
                    </Box>
                    <Divider />
                    {recentScans.map((scan) => (
                      <Box
                        key={scan.id}
                        component={motion.div}
                        whileHover={{ backgroundColor: theme.palette.action.hover }}
                        sx={{ 
                          display: 'grid', 
                          gridTemplateColumns: 'repeat(6, 1fr)',
                          p: 2,
                          alignItems: 'center',
                          borderBottom: `1px solid ${theme.palette.divider}`,
                          cursor: 'pointer',
                        }}
                        onClick={() => navigate(`/scan/${scan.id}`)}
                      >
                        <Typography variant="body2">#{scan.id}</Typography>
                        <Typography variant="body2">{scan.patient}</Typography>
                        <Typography variant="body2">{scan.date}</Typography>
                        <Typography variant="body2">{scan.type}</Typography>
                        <Box>
                          <Chip 
                            label={scan.status} 
                            size="small" 
                            color={scan.status === 'Complete' ? 'success' : 'warning'}
                            sx={{ height: 24 }} 
                          />
                        </Box>
                        <Box>
                          <Chip 
                            label={scan.result} 
                            size="small" 
                            color={scan.result === 'Positive' ? 'error' : ''}
                            sx={{ height: 24 }} 
                          />
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                  <Button
                    endIcon={<ArrowForwardIcon />}
                    onClick={() => navigate('/history')}
                    color="inherit"
                    sx={{ textTransform: 'none' }}
                  >
                    View All Scans
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </motion.div>
    </Box>
  );
};

export default Dashboard; 
