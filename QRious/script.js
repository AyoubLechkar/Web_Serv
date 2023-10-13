document.addEventListener("DOMContentLoaded", function() {
    const qrCode = new QRious({
        element: document.querySelector("#qrCode"),
        size: 200,
        value: "Code Grind",
    });

    const generateQRCode = () => {
        const qrText = document.querySelector("#qrText").value;
        qrCode.set({
            value: qrText,
        });
    };

    const generateButton = document.querySelector("#generateButton");
    generateButton.addEventListener("click", generateQRCode);
});

