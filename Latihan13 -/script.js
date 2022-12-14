// Async await
// Sebuah function yang dijalankan secara asyncronus, mengahasilkan sebuah promise, dan peulisan seperti function biasa

// let coba = new Promise(resolve=> {
//     setTimeout(() => {
//         resolve('OK');
//     }, 2000);
// })
// coba.then(m => console.log(m));

function cobaPromise() {
    return new Promise((resolve, reject) => {
        const time = 4000;
        if (time < 5000) {
            setTimeout(() => {
                resolve('ok');
            }, time);
        }else{
            reject('Kelamaan');
        }
    });
}

// cobaPromise()
//     .then(m => console.log(m))
//     .catch(m => console.log(m))

async function cobaasync() {
    try {
        const hasil = await cobaPromise();
        console.log(hasil);     
    } catch (error) {
        console.error(error);   
    }
}

cobaasync();