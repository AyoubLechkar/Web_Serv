document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('upload-form');
    const convertBtn = document.getElementById('convert-btn');
    const downloadLink = document.getElementById('download-link');
    const gifDownloadLink = document.getElementById('gif-download-link');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const response = await fetch('/convert', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            const downloadUrl = await response.text();
            gifDownloadLink.href = downloadUrl;
            downloadLink.style.display = 'block';
            gifDownloadLink.style.display = 'block';
        }
    });

    gifDownloadLink.addEventListener('click', () => {
        gifDownloadLink.click();
    });
});
