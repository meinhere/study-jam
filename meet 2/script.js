//* VAR
// a = 4;
// var a;
// console.log(a);

//* LET
// a = 4;
// let a = 1;
// console.log(a);

//* CONST
// const PHI = 3.14
// PHI = 4

//* PROMISE
// const ditepati = true;
// const janji = new Promise((res, rej) => {
//   if (ditepati) {
//     const data = [
//       { nama: "Sabil", alamat: "Nganjuk" },
//       { nama: "Ahmad", alamat: "Bleton" },
//     ];
//     setTimeout(() => {
//       res(data);
//     }, 3000);
//   } else {
//     rej("Ingkar");
//   }
// });

// console.log(janji);
// janji
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((rej) => {
//     console.log(rej);
//   })
//   .finally(() => {
//     console.log("Berhenti");
//   });

//* CALLBACK
// function sayHello(nama, panggil) {
//   nama = "Hello, " + nama;
//   console.log(nama);
//   panggil(nama);
// }

// sayHello("Sabil", (namaBaru) => {
//   console.log("Selamat pagi");
//   console.log(namaBaru);
// });

// let nums = [1, 2, 3, 4, 5];
// console.log(nums);
// let newNums = nums.map((num) => num * 2).filter((num) => num > 5);
// console.log(newNums);

//* ASYNC AWAIT
// function db() {
//   time = 6000;
//   return new Promise((res, rej) => {
//     if (time < 5000) {
//       let data = [
//         { nama: "Sabil", alamat: "Nganjuk" },
//         { nama: "Ahmad", alamat: "Bleton" },
//       ];
//       res(data);
//     } else {
//       rej("404");
//     }
//   });
// }

// async function getData() {
//   try {
//     const data = await db();
//     console.log(data);
//   } catch (err) {
//     console.error("code status : " + err);
//   }
//   return data;
// }

// getData();
// getData().then((res) => console.log(res));

//* FETCH
fetch("http://universities.hipolabs.com/search?country=Indonesia")
  .then((res) => res.json())
  .then((data) => {
    const utm = data.filter(
      (univ) => (univ.name = "Universitas Trunojoyo Madura")
    );
    console.log(utm);
  });
