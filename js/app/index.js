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
        this.getResultados();
    },

    initElementEvents() {
        buttonResult.on('click', function () {
            this.getResultados();
        });
    },

    getResultados() {
        valores = {
            diasLetivos: source.diasLetivos.val(),
            minFreq: source.minFreq.val(),
            faltasFreq: source.faltasFreq.val(),
            aulasDia: source.aulasDia.val()
        };

        return valores;
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

