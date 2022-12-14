// Closures
// Konsep hubungan antara function dengan lexical scope. atau
// disebut closures bila memiliki data dari lexical scope.

// function init(){
//     let nama = 'rizal';          // Lexical scope
//     function tampilnama() {      // Inner function(closures)
//         console.log(nama);       // akses ke parent variabel
//     }
//     tampilnama();
// }

// init();


// // Factory Function
// // Function yang sesuai function lain.
// function sapa(waktu) {
//     return function(nama) {
//         console.log(`Hai ${nama} Selamat ${waktu}`);
//     }
// }

// let pagi = sapa('pagi');
// pagi('zal');

// let siang = sapa('siang');
// siang('wang');

// let malam = sapa('malam');
// malam('dana');


// Private method/ Private variabel
// let add = function() {
//     let tombol = 0;
//     return function() {
//         return ++tombol;
//     }
// }

// let a = add();

// console.log(a());
// console.log(a());
// console.log(a());


let add = (function() {
    let tombol = 0;
    return function() {
        return ++tombol;
    }
})();

console.log(add());
console.log(add());
console.log(add());