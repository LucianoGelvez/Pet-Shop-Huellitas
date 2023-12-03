import React, { useState, useRef } from 'react';
import Cropper from 'react-easy-crop';
import getCroppedImg from './GetCroppedImg.jsx'; // Necesitarás implementar esta función

const BannerEditor = ({ imageUrl, onSave }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const imageRef = useRef(null);

  const onCropComplete = (_, croppedArea) => {
    setCroppedAreaPixels(croppedArea);
  };

  const handleZoomChange = (newZoom) => {
    setZoom(newZoom);
  };

  const handleSave = async () => {
    if (imageRef.current && croppedAreaPixels) {
      const croppedImage = await getCroppedImg(imageUrl, croppedAreaPixels);
      onSave(croppedImage);
    }
  };

  return (
    <div>
      <div style={{ position: 'relative', width: '100%', height: '300px' }}>
        <Cropper
          image={imageUrl}
          crop={crop}
          zoom={zoom}
          aspect={4 / 1} // Puedes ajustar el aspecto según tus necesidades
          onCropChange={setCrop}
          onZoomChange={handleZoomChange}
          onCropComplete={onCropComplete}
          ref={imageRef}
        />
      </div>
      <div>
        <button onClick={handleSave}>Guardar</button>
      </div>
    </div>
  );
};

export default BannerEditor;
