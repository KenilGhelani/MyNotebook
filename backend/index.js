const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");

const app = express();
const port = 5000;

//Connect to Mongo
connectToMongo();

//Middleware
const corsOptions = {
  origin: 'https://mynotebook-frontend-a61z7sz0w-kenil-ghelanis-projects.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
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
