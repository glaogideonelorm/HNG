const express = require("express");

const fs = require("fs");

const app = express();

app.use = express();

app.get("/", (req, res) => {
  try {
    const data = fs.readFileSync("./data.json", "utf8");
    const body = JSON.parse(data);
    console.log(body);
    res
      .sendStatus(200)
      .json({
        sucess: true,
        message: "Successfully read and sent data",
        data: body,
      });
  } catch (error) {
    res.send(500).json({ sucess: false, message: "Unable to parse data" });
    console.error("Unable to forward data");
  }
});

app.listen(3000, () => {
  console.log({
    sucess: true,
    message: "Server started at http://localhost:3000",
  });
});
