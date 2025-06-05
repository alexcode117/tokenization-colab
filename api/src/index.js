import express from "express";
import morgan from "morgan";

const app = express();

// Middleware to parse JSON body
app.use(express.json());
app.use(morgan("dev"));


app.get("/hello", (req, res) => {
    res.send("Hello World");
});

app.post("/login", (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);
    if (username === "admin" && password === "12345678") {
        res.send("Login successful");
    } else {
        res.status(401).send("Login failed");
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});