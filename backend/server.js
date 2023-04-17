const express = require('express');
const cors = require('cors');
const app = express();

const corsOptions = {
    origin: 'http://localhost:3000'
};
  
app.use(cors(corsOptions));

app.listen(4000, () => {
  console.log('Server is listening on port 4000');
});