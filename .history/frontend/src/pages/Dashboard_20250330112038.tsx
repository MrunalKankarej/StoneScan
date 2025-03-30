import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Grid,
  Paper,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
} from '@mui/material';
import {
  CloudUpload as UploadIcon,
  History as HistoryIcon,
  Person as PersonIcon,
} from '@mui/icons-material';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  
  // Placeholder data for recent scans
  const recentScans = [
    {
      id: '1',
      date: '2025-03-28',
      type: 'MRI',
      status: 'completed',
      thumbnail: 'https://via.placeholder.com/150?text=MRI+Scan',
    },
    {
      id: '2',
      date: '2025-03-25',
      type: 'CT',
      status: 'pending',
      thumbnail: 'https://via.placeholder.com/150?text=CT+Scan',
    },
    {
      id: '3',
      date: '2025-03-22',
      type: 'MRI',
      status: 'completed',
      thumbnail: 'https://via.placeholder.com/150?text=MRI+Scan+2',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'success';
      case 'pending':
        return 'warning';
      case 'error':
        return 'error';
      default:
        return 'default';
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Welcome to StoneScan
      </Typography>
      
      <Grid container spacing={3}>
        {/* Quick Actions */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Quick Actions
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Button
                variant="contained"
                startIcon={<UploadIcon />}
                onClick={() => navigate('/upload')}
                fullWidth
              >
                Upload New Scan
              </Button>
              <Button
                variant="outlined"
                startIcon={<HistoryIcon />}
                onClick={() => navigate('/history')}
                fullWidth
              >
                View History
              </Button>
              <Button
                variant="outlined"
                startIcon={<PersonIcon />}
                onClick={() => navigate('/profile')}
                fullWidth
              >
                Profile Settings
              </Button>
            </Box>
          </Paper>
        </Grid>

        {/* Recent Scans */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Recent Scans
            </Typography>
            <Grid container spacing={2}>
              {recentScans.map((scan) => (
                <Grid item xs={12} sm={6} md={4} key={scan.id}>
                  <Card 
                    sx={{ cursor: 'pointer' }}
                    onClick={() => navigate(`/viewer/${scan.id}`)}
                  >
                    <CardMedia
                      component="img"
                      height="140"
                      image={scan.thumbnail}
                      alt={`${scan.type} scan`}
                    />
                    <CardContent>
                      <Typography variant="subtitle1" gutterBottom>
                        {scan.type} Scan
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {new Date(scan.date).toLocaleDateString()}
                      </Typography>
                      <Chip
                        label={scan.status}
                        color={getStatusColor(scan.status) as any}
                        size="small"
                        sx={{ mt: 1 }}
                      />
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard; 