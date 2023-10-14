document.addEventListener("DOMContentLoaded", function() {
    const generateButton = document.querySelector("#generateButton");
    generateButton.addEventListener("click", generateQRCode);

    const downloadPNGButton = document.querySelector("#downloadPNGButton");
    const downloadPDFButton = document.querySelector("#downloadPDFButton");

    // Initially hide the download buttons
    downloadPNGButton.style.display = "none";
    downloadPDFButton.style.display = "none";
});

let qrCode;

const generateQRCode = () => {
    const qrText = document.querySelector("#qrText").value;
    const qrColor = document.querySelector("#qrColor").value;

    if (qrText.trim() === "") {
        alert("Please enter text to generate a QR code.");
        return;
    }

    qrCode = new QRious({
        element: document.querySelector("#qrCode"),
        size: 200,
        value: qrText,
        foreground: qrColor, // Set the QR code color
    });

    // Show the download buttons
    const downloadPNGButton = document.querySelector("#downloadPNGButton");
    const downloadPDFButton = document.querySelector("#downloadPDFButton");

    downloadPNGButton.style.display = "block";
    downloadPDFButton.style.display = "block";

    // Add event listeners for the download buttons
    downloadPNGButton.addEventListener("click", downloadAsPNG);
    downloadPDFButton.addEventListener("click", downloadAsPDF);
};

const downloadAsPNG = () => {
    if (qrCode) {
        const canvas = document.querySelector("#qrCode");
        const link = document.createElement("a");
        link.download = "qrcode.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    }
};

const downloadAsPDF = () => {
    if (qrCode) {
        const pdf = new jsPDF();
        const canvas = document.querySelector("#qrCode");
        pdf.addImage(canvas.toDataURL("image/png"), "PNG", 15, 15, 180, 180);
        pdf.save("qrcode.pdf");
    }
};
