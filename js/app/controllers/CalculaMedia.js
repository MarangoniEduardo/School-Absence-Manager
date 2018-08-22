class CalculaMedia {
    constructor(options){
        this._diasLetivos = options.diasLetivos;
        this._minFreq = options.minFreq;
        this._faltasFreq = options.faltasFreq;
        this._aulasDia = options.aulasDia;
        this._options = options;
    }

    get diasLetivos() {
        return this._diasLetivos;
    }

    get options() {
        return this._options;
    }

    set diasLetivos(value) {
        this._diasLetivos = value;
    }

    get minFreq() {
        return this._minFreq;
    }

    set minFreq(value) {
        this._minFreq = value;
    }

    get faltasFreq() {
        return this._faltasFreq;
    }

    get aulasDia() {
        return this._aulasDia;
    }

    set aulasDia(value) {
        this._aulasDia = value;
    }

    calculaMedia() {
        console.log(this.options);
    }
}