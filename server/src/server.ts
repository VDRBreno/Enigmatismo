import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { routes } from './routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log('\n--> Server running');
});