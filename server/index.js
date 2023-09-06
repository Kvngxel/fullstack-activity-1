import express from "express";
// const express = require("express");
import sql from "./db.js";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello")
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
});