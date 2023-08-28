// mendefinisikan variabel dengan let
let x = 4;
let y = 5;

//menggunakan operator relasi
let lebihKecil = x < y;
let lebihBesarSamaDengan = x >= y;

// "==" membandingkan nilai, "===" membandingkan nilai & tipe data
let samaDengan = x == 4;
let samaDenganBanget = x === "4";

console.log("hasil = " + lebihKecil); //hasil = true
console.log("hasil = " + lebihBesarSamaDengan); //hasil = false
console.log("hasil = " + samaDengan); //hasil = true
console.log("hasil = " + samaDenganBanget); //hasil = false
