import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Paper, Avatar } from '@mui/material';

const Yo = () => {
  const [scrollY, setScrollY] = useState(0);

  const artImages = [
    '/paints/534277193_18072304991318749_2350819077674632536_n.jpg',
    '/paints/523639102_18069825071318749_9136840476944759819_n.jpg',
    '/paints/523048672_18069823736318749_3887564867151893277_n.jpg',
    '/paints/524109915_18069823745318749_5283675476377141344_n.jpg',
    '/paints/471321057_471573215597938_8624730140379473117_n.jpg',
    '/paints/466382059_435109302719540_2661137888099319379_n.jpg',
    '/paints/455804179_1169686254141132_2069285212170611540_n.jpg',
    '/paints/447917564_2244377505932218_5124396310158929566_n.jpg',
    '/paints/446733085_3707425489537183_6997892772990532935_n.jpg',
    '/paints/431748668_1354671161916431_3111489142215229551_n.jpg',
    '/paints/431382764_241480965692624_1786091156779687216_n.jpg',
    '/paints/430346806_781084827226834_4338679371612996228_n.jpg',
    '/paints/430252458_404577285494300_4566860345288525323_n.jpg'
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0, alignItems: 'center' }}>
        <Avatar
          src="/me.png"
          alt="Ignacio Sanmartino"
          sx={{
            width: 200,
            height: 200,
            mb: 4,
            border: '2px solid #e0e0e0'
          }}
        />
        
        <Typography 
          variant="h2" 
          component="h1" 
          sx={{ 
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 300,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            mb: 0,
            textAlign: 'center',
            lineHeight: 1
          }}
        >
          Ignacio
        </Typography>
        
        <Typography 
          variant="h2" 
          component="h1" 
          sx={{ 
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 300,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            mb: 2,
            textAlign: 'center',
            lineHeight: 1
          }}
        >
          Sanmartino
        </Typography>
        
        <Typography 
          variant="h6" 
          component="h2" 
          sx={{ 
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 400,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            mb: 2,
            textAlign: 'center',
            lineHeight: 1
          }}
        >
          Arquitecto
        </Typography>
        
        <Typography 
          variant="body2" 
          component="h3" 
          sx={{ 
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 200,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            mb: 4,
            textAlign: 'center',
            color: '#666',
            lineHeight: 1,
            fontSize: '0.8rem'
          }}
        >
          Córdoba, AR
        </Typography>
        
                <Typography 
          variant="body1" 
          sx={{ 
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontSize: '1.1rem',
            lineHeight: 1.8,
            fontWeight: 300,
            mb: 2,
            textAlign: 'justify',
            maxWidth: '800px'
          }}
        >
          Curioso y comprometido, abordo cada proyecto con dedicación y me centro en obtener resultados meticulosos y de alta calidad. Me desenvuelvo en entornos colaborativos, fomentando la confianza y apoyando el crecimiento del equipo.
        </Typography>
        
        <Typography 
          variant="body1" 
          sx={{ 
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontSize: '1.1rem',
            lineHeight: 1.8,
            fontWeight: 300,
            mb: 2,
            textAlign: 'justify',
            maxWidth: '800px'
          }}
        >
          Como arquitecto, me atraen los proyectos a gran escala, los proyectos urbanos, la arquitectura residencial y el diseño de paisajes. Busco un equilibrio entre integridad, funcionalidad y calidad estética, garantizando que cada diseño sea coherente, con propósito y atractivo.
        </Typography>
        
        <Typography 
          variant="body1" 
          sx={{ 
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontSize: '1.1rem',
            lineHeight: 1.8,
            fontWeight: 300,
            textAlign: 'justify',
            maxWidth: '800px'
          }}
        >
          Con una sólida visión creativa y sensibilidad al contexto, concibo el diseño como una forma de realzar y celebrar los espacios existentes. Acepto los retos que amplían mis habilidades y perspectiva, abordando cada oportunidad con el compromiso de generar un impacto duradero.
        </Typography>
      </Box>

      {/* Agujeros cuadrados fijos con efecto parallax - solo en sección Yo */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 50
        }}
      >
        {/* Agujero 1 - pequeño, esquina superior izquierda */}
        <Box
          sx={{
            position: 'absolute',
            top: '4%',
            left: '10%',
            width: 400,
            height: 50,
            overflow: 'hidden',
            border: '1px solid #e0e0e0',
            backgroundColor: 'transparent'
          }}
        >
          <Box
            component="img"
            src={artImages[0]}
            sx={{
              width: '600px',
              height: 'auto',
              maxWidth: 'none',
              maxHeight: 'none',
              objectFit: 'none',
              transform: `translate(0px, ${scrollY+3000 * -0.15}px)`,
              filter: 'grayscale(0.3)'
            }}
          />
        </Box>

        {/* Agujero 2 - grande, esquina superior derecha */}
        <Box
          sx={{
            position: 'absolute',
            top: '3%',
            right: '3%',
            width: 50,
            height: 200,
            overflow: 'hidden',
            border: '1px solid #e0e0e0',
            backgroundColor: 'transparent'
          }}
        >
          <Box
            component="img"
            src={artImages[1]}
            sx={{
              width: '200px',
              height: 'auto',
              maxWidth: 'none',
              maxHeight: 'none',
              objectFit: 'none',
              transform: `translate(0px, ${scrollY * 0.3}px)`,
              filter: 'grayscale(0.3)'
            }}
          />
        </Box>

        {/* Agujero 3 - mediano, lado izquierdo lejos del texto */}
        <Box
          sx={{
            position: 'absolute',
            top: '30%',
            left: '5%',
            width: 60,
            height: 60,
            overflow: 'hidden',
            border: '1px solid #e0e0e0',
            backgroundColor: 'transparent'
          }}
        >
          <Box
            component="img"
            src={artImages[2]}
            sx={{
              width: '500px',
              height: 'auto',
              maxWidth: 'none',
              maxHeight: 'none',
              objectFit: 'none',
              transform: `translate(-30px, ${scrollY * -0.2}px)`,
              filter: 'grayscale(0.3)'
            }}
          />
        </Box>

        {/* Agujero 4 - pequeño, esquina inferior derecha */}
        <Box
          sx={{
            position: 'absolute',
            bottom: '45%',
            right: '80%',
            width: 45,
            height: 45,
            overflow: 'hidden',
            border: '1px solid #e0e0e0',
            backgroundColor: 'transparent'
          }}
        >
          <Box
            component="img"
            src={artImages[3]}
            sx={{
              width: '500px',
              height: 'auto',
              maxWidth: 'none',
              maxHeight: 'none',
              objectFit: 'none',
              transform: `translate(-40px, ${scrollY * -0.1}px)`,
              filter: 'grayscale(0.3)'
            }}
          />
        </Box>

        {/* Agujero 5 - mediano, lado derecho lejos del texto */}
        <Box
          sx={{
            position: 'absolute',
            bottom: '40%',
            right: '8%',
            width: 70,
            height: 70,
            overflow: 'hidden',
            border: '1px solid #e0e0e0',
            backgroundColor: 'transparent'
          }}
        >
          <Box
            component="img"
            src={artImages[4]}
            sx={{
              width: '400px',
              height: 'auto',
              maxWidth: 'none',
              maxHeight: 'none',
              objectFit: 'none',
              transform: `translate(-10px, ${scrollY * -0.25}px)`,
              filter: 'grayscale(0.3)'
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Yo;
