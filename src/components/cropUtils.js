function createImage(url) {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.addEventListener('load', () => resolve(image));
        image.addEventListener('error', error => reject(error));
        image.setAttribute('crossOrigin', 'anonymous'); // evitar errores de CORS
        image.src = url;
    });
}

export async function getCroppedImg(imageSrc, pixelCrop) {
    const image = await createImage(imageSrc);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Tamaño fijo de la imagen recortada
    canvas.width = 600;
    canvas.height = 400;

    ctx.drawImage(
        image,
        pixelCrop.x,
        pixelCrop.y,
        pixelCrop.width,
        pixelCrop.height,
        0,
        0,
        canvas.width,
        canvas.height
    );

    return new Promise(resolve => {
        canvas.toBlob(file => resolve(file), 'image/jpeg');
    });
}
