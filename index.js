require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/mongo');
const swaggerUi = require('swagger-ui-express');

const whiteList = ['http://localhost:3001', 'https://terranet.com.ec', 'http://localhost:3000'];
const app = express({ origin: whiteList });

app.use(cors());

app.use(express.json());

app.use(express.static("cvFile"));

const port = process.env.PORT || 3000;
const swagerDoc = require('./swaggerDoc.json');

// Router invoke
//TODO localhost/api/______
app.use('/api', require('./routes'));
app.use('/api-documentation', swaggerUi.serve, swaggerUi.setup(swagerDoc));

app.listen(port, () => {
  console.log(`La app esta lista por http://localhost:${port}`);
});

dbConnect();
