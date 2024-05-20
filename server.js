// import cookieParser from "cookie-parser";
// import cors from "cors";
// import express from "express";
// import axios from "axios";
const axios = require("axios");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(cors({ origin: 'http://localhost:3000' }));
app.get("/linkedin/profile", async (req, res) => {
  const url = `https://piloterr.com/api/v2/linkedin/profile/info?query=${req.query.query}`;
  const apiKey = "e2fd0053-18bf-4ff7-a8d3-7df3c9f5cee7";
  console.log("in server call, url=" + url + " query=" + req.query.query);
    try {
      const response = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
          "Access-Control-Allow-Origin": "*"
        },
      });
      res.json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: "An error occurred while fetching data from LinkedIn ",
      });
    }
});
// app.get("/linkedin", async (req, res) => {
//   console.log("in /linkedin api call");
// });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false, limit: "50mb" }));
// app.use(cookieParser());

// export default app;
