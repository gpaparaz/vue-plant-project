export class Plant {
    id;
    specie;
    quantita;
    varieta;
    image;

    constructor(id, specie, varieta, quantita, img) {
        this.id = id;
        this.specie = specie;
        this.varieta = varieta;
        this.quantita = quantita;
        this.image = img;
    }
}