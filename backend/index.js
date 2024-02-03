const connectToMongo = require("./db");
const express = require("express");
var cors = require('cors');

connectToMongo();
const app = express();
const port = 5000;

const allowedOrigins = ['http://localhost:3000'];

app.use(cors({
  origin: allowedOrigins,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // enable credentials (cookies, headers)
  optionsSuccessStatus: 204, // some legacy browsers (IE11, various SmartTVs) choke on 204
}));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello Kenil Ghelani!') 
})

app.use('/api/auth', require('./Routes/Auth'));
app.use('/api/notes', require('./Routes/Notes'));

app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`);
});
