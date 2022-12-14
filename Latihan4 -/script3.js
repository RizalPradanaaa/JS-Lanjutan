// Latihan Filter , Map Dan Reduce

// ambil semua elemen video
let videos = Array.from(document.querySelectorAll('[data-durasi]'));

// ambil yang hanya JS LANJUTAN
let video = videos.filter(item => item.textContent.includes('JAVASCRIPT LANJUTAN'))

// ambil durasi
    .map( durasi => durasi.dataset.durasi )

// ubah ke float
    .map( waktu =>  {
      const parts =  waktu.split(':').map( part => parseFloat(part) )
      return (parts[0] * 60) + parts[1];
    })

// jumlahkan semua
    .reduce((total , angka) => total + angka);

// ubah ke format jam
    let jam = Math.floor(video / 3600);
    let menit = Math.floor( (video % 3600) / 60);
    let detik = video % 60;

// tambah ke DOM
const durasi = document.querySelector('.total_durasi');
durasi.textContent = `${jam} Jam ${menit} Menit ${detik} Detik`;

const jmlvideo = videos.filter(item => item.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const jm = document.querySelector('.jumlah_video');
jm.textContent = `${jmlvideo} Video`;