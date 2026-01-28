import { getCloudinaryUrl } from "~/lib/cloudinary";

export const pets = [
    {
        id: 1,
        name: 'Pet 1',
        description: 'Pet 1',
        image: getCloudinaryUrl('/Mascotas/1.png'),
        category: 'pets',
        sexo: 'neutral',
    },
    {
        id: 2,
        name: 'Pet 2',
        description: 'Pet 2',
        image: getCloudinaryUrl('/Mascotas/2.png'),
        category: 'pets',
        sexo: 'neutral',
    },
    {
        id: 3,
        name: 'Pet 3',
        description: 'Pet 3',
        image: getCloudinaryUrl('/Mascotas/3.png'),
        category: 'pets',
        sexo: 'neutral',
    },
];