const express = require("express");

const app = express();
const PORT = 80;

app.get("/", (req, res) => {
  res.send({ resp: "Hello world", from: req.baseUrl });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
