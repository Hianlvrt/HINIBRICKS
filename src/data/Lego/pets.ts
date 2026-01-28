import { getCloudinaryUrl } from "~/lib/cloudinary";

export const pets = [
    {
        id: 1,
        name: 'Pet 1',
        description: 'Pet 1',
        image: getCloudinaryUrl('/pets/1.png'),
        category: 'pets',
        sexo: 'neutral',
    },
    {
        id: 2,
        name: 'Pet 2',
        description: 'Pet 2',
        image: getCloudinaryUrl('/pets/2.png'),
        category: 'pets',
        sexo: 'neutral',
    },
    {
        id: 3,
        name: 'Pet 3',
        description: 'Pet 3',
        image: getCloudinaryUrl('/pets/3.png'),
        category: 'pets',
        sexo: 'neutral',
    },
    {
        id: 4,
        name: 'Pet 4',
        description: 'Pet 4',
        image: getCloudinaryUrl('/pets/4.png'),
        category: 'pets',
        sexo: 'neutral',
    },
    {
        id: 5,
        name: 'Pet 5',
        description: 'Pet 5',
        image: getCloudinaryUrl('/pets/5.png'),
        category: 'pets',
        sexo: 'neutral',
    },
];