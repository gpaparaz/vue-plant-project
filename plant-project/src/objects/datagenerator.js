import { Plant } from './plant';
let id = 0;

export let collectionData = [
    new Plant(id++, 'Magnolia', 'Bianca', 3, 'https://www.giardinaggio.net/giardino/alberi/magnolia_O6.jpg'),
    new Plant(id++, 'Glicine', 'Rosa', 2, 'https://www.bessicapiante.it/pics/catalogo/wisteria-showa-beni-dettaglio-014683.jpg'),
    new Plant(id++, 'Glicine', 'Viola', 4, 'https://assets.afcdn.com/story/20210802/2130668_w2121h2121c1cx1642cy627cxt0cyt0cxb2121cyb1414.jpg'),
    new Plant(id++, 'Edera', 'Canadese', 2, 'https://www.giardinaggio.it/giardino/rampicanti/vite-canadese_O3.jpg')
];
