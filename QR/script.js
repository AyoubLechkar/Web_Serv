function generateQRCode() {
    const inputText = document.getElementById('inputText').value;
    const color = document.getElementById('colorPicker').value;

    // Create a QR code with the selected color
    const qr = new QRCode(document.getElementById("qrcode"), {
        text: inputText,
        width: 128,
        height: 128,
        colorDark: color, // Set the color of the dark modules (foreground)
    });

    // Show the download buttons after generating the QR code
    document.getElementById('downloadImageBtn').style.display = 'inline-block';
    document.getElementById('downloadPDFBtn').style.display = 'inline-block';
}

function downloadQRCodeAsImage() {
    const canvas = document.getElementById('qrcode').querySelector('canvas');
    const url = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = url;
    link.download = 'qrcode.png';
    link.click();
}

function downloadQRCodeAsPDF() {
    const canvas = document.getElementById('qrcode').querySelector('canvas');
    const pdf = new jsPDF();

    const imgData = canvas.toDataURL('image/png');
    // pdf.addImage(imgData, 'PNG', 10, 10, 100, 100);
    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 10, 10, 100, 100);
    
    pdf.save('qrcode.pdf');
}