const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);


/**
 * Métodos HTTP
 * 
 * GET: Buscar/listar uma informação no back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */


 /**
  * Parametros
  * 
  * Query: Parametros nomeados enviados na rota após o "?" (Filtros, paginação...)
  * Route: Parametros utilizados para identificar recursos
  * Body: Corpo da requisição utilizado para criar ou alterar recursos
  */

  /**
   * Banco de dados
   * 
   * SQL: MySQL, Postgres, Oracle, SQLite, MS-SQL
   * NoSQL: MongoDB, CouchDB...
   */