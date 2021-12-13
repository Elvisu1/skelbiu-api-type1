const express = require('express');
const morgan = require('morgan');
const cors = require('cors');


const PORT = process.env.SERVER_PORT || 5000;

const app = express();
//middleware
app.use(morgan('common'));
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    res.send('hello')
});
app.get('/login', async (req, res) => {
    res.send({msg:'success', token:''})
});
app.get('/register', async (req, res) => {
    res.send({msg:'success', token:''})
});
// Routes import
const loginRoutes = require('./api/auth/login')
const registerRoutes = require('./api/auth/register')

// Use routes
app.use('/login', loginRoutes)
app.use('/register', registerRoutes)


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
