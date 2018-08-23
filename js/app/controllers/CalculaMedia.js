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
        console.log(this.initCalculos());
        return this.initCalculos();
    }

    initCalculos() {
        return  {
            faltasDisponiveis: this.calculaFaltasDisponiveis(),
            frequenciaAtual: this.calculaFrequenciaAtual(),
            diasDePresenca: this.calculaDiasDePresenca(),
            aprovado: this.getEstadoAprovacao(),
            faltasDisponiveisDias: this.calculaFaltasDisponiveisDias()
        };
    }

    calculaFaltasDisponiveis() {
        let presencasNecessarias = this.diasLetivos * (this.minFreq / 100);
        let faltasMax = this.diasLetivos - presencasNecessarias;

        return (faltasMax - this.faltasFreq) * this.aulasDia;
    }

    calculaFaltasDisponiveisDias() {
        return this.calculaFaltasDisponiveis() / this.aulasDia;
    }

    calculaFrequenciaAtual() {
        let frequencia = this.diasLetivos - this.faltasFreq;

        return (frequencia * 100) / this.diasLetivos;
    }

    calculaDiasDePresenca() {
        return this.diasLetivos - this.faltasFreq;
    }

    getEstadoAprovacao() {
        return this.calculaFrequenciaAtual() < this.minFreq;
    }
}