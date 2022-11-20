console.log("Hello World!!");

// * Jenis Komentar
// ini komentar satu baris

/* 
ini komentar
multi baris 
*/

/**
 * ini
 * study jam
 * GDSC
 * back end
 */

// * Variabel
// Number
var umur = 10;
var PHI = 3.14;

// String
var tas = "buku";

// Boolean
var apakahMahasiswa = true;

// Inisialisasi variabel
var sesuatu;
sesuatu = "benda";

// Null variabel
var bendaKosong = null;

// * Operator
// Tambah
var hasilTambah = 10 + 10;

// Kurang
var hasilKurang = 100 - 10;

// Kali
var hasilKali = 10 * 4;

// Bagi
var hasilBagi = 100 / 2;

var hasil = undefined && "hallo";

!"12";

// if else statement
var namaHewan = "paus";

if (namaHewan == "kucing") {
  console.log("jenis hewan kucing");
} else if (namaHewan == "ikan") {
  console.log("jenis hewan ikan");
} else {
  console.log("hewan tidak dikenali");
}

// switch case
switch (namaHewan) {
  case "kucing":
    console.log("jenis hewan kucing");
    break;
  case "ikan":
    console.log("jenis hewan ikan");
    break;
  default:
    console.log("hewan tidak dikenali");
    break;
}

// operator ternary
var namaHewan =
  namaHewan == "kucing"
    ? console.log("jenis hewan kucing")
    : console.log("hewan tidak dikenali");

// * Stuktur Data
// Array
var students = ["mhs1", "mhs2", "mhs3", "mhs4"];
students[0];
students[2];

// Object
var dataMahasiswa = {
  nama: "Sabil",
  asal: "Nganjuk Pride",
};
dataMahasiswa.nama;
dataMahasiswa["nama"];

// * Loop
// For
for (let index = 0; index < students.length; index++) {
  var student = students[index];
}

hitung = 0;
while (hitung < 11) {
  console.log(hitung);
  hitung++;
}

// * Function
function sayHello() {
  return "Hello World";
}

var sapa = sayHello();

var panggil = () => "Halo guys";

var hitungAngka = () => {
  var hasil = 5;
  hasil++;
  return hasil;
};
