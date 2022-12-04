const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// * Method
// get => ambil data
// post => nge-post (mau ada perubahan) ex: tambah
// put => update data
// patch => update data (nge-replace data yang terdapat perubahan)
// delete => nge-hapus data

let { data } = require("./data.json");
app.get("/", (req, res) => {
  res.status(200).json({ message: "data successfully fetched", data });
});

app.post("/tambahData", (req, res) => {
  const { nama, hobi } = req.body;

  data.push({ nama, hobi });

  return res.status(200).json({ message: "data successfully created", data });
});

app.put("/updateData/:name", (req, res) => {
  const { name } = req.params;
  const { nama, hobi } = req.body;

  data.map((dt, idx) => {
    if (dt.nama === name) {
      data[idx] = { nama, hobi };
    }
  });

  return res.status(200).json({ message: "data successfully updated", data });
});

app.delete("/deleteData/:name", (req, res) => {
  const { name } = req.params;

  const newData = data.filter((dt) => dt.nama !== name);
  data = newData;

  return res.status(200).json({ message: "data successfully updated", data });
});

PORT = 5000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
