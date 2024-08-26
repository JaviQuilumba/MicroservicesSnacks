const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig');
const snacksRoutes = require('./routes/snacksRoutes');
const cors = require('cors');

const app = express();
const port = 3012;

app.use(cors({ origin: 'https://cinema-platform-743n6.ondigitalocean.app' }));

app.use(express.json());

app.use('/api', snacksRoutes);
app.use('/swaggerCreateSnack', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', (req, res) => res.json({ status: 'ok', message: 'Microservice Running' }));

app.listen(port, () => {
  console.log(`Snacks service listening at http://localhost:${port}`);
});
