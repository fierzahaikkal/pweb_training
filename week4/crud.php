<?php
// membuat file yang di db.php dapat berfungsi disini
include 'db.php';

//fungsi untuk membuat task baru
function createTask($task)
{
    global $conn; //membuat koneksi db tersedia dalam fungsi

    //prepare digunakan untuk menyiapkan statement query, sehingga akan pre-compile dan mengoptimasi query
    $stmt = $conn->prepare("INSERT INTO todos (task) VALUES (?)");
    //menaruh nilai yang dibutuhkan oleh fungsi prepare
    $stmt->bind_param("s", $task); //"s" untuk string
    $stmt->execute(); //untuk menjalankan statement yang sudah disiapkan
    $stmt->close(); //untuk menutup statement saat sudah selesai
}

//fungsi untuk mengambil tugas
function getTasks()
{
    global $conn; //membuat koneksi db tersedia dalam fungsi

    $result = $conn->query("SELECT id, task, completed FROM todos"); //menjalaankan query db
    $tasks = []; //membuat array kosong sebagai wadah

    //looping data yang diambil
    if ($result->num_rows > 0) {
        //mengulang setiap baris hasil dan mengambil sebagai array asosiatif (kolom = key, nilai kolom = value)
        while ($row = $result->fetch_assoc()) {
            //setiap iterasi akan ditambahkan ke dalam array tasks
            $tasks[] = $row;
        }
    }

    return $tasks; //me return hasil dari tasks
}

//
function markTaskAsCompleted($id)
{
    global $conn; //membuat koneksi db tersedia dalam fungsi

    //prepare digunakan untuk menyiapkan statement query, sehingga akan pre-compile dan mengoptimasi query
    $stmt = $conn->prepare("UPDATE todos SET completed = 1 WHERE id = ?");
    $stmt->bind_param("i", $id); //"i" untuk integer
    $stmt->execute(); //untuk menjalankan statement yang sudah disiapkan
    $stmt->close(); //untuk menutup statement saat sudah selesai
}
