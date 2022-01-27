import express, { Request, Response, NextFunction } from 'express';
import usersRoute from './routes/users.route';
import statusRoute from './routes/status.route';

const app = express();

//Configurações da Aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Configurações de Rotas
app.use(usersRoute);
app.use(statusRoute);

//Inicialização do Servidor
app.listen(3333, () => {
    console.log('Aplicação executando na porta 3333!');
});
