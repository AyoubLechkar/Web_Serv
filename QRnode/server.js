const express = require('express');
const fileUpload = require('express-fileupload');
const QRious = require('qrious');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(fileUpload());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/upload', (req, res) => {
  if (!req.files || !req.files.pdf) {
    return res.status(400).send('No PDF file uploaded.');
  }

  const pdf = req.files.pdf;
  const pdfPath = __dirname + '/uploads/' + pdf.name;
  const pdfUrl = '/uploads/' + pdf.name;

  pdf.mv(pdfPath, (err) => {
    if (err) {
      return res.status(500).send(err);
    }

    const qr = new QRious({
      value: `file://${pdfPath}`,
      size: 300,
    });

    res.redirect(`/qr.html?pdfUrl=${pdfUrl}`);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
