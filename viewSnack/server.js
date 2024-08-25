const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig');
const cinemasRoutes = require('./routes/snacksRoutes');  
const cors = require('cors');

const app = express();
const port = 3015;

app.get('/', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Microservice Running' });
});


app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use(bodyParser.json());
app.use('/api', cinemasRoutes); 
app.use('/swaggerViewSnack', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
  console.log(`Microservice list snacks listening at http://localhost:${port}`);
  console.log(`http://localhost:${port}/api-docs`);
});
