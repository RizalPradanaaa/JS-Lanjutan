// Destructing Fuction


// // Destructing Return Value
// function kalkulator(a,b) {
//     return [a+b, a*b, a-b, a/b];
// }

// let [tambah, kali, kurang, bagi] = kalkulator(10,5);
// console.log(kali);

// function kalkulator(a,b) {
//     return {
//         kali : a*b,
//         bagi : a/b,
//         tambah : a+b,
//         kurang : a-b
//     };
// }

// let {kurang, kali, bagi, tambah} = kalkulator(3,5);
// console.log(kali);



// Destructing Arguments
let mhs1 = {
    nama : 'Rizal',
    nim : 'C2C020012',
    nilai : {
        tugas : 80,
        uts : 75,
        uas : 85
    }
};

function hay({nama, nilai : {uts, uas}}) {
    return `Hai Saya ${nama} nilai uts saya adalah ${uts}`;
}

console.log(hay(mhs1));

