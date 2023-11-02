<?php
include('phpqrcode/qrlib.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['data'])) {
        $link = $_POST['data']; // Get the link entered by the user
        $uniqueID = uniqid(); // Generate a unique identifier
        $qrCodeFile = 'qrcodes/user_generated_qr_' . $uniqueID . '.png'; // New file path with a unique identifier
        $color = isset($_POST['color']) ? $_POST['color'] : '#000000'; // Get the chosen color (default to black)

        // Create an empty QR code image with the chosen color
        QRcode::png($link, $qrCodeFile, QR_ECLEVEL_L, 10, 1, false, hexdec(substr($color, 1)), 0xFFFFFF);

        echo '<img src="' . $qrCodeFile . '"/>';
    } else {
        echo "Please enter a valid link.";
    }
}
