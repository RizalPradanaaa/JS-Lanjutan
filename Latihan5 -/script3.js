// Tagged Template literals
// Bentuk yang lebih kompleks dari template literals yang bisa dibaca oleh function

const mhs = {
    nama : 'Rizal Pradana',
    nim : 'C2C020012',
    waktu : 'siang'
}

// Paramater mh untuk menympan array dari cetak yang dipisahkan oleh expression

// sedangkan ...value untuk menyimpan sisanya, yaitu nama dan nim
function say(mh, ...value) {

    return mh.reduce((str,vl,i ) => `${str}${vl} <span class="bg">${value[i] || ''}</span>`, '');
}

let cetak = say `<div class="mhs">
        <p>Nama : ${mhs.nama}</p>
        <p>NIM  : ${mhs.nim}</p>
    </div>`;

console.log(cetak);
document.body.innerHTML = cetak;