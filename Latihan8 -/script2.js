// Rest Paramater

// // Array
// let kelompok = ['Rizal','Reyhan','Jodi','Gilang'];

// let [ketua,...anggota]= kelompok;
// console.log(anggota);

// // Object
// const tim = {
//     pj : 'zal',
//     front : 'Wang',
//     back : 'Dana'
// }

// let {pj : ketua, ...anggota} = tim;
// console.log(anggota);


function tipee(type, ...value) {
    return value.filter( a => typeof a === type);
}

let a = tipee('boolean', 'zal', 1, 500, 'wang', true, false);

console.log(a);