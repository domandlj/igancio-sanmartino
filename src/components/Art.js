import React, { useState } from 'react';
import { Box, Typography, Container, Grid, Card, CardMedia, Modal, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';

const Art = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const artworks = [
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
        Arte
      </Typography>
      
      <Grid container spacing={2}>
        {artworks.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card 
              elevation={0}
              onClick={() => handleImageClick(image)}
              sx={{ 
                cursor: 'pointer',
                border: '1px solid #e0e0e0',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.02)'
                }
              }}
            >
              <CardMedia
                component="img"
                height="250"
                image={image}
                alt={`Artwork ${index + 1}`}
                sx={{ objectFit: 'cover' }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Modal para ver imagen completa */}
      <Modal
        open={!!selectedImage}
        onClose={handleCloseModal}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2
        }}
      >
        <Box sx={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh' }}>
          <IconButton
            onClick={handleCloseModal}
            sx={{
              position: 'absolute',
              top: -40,
              right: 0,
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.7)'
              }
            }}
          >
            <Close />
          </IconButton>
          <img
            src={selectedImage}
            alt="Artwork"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              maxWidth: '90vw',
              maxHeight: '90vh'
            }}
          />
        </Box>
      </Modal>
    </Container>
  );
};

export default Art;
