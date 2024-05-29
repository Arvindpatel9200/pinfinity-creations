import React from 'react';
import './styles/Grid.css'; // Import your CSS file for styling

const images = [
  { src: '../images/photo1.jpg', width: 182, height: 300 },
  { src: '../images/photo2.jpg', width: 182, height: 450 },
  { src: '../images/photo3.jpg', width: 200, height: 300 },
  { src: '../images/photo4.jpg', width: 182, height: 450 },
  { src: '../images/photo5.jpg', width: 182, height: 300 },
  { src: '../images/photo6.jpg', width: 200, height: 450 },

  { src: '../images/photo7.jpg', width: 180, height: 300 },
  { src: '../images/photo8.jpg', width: 180, height: 450 },
  { src: '../images/photo9.jpg', width: 200, height: 300 },
  { src: '../images/photo10.jpg', width: 180, height: 450 },
  { src: '../images/photo1.jpg', width: 180, height: 300 },
  { src: '../images/photo2.jpg', width: 200, height: 450 },

  { src: '../images/photo1.jpg', width: 182, height: 300 },
  { src: '../images/photo2.jpg', width: 182, height: 450 },
  { src: '../images/photo3.jpg', width: 200, height: 300 },
  { src: '../images/photo4.jpg', width: 182, height: 450 },
  { src: '../images/photo5.jpg', width: 182, height: 300 },
  { src: '../images/photo6.jpg', width: 200, height: 450 },

  { src: '../images/photo7.jpg', width: 180, height: 300 },
  { src: '../images/photo8.jpg', width: 180, height: 450 },
  { src: '../images/photo9.jpg', width: 200, height: 300 },
  { src: '../images/photo10.jpg', width: 180, height: 450 },
  { src: '../images/photo1.jpg', width: 180, height: 300 },
  { src: '../images/photo2.jpg', width: 200, height: 450 },

  { src: '../images/baby20.jpg', width: 180, height: 300 },
  { src: '../images/car16.jpg', width: 180, height: 450 },
  { src: '../images/Cat11.jpg', width: 200, height: 300 },
  { src: '../images/person12.jpg', width: 180, height: 450 },
  { src: '../images/gold18.jpg', width: 180, height: 300 },
  { src: '../images/hanu17.jpg', width: 200, height: 250 },

  { src: '../images/sum21.jpg', width: 182, height: 300 },
  { src: '../images/rupee19.jpg', width: 182, height: 450 },
  { src: '../images/rupay15.jpg', width: 200, height: 300 },
  { src: '../images/yellow13.jpg', width: 182, height: 350 },
  { src: '../images/rose22.jpg', width: 182, height: 300 },
  { src: '../images/ganesh23.jpg', width: 200, height: 350 },

  { src: '../images/flow25.jpg', width: 180, height: 300 },
  { src: '../images/lily29.jpg', width: 180, height: 350 },
  { src: '../images/flower27.jpg', width: 200, height: 300 },
  { src: '../images/caty24.jpg', width: 200, height: 250 },
  { src: '../images/house26.jpg', width: 180, height: 300 },
  { src: '../images/bowl28.jpg', width: 200, height: 450 },

  { src: '../images/photo1.jpg', width: 182, height: 300 },
  { src: '../images/photo2.jpg', width: 182, height: 450 },
  { src: '../images/photo3.jpg', width: 200, height: 300 },
  { src: '../images/photo4.jpg', width: 182, height: 450 },
  { src: '../images/photo5.jpg', width: 182, height: 300 },
  { src: '../images/photo6.jpg', width: 200, height: 450 },

  { src: '../images/photo7.jpg', width: 180, height: 300 },
  { src: '../images/photo8.jpg', width: 180, height: 450 },
  { src: '../images/photo9.jpg', width: 200, height: 300 },
  { src: '../images/photo10.jpg', width: 180, height: 450 },
  { src: '../images/photo1.jpg', width: 180, height: 300 },
  { src: '../images/photo2.jpg', width: 200, height: 450 },

  { src: '../images/photo1.jpg', width: 182, height: 300 },
  { src: '../images/photo2.jpg', width: 182, height: 450 },
  { src: '../images/photo3.jpg', width: 200, height: 300 },
  { src: '../images/photo4.jpg', width: 182, height: 450 },
  { src: '../images/photo5.jpg', width: 182, height: 300 },
  { src: '../images/photo6.jpg', width: 200, height: 450 },

  { src: '../images/photo7.jpg', width: 180, height: 300 },
  { src: '../images/photo8.jpg', width: 180, height: 450 },
  { src: '../images/photo9.jpg', width: 200, height: 300 },
  { src: '../images/photo10.jpg', width: 180, height: 450 },
  { src: '../images/photo1.jpg', width: 180, height: 300 },
  { src: '../images/photo2.jpg', width: 200, height: 450 },

  { src: '../images/photo1.jpg', width: 182, height: 300 },
  { src: '../images/photo2.jpg', width: 182, height: 450 },
  { src: '../images/photo3.jpg', width: 200, height: 300 },
  { src: '../images/photo4.jpg', width: 182, height: 450 },
  { src: '../images/photo5.jpg', width: 182, height: 300 },
  { src: '../images/photo6.jpg', width: 200, height: 450 },

  { src: '../images/photo7.jpg', width: 180, height: 300 },
  { src: '../images/photo8.jpg', width: 180, height: 450 },
  { src: '../images/photo9.jpg', width: 200, height: 300 },
  { src: '../images/photo10.jpg', width: 180, height: 450 },
  { src: '../images/photo1.jpg', width: 180, height: 300 },
  { src: '../images/photo2.jpg', width: 200, height: 450 },

  { src: '../images/baby20.jpg', width: 180, height: 300 },
  { src: '../images/car16.jpg', width: 180, height: 450 },
  { src: '../images/Cat11.jpg', width: 200, height: 300 },
  { src: '../images/person12.jpg', width: 180, height: 450 },
  { src: '../images/gold18.jpg', width: 180, height: 300 },
  { src: '../images/hanu17.jpg', width: 200, height: 250 },

  { src: '../images/sum21.jpg', width: 182, height: 300 },
  { src: '../images/rupee19.jpg', width: 182, height: 450 },
  { src: '../images/rupay15.jpg', width: 200, height: 300 },
  { src: '../images/yellow13.jpg', width: 182, height: 350 },
  { src: '../images/rose22.jpg', width: 182, height: 300 },
  { src: '../images/ganesh23.jpg', width: 200, height: 350 },

  { src: '../images/flow25.jpg', width: 180, height: 300 },
  { src: '../images/lily29.jpg', width: 180, height: 350 },
  { src: '../images/flower27.jpg', width: 200, height: 300 },
  { src: '../images/caty24.jpg', width: 200, height: 250 },
  { src: '../images/house26.jpg', width: 180, height: 300 },
  { src: '../images/bowl28.jpg', width: 200, height: 450 },

  { src: '../images/photo1.jpg', width: 182, height: 300 },
  { src: '../images/photo2.jpg', width: 182, height: 450 },
  { src: '../images/photo3.jpg', width: 200, height: 300 },
  { src: '../images/photo4.jpg', width: 182, height: 450 },
  { src: '../images/photo5.jpg', width: 182, height: 300 },
  { src: '../images/photo6.jpg', width: 200, height: 450 },

  // Add more images with their respective dimensions
];

const Gallery = () => {
  return (
    <div className="grid-container">
      {images.map((image, index) => (
        <div
          key={index}
          className="grid-item"
          style={{
            gridColumnEnd: `span ${Math.ceil(image.width / 100)}`,
            gridRowEnd: `span ${Math.ceil(image.height / 100)}`
          }}
        >
          <img src={image.src} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
