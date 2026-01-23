import { getCloudinaryUrl } from "~/lib/cloudinary";

export const pants = [
    {
        id: 1,
        name: 'Pantalón 1',
        description: 'Pantalón 1',
        image: getCloudinaryUrl('/Pantalones/1.png'),
        category: 'legs',
        sexo: 'neutral',
    },
    {
        id: 2,
        name: 'Pantalón 2',
        description: 'Pantalón 2',
        image: getCloudinaryUrl('/Pantalones/2.png'),
        category: 'legs',
        sexo: 'neutral',
    },
    {
        id: 3,
        name: 'Pantalón 3',
        description: 'Pantalón 3',
        image: getCloudinaryUrl('/Pantalones/3.png'),
        category: 'legs',
        sexo: 'neutral',
    },
];