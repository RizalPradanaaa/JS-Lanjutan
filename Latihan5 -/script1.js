// Template Literal / Template String
// Adalah String literal yang terdapat expression didalamnya.

// Digunakan dengan back tip ``

// Penerapan template literal

// Multilane string
const zal = `
    Hai Saya Rizal
    Hai Saya Rizal
    Hai Saya Rizal
`;


// Embedded expression
let nama = `Rizal`;
let time = 'Malam';
const sayhello = `Hai ${nama} Selamat ${time}`;


// // HTML fragment
// const hello = `
//     <div class="hello">
//         <p>Hai ${nama} Selamat ${time}</p>
//     </div>`

// document.body.innerHTML = hello;


// Expression interpolation
let a = 30;
let b = 40;
let jumlah = `Hasil dari 30 + 40 adalaha ${a + b}.`;


// Tagged template literal
// penjelasan Ada pada script3.js

console.log(jumlah);
