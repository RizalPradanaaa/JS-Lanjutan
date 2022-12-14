// For of dan for in

// // For of
// let mhs = ['rizal','nawang','pradana','1234'];

// Dengan for biasa
// for (let i = 0; i < mhs.length; i++) {
//     console.log(`Hai Saya ${mhs[i]} index saya : ${i + 1}`);
// }

// // Dengan forEach
// mhs.forEach((a,i) =>{
//     console.log(`Hai Saya ${a} index saya : ${i + 1}`);
// } );

// // Dengan for of
// for( let a of mhs){
//     console.log(a);
// }

// for( let [i,a] of mhs.entries()){
//     console.log(`Hai Saya ${a} index saya : ${i + 1}`);
// }

// arguments
function kal() {
    let total = 0;
    for( a of arguments){
        total += a; 
    }
    return total;
}

let jml = kal(1,2,3,4,5);
console.log(jml);




// // for in perulangan untuk object
// let mhs ={
//     nama : 'rizal',
//     nim : 'C2C020012',
//     umur : 20,
//     prodi : 'informatika'
// }

// for(let a in mhs){
//     console.log(mhs[a]);
// }


