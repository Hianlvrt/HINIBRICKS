const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

/** ID usado cuando el usuario sube un fondo personalizado (no es un id de Fondos) */
export const CUSTOM_BACKGROUND_ID = 0;

export function getCloudinaryUrl(path: string) {
  if (!CLOUD_NAME) return "";
  const encodedPath = path
    .split("/")
    .map((part) => encodeURIComponent(part))
    .join("/");
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload${encodedPath}`;
}

/**
 * Sube una imagen a Cloudinary en la carpeta indicada.
 * Requiere NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET (unsigned) en .env
 */
export async function uploadImage(
  file: File,
  folder: string
): Promise<{ secure_url: string }> {
  if (!CLOUD_NAME || !UPLOAD_PRESET) {
    throw new Error(
      "Faltan NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME o NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET"
    );
  }
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);
  formData.append("folder", folder);

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );
  if (!res.ok) {
    const err = await res.text();
    throw new Error(err || "Error al subir la imagen");
  }
  const data = (await res.json()) as { secure_url: string };
  return { secure_url: data.secure_url };
}