// Arrow Function
// Bentuk penulisan lebih ringkas dari function expression



// // Function Declaration
// function cetak(nama) {
//     console.log(`Hai ${nama}`);
// } 

// // Function Expression
// const cetak = function(nama) {
//     console.log(`Hai ${nama}`);
// }



// Arrow Function
// const cetak = (nama) => {
//      return `Hai ${nama}`;
// }


// // Bila hanya ada satu paramater boleh tanpa ().
// const cetak = nama => {
//     return `Hai ${nama}`;
// }

// // Bila ada dua/lebih paramater harus ada ().
// const cetak = (nama, waktu) => {
//     return `Hai ${nama}, Selamat ${waktu}`;
// }


// //Bila tanpa paramater().
// const cetak = () => {
//     return`Hai`;
// }



// // bila yang ingin dilakukan hanya return
// // Disebut Implisit return
// const cetak = nama => `Hai ${nama}`;

// console.log(cetak('zal'));





// Contoh lain
let mahasiswa = ['Rizal Pradana', 'Gilang', 'Setiawan'];

// // Versi Function Declaration
// const panjang = mahasiswa.map(function(nama) {
//     return nama.length;
// });

// // Versi Arrow Function
// const panjang = mahasiswa.map(nama => nama.length); 


const panjang = mahasiswa.map(nama => ({
    nama, 'panjang': nama.length
}));
console.table(panjang);