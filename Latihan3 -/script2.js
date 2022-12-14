// This pada arrow Function

// 1. this di constructor function
// function mahasiswa() {
//     this.nama = 'Rizal';        //lexical scope
//     this.waktu = 'Malam';

//     this.sayhello = function() {
//         console.log(`Hai ${this.nama}, Selamat ${this.waktu}`);
//     }
// }
// function mahasiswa() {
//     this.nama = 'Rizal';
//     this.waktu = 'Malam';

//     this.sayhello = () => {
//         console.log(`Hai ${this.nama}, Selamat ${this.waktu}`);
//     }
// }
// const name = new mahasiswa();


// Saat menggunakan Constructor function terlihat tidal ada bedanya. Beda hal jika meggunakan object literal seperti dibawah


// // Object literal
// const mahasiswa = {
//     nama : 'Rizal',
//     waktu : 'siang',

//     sayhello : function() {
//         console.log(`Hai ${this.nama}, Selamat ${this.waktu}`);
//     }
// }
// jika pada fun exspression konsep this akan mengacu pada context object mahasiswa, jadi bisa mengambil data pada lexical scope



// var nama = 'Boy';
// const mahasiswa = {
//     nama : 'Rizal',
//     waktu : 'Malam',

//     sayhello : () =>{
//         console.log(`Hai ${this.nama}, Selamat ${this.waktu}`);
//     }
// }
// // jika pada arrow function, tidak ada context this, maka akan mencari ke lexical scope. tapi karena di lexical scope tidak ada this.nama maka akan keatas ke window/ global. karena di global ada var nama maka mengambil dari situ.



// Contoh penerapan langsung

const kotak = document.querySelector('.kotak');
kotak.addEventListener('click', function () {
    let a = 'size';
    let b = 'color';

    if (this.classList.contains(a)) {
        [a,b] = [b,a];
    }

    this.classList.toggle(a);

    setTimeout(()=>{
        this.classList.toggle(b);
    }, 500);
});

// Pada program tersebut di setTimeout harus memakai arrow function karena this mengacu pada kotak, jika function biasa this akan mengacu pada window


