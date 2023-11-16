<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Handle form submission
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $date = $_POST["date"];
    $time = $_POST["time"];

    // Validate and process the reservation (you can add your logic here)

    // For this example, let's assume the reservation is successful
    $response = [
        'success' => true,
        'message' => "Thank you, $name! Your reservation for $date at $time has been received."
    ];

    // Return JSON response
    header('Content-Type: application/json');
    echo json_encode($response);
} else {
    // Invalid request
    $response = [
        'success' => false,
        'message' => 'Invalid request'
    ];

    // Return JSON response
    header('Content-Type: application/json');
    echo json_encode($response);
}

?>