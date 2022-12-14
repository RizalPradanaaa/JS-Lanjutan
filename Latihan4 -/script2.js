// Filter, Map dan reduce


let angka = [-1, 5, 2, -7, 9, 3, 0, 9, 4, 1];
// Filter
// array.Prototype.filter
// memisahkan/memfilter array ke sebuah array baru dengan ketentuan tertentu.

// membuat array baru dengan nila yang lebih dari 3
let baru1 = angka.filter( a => a >= 3);


// Map
// array.Prototype.map
// memalukan suatu hal pada array satu-persatu.

// membuat array baru dengan masing" nilau dikali 2
let baru2 = angka.map( a => a * 2);


// Reduce
// array.Prototypr.reduce
// melakukan suatu hal pada semua index array

// membuat array dengan nilai jumlah semua array sebelumnya
let baru3 = angka.reduce( (accumulator, currentValue) => accumulator + currentValue, 5 );

// accumulator untuk menampung hasil
// currentValue nilai index array, secara urut ditambahkan ke accumulator



// Method Chaining
// method yang dikerjakan secara banyak
// pilih angka > 5
// kemudian * 3
// lalu dijumlahkan

let baruu = angka.filter( a => a >= 5)  // [5,9,9]
    .map( a => a * 3 )                  // [15,27,27]
    .reduce( ( ac, cv) => ac + cv);     // [69]