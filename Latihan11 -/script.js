// Promise
// Obeject yang mepresentasikan sebuah keberhasilan/kegagalan sebuah event yang asyncronus dalam masa yang akan datang
// janji (ditepati / ingkar)
// state (fulfield / rejected/ pending)
// callback (resolve / reject / finally)
// aksi (then / catch)



// // Contoh1
// let mhs = false;
// let janji1 = new Promise( (resolve, reject) => {
//     if (mhs) {
//         resolve('Janji Ditepati')
//     }else{
//         reject('Janji Dingkari')
//     }
// });

// console.log('mulai');
// janji1
//     .then(result => console.log('OK ' + result))
//     .catch(result => console.log('NOT ' + result));
// console.log('selesai');





// // Contoh2
// let arg = true;
// let janji2 = new Promise( (resolve, reject) => {
//     if (arg) {
//         setTimeout(() => {
//             resolve('Janji Ditepati Wait')
//         }, 5000);
//     }else{
//         setTimeout(() => {
//             reject('Janji Diingkari Wait')
//         }, 2000);
//     }
// } );

// console.log('mulai');
// janji2
//     .then(hasil => console.log('Ok ' + hasil))
//     .catch(hasil => console.log('Not ' + hasil));
// console.log('selesai');



// Promise.all
// Menjalankan semua promise bersamaan

let mhs = new Promise( resolve => {
    setTimeout(() => {
        resolve([{
            nama : 'Rizal',
            nim : 'C2C020012',
            prodi : 'Informatika'
        }]);
    }, 2000);
} );

let cuaca = new Promise( resolve => {
    setTimeout(() => {
        resolve([{
            loc : 'Blora',
            temp : 36,
            ket : 'Cerah'
        }]);
    }, 500);
});

Promise.all([mhs, cuaca])
    // .then(result => console.log(result))
    .then(result => {
        const [mhs, cuaca] = result;
        console.log(mhs);
        console.log(cuaca);
    })