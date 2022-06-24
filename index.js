import express from 'express';
import cors from 'cors';
import router from './src/routes/tasks.route.js';

const port = 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/to-do-list', router);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
