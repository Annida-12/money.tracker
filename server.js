const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to Money Tracker API");
});

app.get("/api/transactions", (req, res) => {
    res.json([
        { id: 1, description: "Buy groceries", amount: 50 },
        { id: 2, description: "Book purchase", amount: 30 },
    ]);
});

const PORT = process.env.PORT || 3000;
app.listen(3000, () => console.log("Server running!"));

