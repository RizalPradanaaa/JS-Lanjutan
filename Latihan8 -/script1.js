// Spread Paramater
// memisahkan array kedalam state tunggal


let mhs = ['rizal','nawang','pradana'];
// console.log(...mhs);

// menggabung array
let fl = ['dwi','bagas','febri'];

// // dengan fun concat
// let coba = mhs.concat(fl);
// console.log(coba);

// // dengan spred
// let gabungan = [...mhs,'heng',...fl];
// console.log(gabungan);


// // Mengcopy array
// let copy = [...fl];
// copy[0] = 'yoga';
// console.log(fl);
// console.log(copy);



// // Node list
// let nama = document.querySelectorAll('li');

// let data = [...nama].map(a => a.textContent);
// console.log(data);



let nama = document.querySelector('.nama');
let data = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML = data;