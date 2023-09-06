const express = require('express');
const cors = require('cors'); // Import the cors middleware
const data = require('./Dummy'); // Import the data module
const port = 3001;
const app = express();


app.use(cors());


app.use(express.json());
app.get('/', (req, res) => {
    res.send("hey my name is sumit rawat");
  
});

app.get('/home', (req, res) => {
    res.send("hey welcome to prepbytes");
  
});
app.get('/route/api/main', (req, res) => {
    res.send(data);
});

app.listen(port, () => {

    console.log('Server is running on port', port);
  
 
});
