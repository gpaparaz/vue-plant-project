import { Plant } from "./plant"

class DataGenerator {

    magnoliaBianca = new Plant('Magnolia', 'Bianca', 3);
    glicineRosa = new Plant('Glicine', 'Rosa', 2);
    glicineViola = new Plant('Glicine', 'Viola', 4);
    ederaCanaedese = new Plant('Edera', 'Canaedesse', 2);

    listaDiPiantePresenti = [this.magnoliaBianca, this.glicineRosa, this.glicineViola, this.ederaCanaedese];

    getListaDiPiante() {
        return this.listaDiPiantePresenti;
    }
}


export { DataGenerator }


