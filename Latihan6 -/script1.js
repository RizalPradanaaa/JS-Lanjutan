// Destructing Assignment/Variabel
// Adalah membongkar sebuah nialai dari array atau properti dai object ke sebuah variabel baru


// // Destructing Array
// const angka = [1,2,4,5];
// let [a,b,c,d] = angka;
// console.log(b);


// // Skipping
// const sayhello = ['Hai','Saya','Rizal','Pradana'];
// let [sapa,,,d] = sayhello;
// console.log(d);


// // Swapp
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a,b] = [b,a];
// console.log(a);
// console.log(b);


// //Rest Parameter
// const sayhello = ['Hai','Saya','Rizal','Pradana'];
// let [sapa, ...values] = sayhello;
// console.log(values);


// // Return value function
// function angka() {
//     return [1,2,3];
// }

// let [a,b,c] = angka();
// console.log(b);





// // Destructing Object
// let mhs1 = {
//     nama : 'Rizal',
//     nim : 'C2C020012',
//     umur : 20
// }

// let {nama, nim, umur} = mhs1;
// console.log(umur);


// // assignment tanpa deklarasi object
// let {nama, nim, umur} = {
//     nama : 'Rizal',
//     nim : 'C2C020012',
//     umur : 20
// };
// console.log(nama);


// // membuat nama variabel baru
// let mhs1 = {
//     nama : 'Rizal',
//     nim : 'C2C020012',
//     umur : 20
// }

// let {nama : nm, nim : n, umur : u} = mhs1;


// memberi nilai default
// let mhs1 = {
//     nama : 'Rizal',
//     nim : 'C2C020012'
//     // umur : 20
// }
// let {nama = 'king', nim, umur = 17} = mhs1;
// console.log(umur);


// // gabungan
// let mhs1 = {
//     // nama : 'Rizal',
//     nim : 'C2C020012',
//     umur : 20
// }

// let {nama : nm = 'zal', nim, umur} = mhs1;


// // rest paramater
// let mhs1 = {
//     nama : 'Rizal',
//     nim : 'C2C020012',
//     umur : 20
// }
// let {nama, ...value} = mhs1;


// Menerima field object, setelah dikirim melalui parameter function
let mhs = {
    nama : 'Rizal',
    nim : 'C2C020012',
    umur : 20
};
// destructing dilakukan diparamater
function sayhello({nama, umur}) {
    return `Hai Saya ${nama}, Berumur ${umur}`;
}

console.log(sayhello(mhs));

