// Archivo índice que combina todos los datos de Lego
import { hairMale } from './hair-male';
import { hairFemale } from './hair-female';
import { faceMale } from './face-male';
import { faceFemale } from './face-female';
import { pants } from './pants';
import { accs } from './accs';
import { bodyAzul } from './body-azul';
import { bodyBlanco } from './body-blanco';
import { bodyCeleste } from './body-celeste';
import { bodyNegro } from './body-negro';
import { bodyRosado } from './body-rosado';

// Tipo para los items de personalización
export type Sexo = 'male' | 'female' | 'neutral';

export interface LegoItem {
    id: number;
    name: string;
    description: string;
    image: string;
    category: 'hair' | 'face' | 'body' | 'legs' | 'accs' | 'background';
    sexo: Sexo;
}

// Función para asignar IDs únicos globales
const assignUniqueIds = (items: LegoItem[], startId: number): LegoItem[] => {
    return items.map((item, index) => ({
        ...item,
        id: startId + index,
    }));
};

// Combinamos pelo (male + female)
const allHair = [
    ...assignUniqueIds(hairMale as LegoItem[], 1),
    ...assignUniqueIds(hairFemale as LegoItem[], 100), // IDs desde 100
];

// Combinamos rostros (male + female)
const allFaces = [
    ...assignUniqueIds(faceMale as LegoItem[], 200), // IDs desde 200
    ...assignUniqueIds(faceFemale as LegoItem[], 300), // IDs desde 300
];

// Combinamos todos los torsos/ropa
const allBody = [
    ...assignUniqueIds(bodyAzul as LegoItem[], 400),
    ...assignUniqueIds(bodyBlanco as LegoItem[], 450),
    ...assignUniqueIds(bodyCeleste as LegoItem[], 500),
    ...assignUniqueIds(bodyNegro as LegoItem[], 550),
    ...assignUniqueIds(bodyRosado as LegoItem[], 600),
];

// Pantalones (neutrales)
const allPants = assignUniqueIds(pants as LegoItem[], 700);

// Accesorios (neutrales)
const allAccs = assignUniqueIds(accs as LegoItem[], 800);

// Array completo de todos los items
export const allLegoItems: LegoItem[] = [
    ...allHair,
    ...allFaces,
    ...allBody,
    ...allPants,
    ...allAccs,
];

// Función helper para filtrar items por categoría y sexo
export const getFilteredItems = (
    category: string,
    sexo: 'male' | 'female'
): LegoItem[] => {
    return allLegoItems.filter(
        (item) =>
            item.category === category &&
            (item.sexo === sexo || item.sexo === 'neutral')
    );
};

// Exportar arrays individuales por si se necesitan
export {
    allHair,
    allFaces,
    allBody,
    allPants,
    allAccs,
};
