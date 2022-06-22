const express = require('express');
const cors = require('cors');
const route = require('./src/routes/tasks.route');

const port = 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/to-do-list', route);

app.listen(port, () => {
  console.log(`Server running in http://localhost:${port}`);
});
