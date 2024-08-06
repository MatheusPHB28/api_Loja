const dotenv = require('dotenv'); 
dotenv.config(); 
const express = require('express'); 
const bodyParser = require('body-parser'); 
const db = require('./config/db'); 
const lojaRoutes = require('./routes/loja_routes');




 const app = express();


app.use(cors()); 
app.use(bodyParser.json()); /

app.use('/api/transactions', lojaRoutes);

app.get('/', (req, res) => {
    res.send('Servidor está rodando'); /
  });


const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
  console.log(Servidor rodando na porta ${PORT});

});