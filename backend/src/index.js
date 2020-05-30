const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Metodos HTTP:
 * 
 * GET: Buscar/listar um informação do backend;
 * POST: Criar um informação no backend;
 * PUT: Alterar um informação no backend;
 * DELETE: Deletar uma informação no backend;
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros/Paginação)
 * Route Params: Parâmetros utilizado para indentificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server;
 * NoSQL: MongoDB, CouchDB, etc 
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */