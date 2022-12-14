// Js Lanjutan 2.1
// Execution Context, Hoisting, Scope

// Execution context terbagi menjadi 2 bagian :
    // Creation phase (Global execution)
    // Js akan mencari semua var, dan melakukan global execution yaitu "menaikkan semua var keatas dan mengisi dengan nilai undifined."->(konsep ini disebut Hoisting).
    console.log(a);
    var a = 2;
    // Execution
    // Yaitu saat syntax dikerjakan secara urut satu-persatu.
    // contohnya saat di line 9. baru diset nilai a yaitu 2, jadi saat diconsol maka nilainya masih undifined.

    // Creation phase (Local execution)
    // saat function dijalankan (line 20), maka akan terjadi local execution yaitu "menaikkan semua var keatas dan mengisi dengan nilai undifined."

function cetak() {
    var a = 10;
    console.log(a);
}
cetak();

// Scope
// contohnya sperti fun cetak(); saat dijalnkan, console.log akan mencari var a didalam function bila tidak ada, maka akan mencari var diluar/ variabel global