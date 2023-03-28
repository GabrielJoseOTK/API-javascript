const express = require('express');


const cors = require('cors')



const mongoose = require('mongoose');
const app = express();
const estoque = require('./models/estoque');

const estoqueRoutes = require('./routes/estoque');

  //"type":"module",//

mongoose.connect('mongodb://127.0.0.1:27017/estoque', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//http://127.0.0.1:4200//
app.use(cors({origin:"*"}))


app.use(express.json());
app.use('/estoque', estoqueRoutes);


app.listen(3000, () => {
  console.log('server is running on port 3000');
});