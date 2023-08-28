// membuat class parent
class Kendaraan {
  constructor(merk, kecepatan, warna) {
    //mendefinisikan constructor, digunakan untuk menampung properti
    this.merk = merk;
    this.kecepatan = kecepatan;
    this.warna = warna;
  }
  // membuat behavior atau method
  mesinHidup() {
    console.log("menyalakan mesin");
  }

  klakson() {
    console.log("bunyikan Klakson");
  }
}

// membuat children object
class Mobil extends Kendaraan {
  mesinHidup() {
    console.log("suara mobil..");
  }
  klakson() {
    console.log("klakson mobil");
  }
}
//membuat children object
class Motor extends Kendaraan {
  mesinHidup() {
    console.log("suara motor");
  }
  klakson() {
    console.log("klakson motor");
  }
}
// inisialisasi children object
const mobil = new Mobil("Mitsubishi", 100, "Putih");
const motor = new Motor("Yamaha", 60, "Hitam");

// Nama Kendaraan
console.log(mobil);
console.log(motor);

// Perilaku Kendaraan
mobil.klakson();
motor.mesinHidup();
