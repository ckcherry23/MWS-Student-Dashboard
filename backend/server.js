const express = require('express');
const cors = require('cors')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json())

app.use('/login', (req, res) => {
    res.send({
        token: 'test123'
    });
});

app.listen(port, () => console.log(`Server is running on port: ${port}`));