const express = require("express");
const app = express();

app.use(express.json());
const cors = require("cors");
app.use(cors());

const { add, select } = require("./user.js");

app.get("/getting", async (req, res) => {
  const list = await select();
  res.json(list);
});

app.post("/posting", async (req, res) => {
  const user = req.body;
  await add(user);
  res.json({ mesg: "check......" });
});
app.listen(8000, () => console.log("chal gya"));
