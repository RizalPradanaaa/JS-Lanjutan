// Higher Order Function
// Sebuah function yang beroperasi dengan function lain baik sebagai argument atau return value.


// Contoh 1
// ucap termasuk higher order function karena memiliki argument sebuah function.

// function ucapan pada argument disebut callback
// const ucap = (nama, ucapan) => {
//     console.log(`Hai ${nama}`);
//     ucapan();
// }

// function ucapan() {
//     alert('Selamat Makan');
// }

// ucap('Rizal', ucapan);



// Contoh 2
// sayhello termasuk higher order function karena memiliki return sebuah function. 
const sayhello = waktu =>{
    return function(nama) {
        console.log(`Hai ${nama}, Selamat ${waktu}`);
    }
}

let malam = sayhello('malam');
malam('Rizal');