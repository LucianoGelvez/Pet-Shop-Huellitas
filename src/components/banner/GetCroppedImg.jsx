function GetCroppedImg(imageUrl, croppedAreaPixels) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = imageUrl;
      image.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
  
        const { width, height } = croppedAreaPixels;
        canvas.width = width;
        canvas.height = height;
  
        ctx.drawImage(
          image,
          croppedAreaPixels.x,
          croppedAreaPixels.y,
          croppedAreaPixels.width,
          croppedAreaPixels.height,
          0,
          0,
          width,
          height
        );
  
        canvas.toBlob((blob) => {
          resolve(URL.createObjectURL(blob));
        }, 'image/jpeg');
      };
  
      image.onerror = (error) => {
        reject(error);
      };
    });
  }
  
  export default GetCroppedImg;
  