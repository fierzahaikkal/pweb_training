<?php

//membuat variabel untuk parameter koneksi
$host = 'nama_host';
$user = 'username_mysql';
$pwd = 'password_mysql';
$dbname = 'nama_db';

//membuat koneksi ke database
$conn = new mysqli($host, $user, $pwd, $dbname);

//jika gagal mengkoneksi akan eksesuki statement ini
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
