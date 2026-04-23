const piadaService = require("../services/piadaService");

exports.buscarPiada = async (req, res) => {
  const { tipo } = req.query;

  if (!tipo) {
    return res.status(400).json({
      erro: "Parâmetro 'tipo' é obrigatório"
    });
  }

  try {
    const piada = await piadaService.obterPiada(tipo);
    res.json(piada);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};