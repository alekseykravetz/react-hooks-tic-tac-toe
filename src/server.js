
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

// app.get('/', (req, res) => res.send('Server Online'));

app.use('/', express.static('dist'));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`dx server - port: ${port} - ${process.env.NODE_ENV || 'local'} environment`));
