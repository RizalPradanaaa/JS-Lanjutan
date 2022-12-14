// Latihan Object
// Membuat Object

// 1. Object Literal
// let Mahasiswa = {
//     nama : "zall",
//     healtpoint : 10,
//     fight : function(dmg){
//         this.healtpoint -= dmg;
//         console.log(`Hai ${this.nama}, Selamat Bertarung`);
//     }
// }


// 2. Function Declaration
// function player(nama, healtpoint) {
//     let player = {};
//     player.nama = nama;
//     player.healtpoint = healtpoint;

//     player.fight = function(dmg) {
//         this.healtpoint -= dmg;
//         console.log(`Hai ${this.nama} Selamat Bertarung`);
//     }

//     player.regen = function(hp) {
//         this.healtpoint += hp;
//         console.log(`Hai ${this.nama} Selamat Istirahat`);
//     }
//     return player;
// }

// let zal = player("zal", 50);



// 3. Constructor Function
// function player(nama, healtpoint) {
//     this.nama = nama;
//     this.healtpoint = healtpoint;

//     this.fight = function(dmg) {
//         this.healtpoint -= dmg;
//         console.log(`Hai ${this.nama} Selamat Bertarung`);
//     }

//     this.regen = function(hp) {
//         this.healtpoint += hp;
//         console.log(`Hai ${this.nama} Selamat Istirahat`);
//     }
// }

// let zal = new player("zal", 50);

// 4. create.object();
const fitur = {
    fight: function(dmg) {
        this.healtpoint -= dmg;
        console.log(`Hai ${this.nama} Selamat Bertarung`);
    },
    
    regen: function(hp) {
        this.healtpoint += hp;
        console.log(`Hai ${this.nama} Selamat Istirahat`);
    }
}

function player(nama, healtpoint) {
    let player = Object.create(fitur);
    player.nama = nama;
    player.healtpoint = healtpoint;

    return player;
}

let zal = player("zal", 50);

