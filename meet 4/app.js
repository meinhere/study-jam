const express = require("express");
const cors = require("cors");

var admin = require("firebase-admin");

var serviceAccount = require("./permission.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const app = express();
app.use(express.urlencoded());

app.post("/tambah", (req, res) => {
  console.log(req.body);
  (async () => {
    try {
      await db
        .collection("identitas")
        .doc("/" + req.body.nama + "/")
        .create({
          nama: req.body.nama,
          prodi: req.body.prodi,
          angkatan: req.body.angkatan,
        });

      res.status(200).send();
    } catch (err) {
      res.status(500).json({ message: err });
    }
  })();
});

app.get("/getData/:nama", (req, res) => {
  (async () => {
    await db
      .collection("identitas")
      .doc("/" + req.params.nama + "/")
      .get()

      .then((res) => {
        return res.status(200).json(res.data());
      })
      .catch((err) => {
        return res.status(500).json({ message: err });
      });
  })();
});

app.put("/update/:nama", (req, res) => {
  (async () => {
    await db
      .collection("identitas")
      .doc("/" + req.params.nama + "/")
      .update({
        nama: req.body.nama,
        prodi: req.body.prodi,
        angkatan: req.body.angkatan,
      })

      .then((res) => {
        return res.status(200).json(res);
      })
      .catch((err) => {
        return res.status(500).json({ message: err });
      });
  })();
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "success" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server running in port ${PORT}`);
});
