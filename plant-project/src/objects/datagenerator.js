import { Plant } from './plant';
let id = 0;

export let collectionData = [
    new Plant(id++, 'Magnolia', 'Bianca', 3),
    new Plant(id++, 'Glicine', 'Rosa', 2),
    new Plant(id++, 'Glicine', 'Viola', 4),
    new Plant(id++, 'Edera', 'Canadese', 2)
];
