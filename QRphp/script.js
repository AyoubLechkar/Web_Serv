document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("qr-form");
    const qrCodeContainer = document.getElementById("qr-code");

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const formData = new FormData(form);
        const link = formData.get("data");

        // Add a cache-busting parameter to the URL
        const cacheBuster = new Date().getTime();
        const url = `generate_qr.php?${cacheBuster}`;

        // Send an AJAX request to generate the QR code
        fetch(url, {
            method: "POST",
            body: formData
        })
        .then(response => response.text())
        .then(qrCodeHtml => {
            // Clear the existing QR code and replace it with the new one
            qrCodeContainer.innerHTML = qrCodeHtml;
        })
        .catch(error => {
            console.error("An error occurred: " + error);
        });
    });
});
