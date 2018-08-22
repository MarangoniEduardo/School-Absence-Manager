let valores = {};
const buttonResult = $('#results');

const source = {
    campos: {
        diasLetivos: $('#dias-letivos'),
        minFreq: $('#min-freq'),
        faltasFreq: $('#faltas-freq'),
        aulasDia: $('#aulas-dia')
    },
    cards: {
        faltasDisponiveis: $("#faltas-disp"),
        frequenciaAtual: $("#frequencia-atual"),
        diasPresentes: $("#dias-presentes"),
        reprovadoAtual: $("#reprovado-atual")
    }
};

let indexFuncoes = {
    init() {
        this.getSource();
        this.initElementEvents();
    },

    initElementEvents() {
        buttonResult.on('click', e => this.getResultados());
    },

    getCamposvalues() {
        valores = {
            diasLetivos: source.campos.diasLetivos.val(),
            minFreq: source.campos.minFreq.val(),
            faltasFreq: source.campos.faltasFreq.val(),
            aulasDia: source.campos.aulasDia.val()
        };

        return valores;
    },

    calculaMedia() {
        let options = this.getCamposvalues();
        let calculador = new CalculaMedia(options);

        return calculador.getCalculosResultado();
    },

    getResultados() {

    },

    setCardValues() {

    },

    getSource() {
        return source;
    }
};

$('document').ready(function () {
    indexFuncoes.init();
});

