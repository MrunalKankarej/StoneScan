import React from 'react';
import { Box, Typography, Paper, Grid, Avatar, Card, CardContent } from '@mui/material';
/*
const Profile: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        User Profile
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Typography variant="body1">
          Profile management functionality will be implemented here.
          
        </Typography>
      </Paper>
    </Box>
  );
};*/
const Profile: React.FC = () => {
  return (
    <Card
      sx={{
        width: 950,
        height: 1200,
        borderRadius: "30px",
        backgroundColor: "#1e8ae05f",
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      {/* Profile Avatar at the Top Left */}
      <Avatar
      src="https://randomuser.me/api/portraits/men/44.jpg"
        sx={{
          width: 200,
          height: 200,
          position: "absolute",
          top: 40,
          left: 40,
        }}
         // Empty src for default avatar
      />

      {/* User Info */}
      <CardContent sx={{ marginLeft: "270px", marginTop: "10px" }}>
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <Typography variant="h6">
              <strong>First Name:</strong> David
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6">
              <strong>Last Name:</strong> Wilson
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6">
              <strong>Contact Details:</strong> david.wilson@gmail.com
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6">
              <strong>Role:</strong> Radiologist
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6">
              <strong>Organization:</strong> ABC Hospital
            </Typography>
          </Grid>
        </Grid>
      </CardContent>

      <CardContent sx={{ marginLeft: "10px" }}>
      <Grid container spacing={10} marginTop={2} >
          <Grid item xs={4}>
            <Typography variant="h6">
              <strong>About Me:</strong> Hi! I am Dr. David Wilson, a radiologist specializing in MRI and CT imaging. I have always admired the power of medical imaging to uncover what happens beneath the layers and help patients and doctors get the answers they need for effective diagnosis. Over my 5 years at ABC Hospital, I have learned that every scan tells a story, and my job is to interpret it with precision and care. I am also passionate about using the latest technology to detect and diagnose conditions early, giving patients and their doctors the best path forward. At the heart of my work is a commitment to accuracy, clarity, and, most importantly, patient well-being.
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Profile; 
