const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

const chaptersRouter = require('./routes/chapters');
const User = require('./models/user.model');

app.use('/chapters', chaptersRouter);

app.post('/api/register', async (req, res) => {
    console.log(req.body);
    try {
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });
        res.json({status: 'ok'});
    } catch (err) {
        res.json({status: 'error', error: err});
    }
})

app.use('/api/login', async (req, res) => {
        const user = await User.findOne({
            email: req.body.email, 
            password: req.body.password
        });
        
        if (user) {
            const token = jwt.sign({ 
                name: user.name,
                email: user.email,
            }, 'cn839^*cl94dm#^(DFfpw2'); // random secret

            return res.json({status: 'ok', user: token});
        } else {
            return res.json({status: 'error', user: false}); 
        }
});

app.listen(port, () => console.log(`Server is running on port: ${port}`));