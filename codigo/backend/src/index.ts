import express from 'express';
import routes from './routes';
import prisma from './infrastructure/database/database';

import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());
app.use('/api', routes);

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    // Teste a conexão com o banco de dados
    await prisma.$connect();
    console.log('Connected to the database');

    // Inicie o servidor
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error('Unable to connect to the database:', err);
    process.exit(1); // Encerra o processo caso a conexão com o banco de dados falhe
  }
}

startServer();
