document.addEventListener('DOMContentLoaded', () => {
    const urlInput = document.getElementById('url');
    const generateBtn = document.getElementById('generate-btn');
    const qrcodeContainer = document.getElementById('qrcode');
    const downloadPngLink = document.getElementById('download-png-link');
    const downloadPdfLink = document.getElementById('download-pdf-link'); // Added this line

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

        // Set the download links' href and display them
        downloadPngLink.href = qrImageDataUrl;
        downloadPngLink.style.display = 'block';

        // Create a PDF document with the QR code
        const pdf = new jsPDF();
        pdf.addImage(qrImageDataUrl, 'PNG', 10, 10, 80, 80);

        // Save the PDF as a data URL
        const pdfDataUrl = pdf.output('datauristring');

        // Set the PDF download link's href and display it
        downloadPdfLink.href = pdfDataUrl;
        downloadPdfLink.style.display = 'block'; // Added this line
    });
});
