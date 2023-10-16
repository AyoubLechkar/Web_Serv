// Add event listeners to the buttons
const linkBtn = document.getElementById('linkBtn');
const contactBtn = document.getElementById('contactBtn');
const wifiBtn = document.getElementById('wifiBtn');
const pdfBtn = document.getElementById('pdfBtn');
const appBtn = document.getElementById('appBtn');
const textBtn = document.getElementById('textBtn');
const imageBtn = document.getElementById('imageBtn');
const cryptoBtn = document.getElementById('cryptoBtn');


// Add listeners for other buttons as well
linkBtn.addEventListener('click', () => {
    showLinkForm();
});

contactBtn.addEventListener('click', () => {
    showContactForm();
});

wifiBtn.addEventListener('click', () => {
    showWifiForm();
});

pdfBtn.addEventListener('click', () => {
    showPdfUploadForm();
});

appBtn.addEventListener('click', () => {
    showAppLinkForm();
});

textBtn.addEventListener('click', () => {
    showTextForm();
});

imageBtn.addEventListener('click', () => {
    showImageUploadForm();
});

cryptoBtn.addEventListener('click', () => {
    showCryptoPaymentForm();
});

// Function to show the Link QR code form
function showLinkForm() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `
        <h2>Generate QR Code for a Link</h2>
        <label for="linkInput">Enter the URL:</label>
        <input type="text" id="linkInput">
        <button id="generateLinkQR">Generate QR</button>
        <div id="qrcode"></div>
    `;
    
    const generateLinkQRBtn = document.getElementById('generateLinkQR');
    
    generateLinkQRBtn.addEventListener('click', () => {
        const linkInput = document.getElementById('linkInput').value;
        generateQRCode("Link", linkInput);
    });
}

// Function to show the Contact Info QR code form
function showContactForm() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `
        <h2>Generate QR Code for Contact Info</h2>
        <label for="fullNameInput">Full Name:</label>
        <input type="text" id="fullNameInput"><br>

        <label for="emailInput">Email:</label>
        <input type="text" id="emailInput"><br>

        <label for="addressInput">Address:</label>
        <input type="text" id="addressInput"><br>

        <label for="websiteInput">Website (Optional):</label>
        <input type="text" id="websiteInput"><br>

        <label for="phoneInput">Phone Number:</label>
        <input type="text" id="phoneInput"><br>

        <button id="generateContactQR">Generate QR</button>
        <div id="qrcode"></div>
    `;
    
    const generateContactQRBtn = document.getElementById('generateContactQR');
    
    generateContactQRBtn.addEventListener('click', () => {
        const fullName = document.getElementById('fullNameInput').value;
        const email = document.getElementById('emailInput').value;
        const address = document.getElementById('addressInput').value;
        const website = document.getElementById('websiteInput').value;
        const phone = document.getElementById('phoneInput').value;

        const contactInfoData = {
            fullName,
            email,
            address,
            website,
            phone,
        };

        generateQRCode("ContactInfo", contactInfoData);
    });

}


function showWifiForm() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `
        <h2>Generate QR Code for Wi-Fi</h2>
        <label for="ssidInput">Wi-Fi SSID:</label>
        <input type="text" id="ssidInput"><br>

        <label for="securityTypeInput">Security Type:</label>
        <select id="securityTypeInput">
            <option value="WPA/WPA2">WPA/WPA2</option>
            <option value="WEP">WEP</option>
            <option value="NONE">NONE</option>
            <option value="RAW">RAW</option>
        </select><br>

        <label for="passwordInput">Password:</label>
        <input type="password" id="passwordInput"><br>

        <button id="generateWifiQR">Generate QR</button>
        <div id="qrcode"></div>
    `;

    const generateWifiQRBtn = document.getElementById('generateWifiQR');

    generateWifiQRBtn.addEventListener('click', () => {
        const ssid = document.getElementById('ssidInput').value;
        const securityType = document.getElementById('securityTypeInput').value;
        const password = document.getElementById('passwordInput').value;

        const wifiData = {
            ssid,
            securityType,
            password,
        };

        generateQRCode("WiFi", wifiData);
    });
}

function showPdfUploadForm() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `
        <h2>Generate QR Code for PDF</h2>
        <input type="file" id="pdfInput" accept=".pdf" required><br>

        <button id="generatePdfQR">Generate QR</button>
        <div id="qrcode"></div>
    `;

    const generatePdfQRBtn = document.getElementById('generatePdfQR');
    const pdfInput = document.getElementById('pdfInput');

    generatePdfQRBtn.addEventListener('click', () => {
        const pdfFile = pdfInput.files[0];

        if (pdfFile) {
            // You can handle the PDF file here, for example, by uploading it to your server and generating a QR code for the link to the uploaded PDF.
            // Example: generateQRCode("PDF", pdfFileURL);
        } else {
            alert("Please select a PDF file.");
        }
    });
}

function showAppLinkForm() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `
        <h2>Generate QR Code for Application</h2>
        
        <label for="appStoreLink">App Store Link:</label>
        <input type="text" id="appStoreLink" placeholder="https://example.com/app-store-link"><br>

        <label for="playStoreLink">Play Store Link:</label>
        <input type="text" id="playStoreLink" placeholder="https://example.com/play-store-link"><br>

        <label for="otherDevicesLink">Other Devices Link:</label>
        <input type="text" id="otherDevicesLink" placeholder="https://example.com/other-devices-link"><br>

        <button id="generateAppQR">Generate QR</button>
        <div id="qrcode"></div>
    `;

    const generateAppQRBtn = document.getElementById('generateAppQR');

    generateAppQRBtn.addEventListener('click', () => {
        const appStoreLink = document.getElementById('appStoreLink').value;
        const playStoreLink = document.getElementById('playStoreLink').value;
        const otherDevicesLink = document.getElementById('otherDevicesLink').value;

        // You can handle the links and generate a QR code here.
        // Example: generateQRCode("Application", { appStoreLink, playStoreLink, otherDevicesLink });
    });
}

