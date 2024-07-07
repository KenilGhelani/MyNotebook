const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");

const app = express();
const port = 5000;

//Connect to Mongo
connectToMongo();

//Middleware
app.use(cors({
  origin: 'https://mynotebook-frontend.vercel.app',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));
app.use(express.json());

//Routes
app.get("/", (req, res) => {
  res.send("Hello Kenil Ghelani!");
});

app.use("/api/auth", require("./Routes/Auth"));
app.use("/api/notes", require("./Routes/Notes"));

//Start server
app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`);
});
