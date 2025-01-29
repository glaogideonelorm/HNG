const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); 

const PORT = 3000;


app.get("/", (req, res) => {
  try {
    
    const response = {
      email: "glagogideonelorm2006@gmail.com", 
      current_datetime: new Date().toISOString(), 
      github_url: "<https://github.com/glaogideonelorm/HNG/tree/78857356a0d5f1278194a8210ebff1bf998a8bc9/stage%200/backend>" 
    };

    res.status(200).json(response);
  } catch (error) {
    console.error("Error generating response:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});


app.listen(PORT, () => {
  console.log(` Server running at: http://localhost:${PORT}`);
});
