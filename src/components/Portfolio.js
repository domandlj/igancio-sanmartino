import React, { useState, useEffect } from 'react';
import { Box, Typography, Container } from '@mui/material';

const Portfolio = () => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => {
        if (prev === '...') return '';
        return prev + '.';
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);


  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography 
        variant="h2" 
        component="h1" 
        sx={{ 
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 300,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          mb: 6,
          textAlign: 'center'
        }}
      >
        Portfolio
      </Typography>
      
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        minHeight: '400px'
      }}>
        <Typography 
          variant="h4" 
          sx={{ 
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 300,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: '#666',
            textAlign: 'center'
          }}
        >
          Próximamente{dots}
        </Typography>
      </Box>
    </Container>
  );
};

export default Portfolio;
