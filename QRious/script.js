document.addEventListener("DOMContentLoaded", function() {
    const generateLinkButton = document.querySelector("#generateLinkButton");
    const generateContactButton = document.querySelector("#generateContactButton");
    generateLinkButton.addEventListener("click", function() {
        showForm("linkForm");
    });
    generateContactButton.addEventListener("click", function() {
        showForm("contactForm");
    });

    document.querySelector("#generateLinkQRButton").addEventListener("click", generateLinkQR);
    document.querySelector("#generateContactQRButton").addEventListener("click", generateContactQR);
    
    function showForm(formId) {
        const forms = document.querySelectorAll(".inputForm");
        forms.forEach(form => {
            form.style.display = "none";
        });
        const form = document.querySelector(`#${formId}`);
        form.style.display = "block";
    }
});

// Function to generate QR code for links
const generateLinkQR = () => {
    const link = document.querySelector("#link").value;
    const qrColor = document.querySelector("#qrColor").value;
    const backgroundColor = document.querySelector("#backgroundColor").value;

    if (link.trim() === "") {
        alert("Please enter a link to generate a QR code.");
        return;
    }

    // Generate the QR code for the link
    const qrCode = new QRious({
        element: document.querySelector("#qrCode"),
        size: 200,
        value: link,
        foreground: qrColor,
        background: backgroundColor,
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

// Function to generate QR code for contact information
const generateContactQR = () => {
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const phone = document.querySelector("#phone").value;
    const city = document.querySelector("#city").value;
    const country = document.querySelector("#country").value;
    const qrColor = document.querySelector("#qrColor").value;
    const backgroundColor = document.querySelector("#backgroundColor").value;

    // Construct contact info string
    const contactInfo = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCity: ${city}\nCountry: ${country}`;

    // Generate the QR code for contact info
    const qrCode = new QRious({
        element: document.querySelector("#qrCode"),
        size: 200,
        value: contactInfo,
        foreground: qrColor,
        background: backgroundColor,
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