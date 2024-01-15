import dotenv from 'dotenv';
import express from 'express';
import moviesRouter from './routes/movies.router';
import {logger} from './logger';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/movies', moviesRouter);

app.listen(PORT, () => {
  logger.info(`Server is running at http://localhost:${PORT}`);
});
