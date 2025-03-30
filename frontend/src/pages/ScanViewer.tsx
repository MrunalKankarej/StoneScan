import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Paper } from '@mui/material';

const ScanViewer: React.FC = () => {
  const { scanId } = useParams<{ scanId: string }>();

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Scan Viewer - {scanId}
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Typography variant="body1">
          Scan viewer and analysis functionality will be implemented here.
        </Typography>
      </Paper>
    </Box>
  );
};

export default ScanViewer; 