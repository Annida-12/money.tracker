const express = require("express");
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to Money Tracker API");
});

app.get("/api/hello", (req, res) => {
    res.json({ message: "Hello from the backend!" });
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Backend berjalan di port ${PORT}`));

