class Plant {
    #specie;
    #quantita;
    #varieta;

    constructor(specie, varieta, quantita) {
        this.#specie = specie;
        this.#varieta = varieta;
        this.#quantita = quantita
    }

    getSpecie() {
        return this.#specie;
    }

    getQuantita() {
        return this.#quantita;
    }

    getVarieta() {
        return this.#varieta;
    }

    setSpecie(specie) {
        this.#specie = specie;
    }

    setQuantita(quantita) {
        this.#quantita = quantita;
    }

    setVarieta(varieta) {
        this.#varieta = varieta
    }
}

export { Plant }