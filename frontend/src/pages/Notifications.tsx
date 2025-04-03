import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

interface Notification {
  id: number;
  title: string;
  message: string;
  type: "success" | "info" | "warning" | "error";
}

const Notifications: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  // Load mild, professional notifications
  useEffect(() => {
    setNotifications([
      {
        id: 1,
        title: ">> Update in protocol for contrast-enhanced MRI studies",
        message: "A new protocol for contrast-enhanced MRI studies has been implemented. Review the updated guidelines in the department portal before your next shift.",
        type: "warning",
      },
      {
        id: 2,
        title: ">> Upcoming Appointment",
        message: "You have a scheduled consultation with Dr. Smith on April 5th at 10:30 AM.",
        type: "info",
      },
      {
        id: 3,
        title: ">> Pending Reports",
        message: "You have 2 pending radiology reports that require completion . Please finalize them as soon as possible.",
        type: "error",
      },
      {
        id: 4,
        title: ">> Routine Test Results Available",
        message: "Your recent lab test results are now accessible in the patient portal.",
        type: "success",
      },
    ]);
  }, []);

  // Define colors for a mild and professional look
  const getColor = (type: Notification["type"]) => {
    switch (type) {
      case "success":
        return "#81C784"; // Light Green
      case "info":
        return "#64B5F6"; // Light Blue
      case "warning":
        return "#FFD54F"; // Soft Yellow
      case "error":
        return "#E57373"; // Soft Red (not alarming)
      default:
        return "#B0BEC5"; // Neutral Gray
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3, padding: 2 }}>
      <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: 3 }}>
        Notifications
      </Typography>

      <Card sx={{ width: 950, height: "auto", padding: 3, backgroundColor: "#F5F5F5", borderRadius: 3 }}>
        <CardContent>
          {notifications.map((notification) => (
            <Box
              key={notification.id}
              sx={{
                backgroundColor: getColor(notification.type),
                padding: 2,
                borderRadius: 2,
                marginBottom: 2,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {notification.title}
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "1.2rem", marginTop: 1 }}>
                {notification.message}
              </Typography>
            </Box>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
};

export default Notifications;
