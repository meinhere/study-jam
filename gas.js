// console.log("Hello World");

// ini komentar satu baris

/*
ini 
komentar
multi baris
*/

/**
 * ini
 * komentar
 * untuk dokumentasi
 */

// -- Tipe Data --
/**
 * Tipe data primitive
 *
 * string
 * number => integer, float
 * -> integer 1, 4, 5, 7, 8
 * -> float 3.14, 2.5, 6.5
 * boolean
 * undefined
 * null
 *
 * Tipe data non primitive
 * => Stuktur Data
 * Array []
 * Object {}
 */

// -- Variabel --
/**
 * var
 * let
 * const -> immutable (tidak bisa diubah nilainya)
 */

// Integer
let umur = 15;

// Float
let tinggi = 17.5;

// String
let nama = "Sabil";

// Boolean
let apakahSemangat = true;

// Const
const PHI = 3.14;
// PHI = 4.15;

// Undefined
let bendaKosong;
bendaKosong = "tidak kosong";

// varibel bernilai kosong atau tidak ada
let nilai = null;

// console.log(`Nama saya ${nama}`);
// console.log(typeof umur);
// console.log(typeof tinggi);
// console.log(typeof nama);
// console.log(typeof apakahSemangat);
// console.log(typeof bendaKosong);

/**
 * Operator
 * operator logika
 * && -> and
 * || -> or
 * !
 *
 * -> operator perbandingan ==, ===, !=, !==, >, <, <=, >=
 *
 * ==   -> equal to
 * ===  -> equal value and equal type
 *
 * !=   -> not equal to
 * !==  -> not equal value and equal type
 *
 * -> operator matematika +, -, *, /, %, **
 *
 */

// * Operator
// Tambah
var hasilTambah = 10 + 10;

// Kurang
var hasilKurang = 100 - 10;

// Kali
var hasilKali = 10 * 4;

// Bagi
var hasilBagi = 100 / 2;

let hasil = undefined && "Hello";

// console.log(!"12");
console.log(hasil);

// if else statement
var namaHewan = "paus";

// if (namaHewan == "kucing") {
//   console.log("jenis hewan kucing");
// } else if (namaHewan == "ikan") {
//   console.log("jenis hewan ikan");
// } else {
//   console.log("hewan tidak dikenali");
// }

// switch case
// switch (namaHewan) {
//   case "kucing":
//     console.log("jenis hewan kucing");
//     break;
//   case "ikan":
//     console.log("jenis hewan ikan");
//     break;
//   default:
//     console.log("hewan tidak dikenali");
//     break;
// }

// operator ternary
// var namaHewan =
//   namaHewan == "kucing"
//     ? console.log("jenis hewan kucing")
//     : console.log("hewan tidak dikenali");

// * Stuktur Data
// Array
var students = ["mhs1", "mhs2", "mhs3", "mhs4"];
students[0];
students[2];

// Object
let dataMahasiswa = {
  name: "Sabil",
  from: "Nganjuk Pride",
};
// dataMahasiswa.nama;
// dataMahasiswa.age = 18;

let { name, from } = dataMahasiswa;
// console.log();

// * Loop
// For
for (let index = 0; index < students.length; index++) {
  var student = students[index];
}

hitung = 0;
while (hitung < 11) {
  // console.log(hitung);
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
