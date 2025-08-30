import React, { useState } from 'react';
import { 
  Box, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText, 
  IconButton, 
  useTheme, 
  useMediaQuery,
  Typography,
  Divider
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

const Navigation = ({ currentSection, onSectionChange }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const sections = [
    { id: 'yo', label: 'Yo' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'cv', label: 'CV' },
    { id: 'art', label: 'Art' },
    { id: 'contacto', label: 'Contacto' }
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSectionClick = (sectionId) => {
    onSectionChange(sectionId);
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  const drawerContent = (
    <Box sx={{ 
      width: isMobile ? 250 : 280, 
      p: 2,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start'
    }}>
      <Typography 
        variant="h6" 
        component="h1"
        sx={{ 
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 300,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          mb: 2,
          textAlign: 'center'
        }}
      >
        Ignacio Sanmartino
      </Typography>
      
      <Divider sx={{ mb: 1 }} />
      
      <List sx={{ flexGrow: 0, py: 0 }}>
        {sections.map((section) => (
          <ListItem 
            key={section.id}
            button
            onClick={() => handleSectionClick(section.id)}
            sx={{
              py: 1,
              mb: 0,
              backgroundColor: 'transparent',
              pl: 3,
              transition: 'all 0.3s ease',
              position: 'relative',
              '&:hover': {
                backgroundColor: '#f9f9f9'
              }
            }}
          >
            <ListItemText
              primary={section.label}
              sx={{
                '& .MuiListItemText-primary': {
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: currentSection === section.id ? 500 : 300,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  fontSize: '0.8rem'
                }
              }}
            />
            {currentSection === section.id && (
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  backgroundColor: '#000',
                  position: 'absolute',
                  right: 16,
                  top: '50%',
                  transform: 'translateY(-50%)'
                }}
              />
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* Botón móvil */}
      {isMobile && (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ 
            position: 'fixed',
            top: 20,
            left: 20,
            zIndex: 1200,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 1)'
            }
          }}
        >
          <MenuIcon />
        </IconButton>
      )}

      {/* Drawer móvil */}
      {isMobile && (
        <Drawer
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better mobile performance
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box',
              backgroundColor: '#fff',
              border: 'none'
            }
          }}
        >
          {drawerContent}
        </Drawer>
      )}

      {/* Sidebar desktop */}
      {!isMobile && (
        <Box
          sx={{
            width: 280,
            position: 'fixed',
            left: 0,
            top: 0,
            height: '100vh',
            backgroundColor: '#fff',
            borderRight: '1px solid #e0e0e0',
            zIndex: 1000,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {drawerContent}
        </Box>
      )}
    </>
  );
};

export default Navigation;
