import React from 'react';
import { Box, Typography, Container, Grid, Paper, Link } from '@mui/material';
import { Email, Phone, LocationOn, LinkedIn, Instagram } from '@mui/icons-material';

const Contacto = () => {
  const contactInfo = [
    {
      icon: <Email />,
      title: 'Email',
      value: 'arq.ignaciosanmartino@gmail.com',
      link: 'mailto:arq.ignaciosanmartino@gmail.com'
    },
    {
      icon: <Phone />,
      title: 'Teléfono',
      value: '+54 9 3564 66-4901',
      link: 'tel:+5493564664901'
    },
    {
      icon: <LocationOn />,
      title: 'Ubicación',
      value: 'Córdoba, Argentina',
      link: null
    }
  ];

  const socialMedia = [
    {
      icon: <LinkedIn />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/ignaciosanmartino',
      link: 'https://linkedin.com/in/ignaciosanmartino'
    },
    {
      icon: <Instagram />,
      title: 'Instagram',
      value: '@ignaciosanmartino',
      link: 'https://instagram.com/ignaciosanmartino'
    }
  ];

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
        Contacto
      </Typography>
      

      
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {contactInfo.map((info, index) => (
          <Box 
            key={index}
            sx={{ 
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Typography 
              variant="body1" 
              component="span"
              sx={{ 
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontSize: '0.9rem',
                mr: 2
              }}
            >
              {info.title}:
            </Typography>
            {info.link ? (
              <Link 
                href={info.link}
                sx={{ 
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 300,
                  fontSize: '1rem',
                  textDecoration: 'none',
                  color: '#333',
                  '&:hover': {
                    color: '#666'
                  }
                }}
              >
                {info.value}
              </Link>
            ) : (
              <Typography 
                variant="body1" 
                sx={{ 
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 300,
                  fontSize: '1rem'
                }}
              >
                {info.value}
              </Typography>
            )}
          </Box>
        ))}
        
        {socialMedia.map((social, index) => (
          <Box 
            key={`social-${index}`}
            sx={{ 
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Typography 
              variant="body1" 
              component="span"
              sx={{ 
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontSize: '0.9rem',
                mr: 2
              }}
            >
              {social.title}:
            </Typography>
            <Link 
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ 
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 300,
                fontSize: '1rem',
                textDecoration: 'none',
                color: '#333',
                '&:hover': {
                  color: '#666'
                }
              }}
            >
              {social.value}
            </Link>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Contacto;
