import React, { useState } from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Importar componentes
import Navigation from './components/Navigation';
import Yo from './components/Yo';
import Portfolio from './components/Portfolio';
import Art from './components/Art';
import CV from './components/CV';
import Contacto from './components/Contacto';

// Crear tema personalizado con Swiss design
const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#666666',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#000000',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: 'Helvetica, Arial, sans-serif',
    h1: {
      fontWeight: 300,
      letterSpacing: '0.1em',
    },
    h2: {
      fontWeight: 300,
      letterSpacing: '0.1em',
    },
    h3: {
      fontWeight: 400,
      letterSpacing: '0.05em',
    },
    h4: {
      fontWeight: 400,
      letterSpacing: '0.05em',
    },
    h5: {
      fontWeight: 400,
      letterSpacing: '0.05em',
    },
    h6: {
      fontWeight: 400,
      letterSpacing: '0.05em',
    },
    body1: {
      fontWeight: 300,
      lineHeight: 1.6,
    },
    body2: {
      fontWeight: 300,
      lineHeight: 1.6,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: 'Helvetica, Arial, sans-serif',
          backgroundColor: '#ffffff',
          color: '#000000',
        },
      },
    },
  },
});

function App() {
  const [currentSection, setCurrentSection] = useState('yo');
  const themeInstance = useTheme();
  const isMobile = useMediaQuery(themeInstance.breakpoints.down('md'));

  const renderSection = () => {
    switch (currentSection) {
      case 'yo':
        return <Yo />;
      case 'portfolio':
        return <Portfolio />;
      case 'art':
        return <Art />;
      case 'cv':
        return <CV />;
      case 'contacto':
        return <Contacto />;
      default:
        return <Yo />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <Navigation 
          currentSection={currentSection} 
          onSectionChange={setCurrentSection} 
        />
        
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            ml: isMobile ? 0 : '280px', // Margen para el sidebar en desktop
            backgroundColor: '#ffffff',
            minHeight: '100vh',
            pt: isMobile ? 8 : 0 // Padding top para móvil por el botón de menú
          }}
        >
          {renderSection()}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
