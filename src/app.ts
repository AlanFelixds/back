import express from 'express';
import cors from 'cors';
import { router } from './routes';

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);


app.listen(5555, () => { console.log("Servidor rodando na porta 5555")});