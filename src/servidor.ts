import express from 'express';
import cors from 'cors';
import { router } from './routes';

import "dotenv/config";

const servidor = express();
servidor.use(cors());
servidor.use(express.json());
servidor.use(router);


servidor.listen(5000, () => { console.log("Servidor rodando na porta 5000")});