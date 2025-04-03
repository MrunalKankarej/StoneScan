import React from "react";
import { Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Chip } from "@mui/material";

const patientData = [
  {
    date: "21/03/2025",
    records: [
      { id: 12341, name: "John Smith", scan: "Kidney CT", status: "Pending", urgent: "Urgent", result: "Positive", time: "09:45:13" },
      { id: 12612, name: "Emily Johnson", scan: "Kidney MRI", status: "Pending", urgent: "Not-Urgent", result: "Negative", time: "10:42:12" },
      { id: 12231, name: "Michael Brown", scan: "Kidney MRI", status: "Complete", urgent: "Not-Urgent", result: "Positive", time: "11:01:02" },
      { id: 19775, name: "Alexander Jones", scan: "Kidney CT", status: "Complete", urgent: "Urgent", result: "Positive", time: "11:21:21" },
      { id: 15025, name: "Michael Bixby", scan: "Kidney MRI", status: "Complete", urgent: "Not-Urgent", result: "Negative", time: "13:10:12" },
   ],
  },
  {
    date: "20/03/2025",
    records: [
      { id: 12341, name: "Clement Maison", scan: "Kidney CT", status: "Complete", urgent: "Urgent", result: "Positive", time: "12:03:42" },
      { id: 12612, name: "Janine Cooper", scan: "Kidney CT", status: "Complete", urgent: "Not-Urgent", result: "Negative", time: "18:00:49" },
    ],
  },
];

const History: React.FC = () => {
    return (
      <Box display="flex" flexWrap="wrap" gap={3} justifyContent="center">
        {patientData.map((section, index) => (
          <Card key={index} sx={{ width: 1050, height: "auto", borderRadius: 5, boxShadow: 3 }}>
            <CardContent>
              <Typography
                variant="h5"
                sx={{
                  backgroundColor: "#AFC9E6",
                  padding: 2,
                  fontWeight: "bold",
                  borderRadius: "10px 10px 0 0",
                  textAlign: "center",
                }}
              >
                {section.date}
              </Typography>
              <TableContainer component={Paper} sx={{ borderRadius: 2, overflow: "hidden", marginTop: 2 }}>
                <Table>
                  <TableHead sx={{ backgroundColor: "#DCE4F0" }}>
                    <TableRow>
                      <TableCell><b>ID</b></TableCell>
                      <TableCell><b>Name</b></TableCell>
                      <TableCell><b>Scan</b></TableCell>
                      <TableCell><b>Status</b></TableCell>
                      <TableCell><b>Urgent</b></TableCell>
                      <TableCell><b>Result</b></TableCell>
                      <TableCell><b>Time</b></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {section.records.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.scan}</TableCell>
                        <TableCell>
                        <Box>
                            <Chip 
                             label={row.status} 
                             size="small" 
                             color={row.status === 'Complete' ? 'success' : 'error'}
                             sx={{ height: 24 }} 
                            />
                        </Box>
                        </TableCell>
                        
                        <TableCell>
                        <Box>
                          <Chip 
                            label={row.urgent} 
                            size="small" 
                            color={row.urgent === 'Urgent' ? "warning" : ''}
                            sx={{ height: 24 }} 
                          />
                        </Box>
                        </TableCell>
                        <TableCell>
                        <Box>
                          <Chip 
                            label={row.result} 
                            size="small" 
                            color={row.result === 'Positive' ? 'error' : ''}
                            sx={{ height: 24 }} 
                          />
                        </Box>
                        </TableCell>
                        <TableCell>{row.time}</TableCell>
                      </TableRow>
                      
                    ))}
                  </TableBody>
                </Table>
                
              </TableContainer>
            </CardContent>
          </Card>
        ))}
      </Box>    
  );
};

export default History;


