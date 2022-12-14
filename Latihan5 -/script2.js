// Latihan Template literal

// // HTML Fragment
// const mhs = {
//     nama : 'Rizal Pradana',
//     nim : 'C2C020012'
// }

// let cetak = 
//     `<div class="mhs">
//         <p>Nama : ${mhs.nama}</p>
//         <p>NIM  : ${mhs.nim}</p>
//     </div>`;
// document.body.innerHTML = cetak;


// // Looping
// const mhs = [
//     {
//         nama : 'Rizal Pradana',
//         nim : 'C2C020012'
//     },
//     {
//         nama : 'The King',
//         nim : 'C2C020120'
//     },
//     {
//         nama : 'Quenn',
//         nim : 'C2C020112'
//     },
// ];

// let cetak2 = `
//     <div class="mhs">
//         <ol>
//             ${mhs.map( a => `<li>Nama : ${a.nama}_${a.nim}</li>`).join('')}
//         </ol>
//     </div>`
// document.body.innerHTML = cetak2;


// // Conditional -> ternary
// const game = {
//     nama: 'Arena Of Valor',
//     pub: 'Garena',
//     // dev: 'Tencent'
// }

// let cetak3 = `
//     <div>
//         <p>Nama : ${game.nama}</p>
//         <p>Pub : ${game.pub}</p>
//         <p>${game.dev ? `Dev :${game.dev}` : ''}</p>
//     </div>
//     `;
// document.body.innerHTML = cetak3;


// Nested
const mhs = {
    nama : 'Rizal Pradana',
    nim : 'C2C020012',
    waktu : 'siang'
}

function say(mh) {
    return `Hai ${mh.nama} Selamat ${mh.waktu}`
}

let cetak = 
    `<div class="mhs">
        <p>Nama : ${mhs.nama}</p>
        <p>NIM  : ${mhs.nim}</p>
        ${say(mhs)}
    </div>`;
document.body.innerHTML = cetak;
