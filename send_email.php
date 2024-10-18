<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Your email address where you want to receive messages
    $to = "jamiljoseph25@gmail.com";

    // Email subject
    $subject = "Test form";

    // Email message
    $body = "Email: $email\n\nMessage:\n$message";

    // Send email
    if (mail($to, $subject, $body)) {
        echo "Your message has been sent successfully!";
    } else {
        echo "Sorry, something went wrong. Please try again later.";
    }
    exit();
}
?>
