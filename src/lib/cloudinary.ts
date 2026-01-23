export function getCloudinaryUrl(path: string) {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    // Codificar cada parte del path para manejar espacios y caracteres especiales
    const encodedPath = path
      .split('/')
      .map(part => encodeURIComponent(part))
      .join('/');
    return `https://res.cloudinary.com/${cloudName}/image/upload${encodedPath}`;
  }