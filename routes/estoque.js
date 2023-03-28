const express = require('express');
const router = express.Router();
const estoque = require('../models/estoque');

router.post('/inserir', async (req, res) => {
  const { nome, preco, descricao} = req.body;

  try {
    const novoestoque = await estoque.create({
      nome,
      preco,
      descricao

    });

    return res.status(201).json({ estoques });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
});
router.post('/create', async (req, res) => {
  const { codigo, descricao, quantidade_disponivel, capacidade_maxima, quantidade_minima} = req.body;
  try {
    const estoques = new estoque(req.body);
    await estoques.save();
    res.status(201).send(estoques);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/estoque', async (req, res) => {
  try {
    const estoques = await estoque.find({});
    res.send(estoques);
  } catch (error) {
    res.status(500).send();
  }
});

router.get('/', async (req, res) => {
  try {
    const estoques = await estoque.find({});
    res.send(estoques);
  } catch (error) {
    res.status(500).send();
  }
});

router.get('/cardapio', async (req, res) => {
  try {
    const estoques = await estoque.find({});
    res.send(estoques);
  } catch (error) {
    res.status(500).send();
  }
});


// Rota para buscar uma receita específica pelo seu ID
router.get('/encontrar/:id', async (req, res) => {
  const _id  = req.params.id;

  try {
    const estoques = await estoque.findById(_id);

    if (!estoques) {
      return res.status(404).send();
    }

    res.send(estoques);
  } catch (error) {
    res.status(500).send();
  }
});


router.post('/okk', async (req, res) => {
  const nomes = req.body.nome;


    res.send(nomes+"ok");

});




// Rota para atualizar uma receita pelo seu ID
router.patch('/atualizarestoque/:id', async (req, res) => {
  const _id = req.params.id;

  try {
    const estoques = await estoque.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true });

    if (!estoques) {
      return res.status(404).send();

    }

    res.send(estoques);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Rota para excluir uma receita pelo seu ID
router.delete('/deletarcardapio/:id', async (req, res) => {
  const _id = req.params.id;

  try {
    const estoques = await estoque.findByIdAndDelete(_id);

    if (!estoques) {
      return res.status(404).send();
    }

    res.send(estoques);
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;

