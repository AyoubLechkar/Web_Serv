const express = require('express');
const multer = require('multer');
const gifify = require('gifify');
const fs = require('fs');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/convert', upload.array('images'), async (req, res) => {
    try {
        const images = req.files;
        const delay = parseInt(req.body.delay);

        if (!images || !delay || isNaN(delay)) {
            throw new Error('Invalid input');
        }

        const tempDir = path.join(__dirname, 'temp');
        fs.mkdirSync(tempDir, { recursive: true });

        const imagePaths = images.map((image, index) => {
            const imagePath = path.join(tempDir, `image${index}.png`);
            fs.writeFileSync(imagePath, image.buffer);
            return imagePath;
        });

        const gifPath = path.join(tempDir, 'output.gif');

        gifify(imagePaths, { delay: delay * 1000 }, (err, gifBuffer) => {
            if (err) {
                console.error(err);
                res.status(500).send('Error creating GIF');
                return;
            }

            // Set the filename for the download
            const filename = 'output.gif'; // You can customize the filename if needed

            // Set headers to trigger the file download dialog
            res.setHeader('Content-Type', 'application/octet-stream');
            res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);

            // Send the GIF file as a response
            res.send(gifBuffer);

            fs.rmdirSync(tempDir, { recursive: true });
        });
    } catch (error) {
        console.error(error);
        res.status(400).send('Invalid input');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
