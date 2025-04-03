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
        sx={{
          width: 200,
          height: 200,
          position: "absolute",
          top: 40,
          left: 40,
        }}
        src="" // Empty src for default avatar
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
    </Card>
  );
};

export default Profile; 
