const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const { conection } = require('./conection/conection'); 
const router = require('./router/router');  

app.use(express.json()); 

app.use('/', router);     // Usa el router



const PUERTO = process.env.PORT || 3002;

app.listen(PUERTO, (err) => {
  if (err) {
    throw err;
  }
  console.log(`SERVIDOR TRABAJANDO EN PUERTO ${PUERTO}`);
});
