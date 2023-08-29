<?php
$host = 'localhost';
$user = 'root';
$pwd = '';
$dbname = 'pert4_test';

$conn = new mysqli($host, $user, $pwd, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>

