const axios = require("axios");

exports.obterPiada = async (tipo) => {
  const response = await axios.get(
    `https://v2.jokeapi.dev/joke/${tipo}?type=twopart`
  );

  return {
    setup: response.data.setup,
    punchline: response.data.delivery,
    categoria: response.data.category
  };
};
