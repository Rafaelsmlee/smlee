var database = require("../database/config");


  function buscarImagens() {
    console.log('Estou na função buscarImagens do exploreModel.js!');

    var query = `
    SELECT
		r.idRestaurante,
		img.imagem
	FROM ImagensRestaurante AS img
	JOIN Restaurantes AS r ON  img.fk_restaurante = r.idRestaurante
    WHERE r.idRestaurante IN (1,5,9 );
    `

    console.log(`Executando a instrução SQL: \n ${query}`);
    return database.executar(query);
}


module.exports = {
    buscarImagens
}

