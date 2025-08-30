import React from 'react';
import { Box, Typography, Container, Grid, Paper, Divider, Button } from '@mui/material';
import { LinkedIn, Download } from '@mui/icons-material';

const CV = () => {
  const experience = [
    {
      year: 'Noviembre 2023 - Noviembre 2024',
      title: 'Arquitecto | Diseñador',
      company: 'Estudio Búlgaro - Profesional independiente',
      location: 'Córdoba, Argentina. Híbrido',
      description: 'Desarrollé y concebí proyectos arquitectónicos, desde reformas de interiores hasta viviendas unifamiliares. Utilicé tecnologías BIM para la elaboración de documentación técnica y planos.',
      skills: ['Modelado de información de construcción (BIM)', 'Revit', 'Architecture Development', 'Modelado 3D', 'Trabajo en equipo']
    },
    {
      year: 'Agosto 2023 - Diciembre 2023',
      title: 'Arquitecto Freelance | Diseñador Gráfico',
      company: 'Profesional independiente',
      location: 'Córdoba, Argentina. En remoto',
      description: 'Creé legajos técnicos y presentaciones gráficas para clientes e instituciones. Utilicé Adobe Creative Suite y AutoCAD para obtener una documentación clara y profesional.',
      skills: ['Autogestión', 'Dibujo arquitectónico', 'AutoCAD', 'Adobe Photoshop', 'Diseño gráfico']
    },
    {
      year: 'Junio 2023 - Octubre 2023',
      title: 'Arquitecto | Diseñador',
      company: 'Universidad Siglo 21 - Contrato temporal',
      location: 'Córdoba, Argentina. Híbrido',
      description: 'Colaboré con arquitectos para diseñar espacios de trabajo y áreas de coworking adaptados a las necesidades del cliente. Elaboré documentación técnica desde el concepto hasta la implementación.',
      skills: ['Gestión de proyectos', 'Diseño de interiores', 'Diseño corporativo', 'Dibujo arquitectónico', 'Diseño arquitectónico']
    },
    {
      year: 'Septiembre 2022 - Abril 2023',
      title: 'Asistente de arquitecto paisajista',
      company: 'Estudio de Paisaje | Paola Trettel - Temporal',
      location: 'Córdoba, Argentina',
      description: 'Diseñé paisajes residenciales, jardines y espacios exteriores priorizando la funcionalidad y la estética. Colaboré con el arquitecto principal para garantizar la coherencia del diseño y la satisfacción del cliente.',
      skills: ['Diseño paisajístico']
    },
    {
      year: 'Mayo 2022 - Julio 2022',
      title: 'Pasante - Departamento de Planificación Urbana',
      company: 'Municipalidad de Villa Allende - Contrato de prácticas',
      location: 'Córdoba, Argentina. Presencial',
      description: 'Diseño de tres espacios públicos, garantizando la calidad funcional y estética. Elaboración de planos técnicos y documentación para la aprobación municipal.',
      skills: ['Sector público', 'Diseño paisajístico', 'Coordinación de proyectos']
    }
  ];

  const education = [
    {
      year: '2025',
      title: 'Arquitecto',
      institution: 'Universidad Nacional de Córdoba',
      description: 'Título de arquitecto con enfoque en diseño sostenible y planificación urbana.'
    }
  ];

  const skills = [
    'Diseño Arquitectónico',
    'Planificación Urbana',
    'Diseño Paisajístico',
    'AutoCAD',
    'Revit',
    'BIM',
    'Adobe Creative Suite',
    'Diseño de Interiores',
    'Gestión de Proyectos',
    'Dibujo Técnico',
    'Modelado 3D',
    'Diseño Corporativo'
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography 
          variant="h2" 
          component="h1" 
          sx={{ 
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 300,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            mb: 4
          }}
        >
          CV
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            variant="outlined"
            startIcon={<Download />}
            sx={{
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 300,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              borderColor: '#000',
              color: '#000',
              '&:hover': {
                borderColor: '#666',
                backgroundColor: '#f5f5f5'
              }
            }}
          >
            Descargar CV
          </Button>
          
          <Button
            variant="outlined"
            startIcon={<LinkedIn />}
            href="https://www.linkedin.com/in/ignacio-sanmartino-8737342b8/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 300,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              borderColor: '#000',
              color: '#000',
              '&:hover': {
                borderColor: '#666',
                backgroundColor: '#f5f5f5'
              }
            }}
          >
            LinkedIn
          </Button>
        </Box>
      </Box>
      
      <Grid container spacing={6}>
        {/* Educación */}
        <Grid item xs={12} md={6}>
          <Typography 
            variant="h4" 
            component="h2"
            sx={{ 
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 400,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              mb: 4
            }}
          >
            Educación
          </Typography>
          
          {education.map((edu, index) => (
            <Box 
              key={index}
              sx={{ 
                mb: 4,
                pb: 3,
                borderBottom: '1px solid #f0f0f0'
              }}
            >
              <Typography 
                variant="h6" 
                component="h3"
                sx={{ 
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 400,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  mb: 1
                }}
              >
                {edu.title}
              </Typography>
              <Typography 
                variant="subtitle1" 
                sx={{ 
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 500,
                  mb: 1,
                  color: '#666'
                }}
              >
                {edu.institution}
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 300,
                  mb: 2,
                  color: '#888'
                }}
              >
                {edu.year}
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 300,
                  lineHeight: 1.6
                }}
              >
                {edu.description}
              </Typography>
            </Box>
          ))}
        </Grid>

        {/* Experiencia */}
        <Grid item xs={12} md={6}>
          <Typography 
            variant="h4" 
            component="h2"
            sx={{ 
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 400,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              mb: 4
            }}
          >
            Experiencia
          </Typography>
          
          {experience.map((exp, index) => (
            <Box 
              key={index}
              sx={{ 
                mb: 4,
                pb: 3,
                borderBottom: index < experience.length - 1 ? '1px solid #f0f0f0' : 'none'
              }}
            >
              <Typography 
                variant="h6" 
                component="h3"
                sx={{ 
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 400,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  mb: 1
                }}
              >
                {exp.title}
              </Typography>
              <Typography 
                variant="subtitle1" 
                sx={{ 
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 500,
                  mb: 1,
                  color: '#666'
                }}
              >
                {exp.company}
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 300,
                  mb: 1,
                  color: '#888'
                }}
              >
                {exp.year} • {exp.location}
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 300,
                  lineHeight: 1.6,
                  mb: 2
                }}
              >
                {exp.description}
              </Typography>
              
              {exp.skills && (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {exp.skills.map((skill, skillIndex) => (
                    <Typography 
                      key={skillIndex}
                      variant="caption" 
                      sx={{ 
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontWeight: 300,
                        color: '#666',
                        fontSize: '0.7rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}
                    >
                      {skill}
                    </Typography>
                  ))}
                </Box>
              )}
            </Box>
          ))}
        </Grid>
      </Grid>

      {/* Habilidades al final */}
      <Box sx={{ mt: 8 }}>
        <Typography 
          variant="h4" 
          component="h2"
          sx={{ 
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 400,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            mb: 4,
            textAlign: 'center'
          }}
        >
          Habilidades
        </Typography>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
          {skills.map((skill, index) => (
            <Typography 
              key={index}
              variant="body2" 
              sx={{ 
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 300,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: '#666'
              }}
            >
              {skill}
            </Typography>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default CV;
