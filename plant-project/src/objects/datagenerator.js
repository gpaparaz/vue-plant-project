import { Plant } from './plant';
let id = 0;

export let collectionData = [
    new Plant(id++, 'Magnolia', 'Bianca', 3, 'https://www.giardinaggio.net/giardino/alberi/magnolia_O6.jpg'),
    new Plant(id++, 'Glicine', 'Rosa', 2, 'https://www.bessicapiante.it/pics/catalogo/wisteria-showa-beni-dettaglio-014683.jpg'),
    new Plant(id++, 'Glicine', 'Viola', 4, 'https://assets.afcdn.com/story/20210802/2130668_w2121h2121c1cx1642cy627cxt0cyt0cxb2121cyb1414.jpg'),
    new Plant(id++, 'Edera', 'Canadese', 2, 'https://www.giardinaggio.it/giardino/rampicanti/vite-canadese_O3.jpg')
];

export let codiceMeteo = [
    { "0": "Cielo sereno" },
    { "1": "Prevalentemente chiaro" },
    { "2": "parzialmente nuvoloso" },
    { "3": "coperto" },
    { "45": "Nebbia" },
    { "48": "nebbia di brina" },
    { "51": "Pioggia" },
    { "53": "Pioggia leggera" },
    { "55": "Pioggia densa intensità" },
    { "56": "Pioggia gelata" },
    { "57": "Pioggia gelata densa intensità" },
    { "61": "Pioggia" },
    { "63": "Pioggia moderata" },
    { "65": "Pioggia forte" },
    { "66": "Pioggia gelida" },
    { "67": "Pioggia gelata intensa" },
    { "71": "Nevicata" },
    { "73": "Caduta di neve moderata" },
    { "77": "Granelli di neve" },
    { "80": "Pioggia leggera" },
    { "81": "Rovesci di pioggia moderati" },
    { "82": "Pioggia violenta" },
    { "85": "Docce di neve leggere" },
    { "86": "Rovesci di neve forti" },
    { "95": "Temporale" },
    { "96": "Temporale moderato" },
    { "99": "Temporale intenso" }]