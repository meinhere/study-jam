// hello world app!
console.log("Hello GDSC!");

// ini komentar 1 baris

/*
    ini
    komentar
    multi baris
*/

/**
 * ini
 * komentar
 * dokumentasi
 */

/**
 * Tipe data (primitive)
 * 
 * string
 * number => integer & float
 * -> integer 1, 2, 3, 4, 5, 6
 * -> float 3.14, 9.8, 1.6
 * Boolean
 * Undefined
 * 
 * jika tidak primitive (object)
 * Null
 * contoh = Struktur Data
 * -> Array []
 * -> Object {}
 */

// berikut konsep variabel
var tas = "buku";

// variabel kosong
var sesuatu;

// integer
var umur = 20;

// float
var PHI = 3.14;

// string
var nama = "Sani";

// boolean
var apakahMahasiswaAktif = true;

// variabel tidak bernilai
var bendaKosong = null;

// cek tipe data variabel
console.log(typeof(umur));
console.log(typeof(PHI));
console.log(typeof(nama));
console.log(typeof(apakahMahasiswaAktif));
console.log(typeof(bendaKosong));

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


// operator perbandingan
console.log(true == true);

console.log(false == true);

console.log("23" == 23);

console.log("23" === 23);


console.log(true != true);

console.log(false != true);

console.log("23" != 23);

console.log("23" !== 23);

console.log(100 > 23);

// operator logika
var cobaNilai = true;
console.log(true && true)

console.log("halo" && "hai")

console.log(! "halo" && "hai")

console.log(! true && true)

// operator matematika

// tambah
console.log(0 + 1);

// kurang
console.log(10 - 5);

// bagi
console.log(30 / 3);

// kali
console.log(3 * 5);

// kuadrat ** n
console.log(9 ** 1);
console.log(9 ** 2);
console.log(9 ** 3);

// hasil bagi (modulus)
console.log(10 % 3);

/**
 * Alur Kontrol
 * 
 * if else statement
 * ternary (singkatan if else statement)
 * switch (cek banyak kondisi)
 * -> truthy (semua data primitive/object yang bernilai true)
 * -> falsy [ kebalikan truthy ]
 * 
 * loop
 * -> for loop
 * -> while loop
 */

var nilai1 = true;
var nilai2 = "😕";

// alur kontrol 2 cabang
if (nilai1) {
    console.log("nilai termasuk 'truthy'");
} else {
    console.log("nilai termasuk 'falsy'");
}

// alur kontrol multi cabang
if (nilai2 == "😇") {
    console.log("nilai termasuk 'truthy'");
} else if (nilai2 === "😕") {
    console.log("kondisi lain dari baris ke 150");
} else {
    console.log("nilai termasuk 'falsy'");
}

// alur kontrol ternary
// alur kontrol 2 cabang

/*
if (truthy) {
    console.log(true);
} else {
    console.log(false);
}
*/

// var hasilCek = truthy ? true : false;

var hasilCek = true ? "🔥" : "❌" ;
console.log(hasilCek);

// Switch statement
var namaHewan = "kucing";

switch (namaHewan) {
    case "kucing":
        console.log("😻");
        break;
    case "ikan":
        console.log("🐟");
        break;
    case "merpati":
        console.log("🐦");
        break;
    default:
        console.log(namaHewan + " adalah hewan");
        break;
}