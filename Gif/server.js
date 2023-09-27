const express = require('express');
const multer = require('multer');
const gifify = require('gifify');
const fs = require('fs');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Set up static files and middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Set up file upload using multer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Define a route to render the HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Define a route to handle GIF conversion
app.post('/convert', upload.array('images'), async (req, res) => {
    try {
        const images = req.files;
        const delay = parseInt(req.body.delay);

        // Check if images and delay are provided
        if (!images || !delay || isNaN(delay)) {
            throw new Error('Invalid input');
        }

        // Create a temporary directory to store image files
        const tempDir = path.join(__dirname, 'temp');
        fs.mkdirSync(tempDir, { recursive: true });

        // Save uploaded images to the temporary directory
        const imagePaths = images.map((image, index) => {
            const imagePath = path.join(tempDir, `image${index}.png`);
            fs.writeFileSync(imagePath, image.buffer);
            return imagePath;
        });

        // Define output path for the GIF
        const gifPath = path.join(tempDir, 'output.gif');

        // Create the GIF using gifify
        gifify(imagePaths, { delay: delay }, (err, gifBuffer) => {
            if (err) {
                console.error(err);
                res.status(500).send('Error creating GIF');
                return;
            }

            // Send the GIF file as a response
            res.setHeader('Content-Type', 'image/gif');
            res.setHeader('Content-Disposition', 'attachment; filename="output.gif"');
            res.send(gifBuffer);

            // Clean up temporary files
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
