import React from 'react';
import { Card, CardContent, Grid, Typography, Button, Container, Box, useTheme, ThemeProvider, createTheme } from '@mui/material';
import { Article, School } from '@mui/icons-material'; // Import MUI icons
import { keyframes } from '@emotion/react'; // For animations
import { useColorMode } from '@docusaurus/theme-common'; // Correct import for Docusaurus v2

// Define animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const FeatureList = [
  {
    title: 'Docs',
    icon: <Article fontSize="large" sx={{ color: '#e53e3e' }} />, // Consistent red icon
    description: 'Access detailed documentation to get started with our platform and tools.',
    link: '/Documentation/docs/docs/WelcomeDoc',
  },
  {
    title: 'Tutorials',
    icon: <School fontSize="large" sx={{ color: '#e53e3e' }} />, // Consistent red icon
    description: 'Step-by-step tutorials to help you master our platform and technologies.',
    link: '/Documentation/docs/tutorials/WelcomeTutorial',
  },
];

function FeatureCard({ icon, title, description, link }) {
  const theme = useTheme(); // Use MUI theme for dark mode support

  return (
    <Card
      sx={{
        maxWidth: 345,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 3,
        boxShadow: theme.palette.mode === 'dark' ? '0 4px 20px rgba(255, 255, 255, 0.1)' : '0 4px 20px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        animation: `${fadeIn} 0.5s ease-out`,
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: theme.palette.mode === 'dark' ? '0 8px 24px rgba(255, 255, 255, 0.2)' : '0 8px 24px rgba(0, 0, 0, 0.2)',
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3, animation: `${pulse} 2s infinite` }}>
          {icon}
        </Box>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 700, color: 'text.primary', mb: 2 }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
          {description}
        </Typography>
        <Button
          variant="outlined"
          fullWidth
          href={link}
          sx={{
            color: '#e53e3e', // Consistent red color
            borderColor: '#e53e3e',
            fontWeight: 600,
            transition: 'background-color 0.3s ease, color 0.3s ease',
            '&:hover': {
              bgcolor: '#e53e3e', // Consistent red color
              color: 'white',
              borderColor: '#e53e3e',
            },
          }}
        >
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
}

export default function HomepageFeatures() {
  const { colorMode } = useColorMode(); // Get Docusaurus dark mode state
  const theme = createTheme({
    palette: {
      mode: colorMode === 'dark' ? 'dark' : 'light', // Sync MUI theme with Docusaurus dark mode
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ py: 10, bgcolor: 'background.paper', background: colorMode === 'dark' ? 'linear-gradient(145deg, #1e1e1e, #2d2d2d)' : 'linear-gradient(145deg, #f9fafb, #ffffff)' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            sx={{ fontWeight: 800, mb: 6, color: 'text.primary', animation: `${fadeIn} 0.5s ease-out` }}
          >
            Explore Our Resources
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {FeatureList.map((props, idx) => (
              <Grid item key={idx} xs={12} sm={6} md={4}>
                <FeatureCard {...props} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Box sx={{ py: 10, bgcolor: 'background.default', textAlign: 'center' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{ fontWeight: 800, mb: 3, color: 'text.primary', animation: `${fadeIn} 0.5s ease-out` }}
          >
            Start Learning Today
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 5, color: 'text.secondary', maxWidth: 600, mx: 'auto', animation: `${fadeIn} 0.5s ease-out` }}
          >
            Join thousands of students and unlock your potential with Ghumman Tech.
          </Typography>
          <Button
            variant="contained"
            size="large"
            href="https://ghummantech.com/Categories/Courses"
            sx={{
              bgcolor: '#e53e3e', // Consistent red color
              color: 'white',
              fontWeight: 700,
              px: 6,
              py: 1.5,
              transition: 'background-color 0.3s ease, transform 0.3s ease',
              animation: `${pulse} 2s infinite`,
              '&:hover': {
                bgcolor: '#c53030', // Darker red on hover
                transform: 'scale(1.05)',
              },
            }}
          >
            Explore Courses
          </Button>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
