import React from 'react';
import { Card, CardContent, Grid, Typography, Button, Container, Box } from '@mui/material';
import { Article, School } from '@mui/icons-material'; // Import MUI icons
import styles from './styles.module.css'; // Import the CSS module

const FeatureList = [
  {
    title: 'Docs',
    icon: <Article fontSize="large" sx={{ color: '#FF6B6B' }} />, // Soft red icon
    description: 'Access detailed documentation to get started with our platform and tools.',
    link: '/Documentation/docs/docs/WelcomeDoc',
  },
  {
    title: 'Tutorials',
    icon: <School fontSize="large" sx={{ color: '#FF6B6B' }} />, // Soft red icon
    description: 'Step-by-step tutorials to help you master our platform and technologies.',
    link: '/Documentation/docs/tutorials/WelcomeTutorial',
  },
];

function FeatureCard({ icon, title, description, link }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 3,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
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
            color: '#FF6B6B',
            borderColor: '#FF6B6B',
            fontWeight: 600,
            '&:hover': {
              bgcolor: '#FF6B6B',
              color: 'white',
              borderColor: '#FF6B6B',
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
  return (
    <>
      <Box sx={{ py: 10, bgcolor: 'background.paper', background: 'linear-gradient(145deg, #f9fafb, #ffffff)' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" sx={{ fontWeight: 800, mb: 6, color: 'text.primary' }}>
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
          <Typography variant="h2" sx={{ fontWeight: 800, mb: 3, color: 'text.primary' }}>
            Start Learning Today
          </Typography>
          <Typography variant="body1" sx={{ mb: 5, color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>
            Join thousands of students and unlock your potential with Ghumman Tech.
          </Typography>
          <Button
            variant="contained"
            size="large"
            href="/Categories/Courses"
            sx={{
              bgcolor: '#FF6B6B',
              color: 'white',
              fontWeight: 700,
              px: 6,
              py: 1.5,
              '&:hover': {
                bgcolor: '#E64A4A', // Darker red on hover
              },
            }}
          >
            Explore Courses
          </Button>
        </Container>
      </Box>
    </>
  );
}