function showTextForm() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `
        <h2>Generate QR Code for Text</h2>
        <label for="textInput">Enter Text:</label>
        <textarea id="textInput" rows="5" placeholder="Enter your text here..."></textarea><br>
        <button id="generateTextQR">Generate QR</button>
        <div id="qrcode"></div>
    `;

    const generateTextQRBtn = document.getElementById('generateTextQR');

    generateTextQRBtn.addEventListener('click', () => {
        const text = document.getElementById('textInput').value;
        // Generate a QR code based on the entered text.
        // Example: generateQRCode("Text", text);
    });
}

function showImageUploadForm() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `
        <h2>Generate QR Code for Image</h2>
        <label for="imageInput">Upload Image:</label>
        <input type="file" id="imageInput" accept=".jpg, .jpeg, .png" required><br>
        <button id="generateImageQR">Generate QR</button>
        <div id="qrcode"></div>
    `;

    const generateImageQRBtn = document.getElementById('generateImageQR');
    const imageInput = document.getElementById('imageInput');

    generateImageQRBtn.addEventListener('click', () => {
        const imageFile = imageInput.files[0];

        if (imageFile) {
            // You can handle the image file here, for example, by uploading it to your server and generating a QR code for the image link.
            // Example: generateQRCode("Image", imageFileURL);
        } else {
            alert("Please select an image file.");
        }
    });
}

function showCryptoPaymentForm() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `
        <h2>Generate QR Code for Crypto Payment</h2>
        <label>Select Cryptocurrency:</label>
        <input type="radio" id="bitcoinRadio" name="cryptoType" value="Bitcoin">
        <label for="bitcoinRadio">Bitcoin</label>
        <input type="radio" id="ethereumRadio" name="cryptoType" value="Ethereum">
        <label for="ethereumRadio">Ethereum</label><br>

        <label for="cryptoAddress">Receiver Cryptocurrency Address:</label>
        <input type="text" id="cryptoAddress" placeholder="Enter cryptocurrency address"><br>

        <label for="textMessage">Optional Text Message:</label>
        <textarea id="textMessage" rows="5" placeholder="Enter an optional message..."></textarea><br>

        <button id="generateCryptoQR">Generate QR</button>
        <div id="qrcode"></div>
    `;

    const generateCryptoQRBtn = document.getElementById('generateCryptoQR');

    generateCryptoQRBtn.addEventListener('click', () => {
        const selectedCrypto = document.querySelector('input[name="cryptoType"]:checked').value;
        const cryptoAddress = document.getElementById('cryptoAddress').value;
        const textMessage = document.getElementById('textMessage').value;

        // Generate a QR code for the selected cryptocurrency, address, and optional text message.
        // Example: generateQRCode("CryptoPayment", { selectedCrypto, cryptoAddress, textMessage });
    });
}

// Function to generate QR code based on user input
function generateQRCode(contentType, contentData) {
    // Get the div where the QR code will be displayed
    const qrCodeDiv = document.getElementById('qrcode');
    
    // Create a new QRious instance and set common options
    const qr = new QRious({
        size: 200, // Set the size of the QR code (adjust as needed)
    });

    // Check the content type and generate a QR code accordingly
    if (contentType === "Link") {
        // For a link, set the URL as the value
        qr.set({
            value: contentData, // URL for the link
        });
    } else if (contentType === "ContactInfo") {
        // Handle contact info data and generate QR code
        // Example VCard for Contact Info
        const vCardData = `BEGIN:VCARD
        VERSION:3.0
        FN:${document.getElementById('fullNameInput').value}
        TEL:${document.getElementById('phoneInput').value}
        EMAIL:${document.getElementById('emailInput').value}
        ADR:${document.getElementById('addressInput').value}
        END:VCARD`;
        console.log(vCardData);
        qr.set({
            value: vCardData, // Contact info data in VCard format
        });
    } else if (contentType === "WiFi") {
        // Handle Wi-Fi data and generate QR code
        // Example Wi-Fi Configuration String
        const wifiData = "WIFI:T:WPA;S:MyNetwork;P:MyPassword;;";
        qr.set({
            value: wifiData, // Wi-Fi configuration data
        });
    } else if (contentType === "PDF") {
        // For a PDF, set the PDF link as the value
        qr.set({
            value: contentData, // PDF link
        });
    } else if (contentType === "Application") {
        // Handle application download links and generate QR code
        qr.set({
            value: contentData, // Application download link
        });
    } else if (contentType === "Text") {
        // Handle text data and generate QR code
        qr.set({
            value: contentData, // Text content
        });
    } else if (contentType === "Image") {
        // Handle image data and generate QR code
        qr.set({
            value: contentData, // Image link
        });
    } else if (contentType === "CryptoPayment") {
        // Handle cryptocurrency payment data and generate QR code
        qr.set({
            value: contentData, // Cryptocurrency payment data
        });
    }

    // Clear the QR code div and append the newly generated QR code
    qrCodeDiv.innerHTML = '';
    qrCodeDiv.appendChild(qr.image);
}


