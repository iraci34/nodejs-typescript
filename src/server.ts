import express, { Request, Response, NextFunction } from 'express';
import errorHandler from './middlewares/error-handler.middleware';
import usersRoute from './routes/users.route';
import statusRoute from './routes/status.route';

const app = express();

//Configurações da Aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Configurações de Rotas
app.use(usersRoute);
app.use(statusRoute);

//Configuração dos Handlers de Erro
app.use(errorHandler);

//Inicialização do Servidor
app.listen(3333, () => {
    console.log('Aplicação executando na porta 3333!');
});
