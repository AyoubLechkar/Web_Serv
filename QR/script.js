document.addEventListener('DOMContentLoaded', () => {
    const urlInput = document.getElementById('url');
    const generateBtn = document.getElementById('generate-btn');
    const qrcodeContainer = document.getElementById('qrcode');
    const downloadLink = document.getElementById('download-link');

    generateBtn.addEventListener('click', () => {
        const url = urlInput.value.trim();

        if (url === '') {
            alert('Please enter a valid URL.');
            return;
        }

        // Create a QRCode instance and generate the QR code
        const qrcode = new QRCode(qrcodeContainer, {
            text: url,
            width: 128,
            height: 128,
        });

        // Create a data URL for the QR code image
        const qrImageDataUrl = qrcodeContainer.querySelector('img').src;

        // Set the download link's href and display it
        downloadLink.href = qrImageDataUrl;
        downloadLink.style.display = 'block';
    });

    downloadLink.addEventListener('click', () => {
        // Add 'download' attribute to initiate the download
        downloadLink.setAttribute('download', 'qrcode.png');
    });
});
