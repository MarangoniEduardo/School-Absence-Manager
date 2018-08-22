class CalculaMedia {
    constructor(options) {
        this._diasLetivos = options.diasLetivos;
        this._minFreq = options.minFreq;
        this._faltasFreq = options.faltasFreq;
        this._aulasDia = options.aulasDia;
    }

    get diasLetivos() {
        return this._diasLetivos;
    }

    get minFreq() {
        return this._minFreq;
    }

    get faltasFreq() {
        return this._faltasFreq;
    }

    get aulasDia() {
        return this._aulasDia;
    }

    getCalculosResultado() {

    }

    initCalculos() {
        return  {
            faltasDisponiveis: this.calculaFaltasDisponiveis(),
            frequenciaAtual: this.calculaFrequenciaAtual(),
            diasDePresenca: this.calculaDiasDePresenca(),
            aprovado: this.getEstadoAprovacao()
        };
    }

    calculaFaltasDisponiveis() {

    }

    calculaFrequenciaAtual() {

    }

    calculaDiasDePresenca() {

    }

    getEstadoAprovacao() {

    }
}