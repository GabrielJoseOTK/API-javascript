const mongoose = require('mongoose');


// Definindo o schema para o modelo de receita
const estoqueSchema = new mongoose.Schema({
  codigo: {
    type: Number,
    required: true,
    trim: true
  },
  descricao: {
    type: String,
    required: true
  },
  quantidade_disponivel: {
  type: Number
  },
  capacidade_maxima: {
    type: Number,
    required: true
  },
  quantidade_minima: {
  type: Number
  },
  convertRule: Number
  });

// Criando o modelo de receita
const estoque = mongoose.model('estoque', estoqueSchema);

// Exportando o modelo para uso em outras partes da aplicação
module.exports = estoque;