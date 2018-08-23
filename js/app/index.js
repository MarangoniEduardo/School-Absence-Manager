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
        let calculador = new CalculaMedia(this.getCamposvalues());

        let results = calculador.getCalculosResultado();

        this.setCardValues(results);
    },

    setCardValues(results) {
        source.cards.faltasDisponiveis.html("Dias: "+ results.faltasDisponiveisDias + ", Aulas: "+ results.faltasDisponiveis +".");
        source.cards.frequenciaAtual.html(""+ results.frequenciaAtual + "%");
        source.cards.diasPresentes.html(""+ results.diasDePresenca + " dias.");
        source.cards.reprovadoAtual.html(""+ results.aprovado + "");
    },

    getSource() {
        return source;
    }
};

$('document').ready(function () {
    indexFuncoes.init();
});

