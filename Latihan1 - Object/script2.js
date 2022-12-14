// Prototype
// prototype inheritance

// function player(nama, hp) {
//     // akan otomatis seperti dbawah
//     // this.player = Object.create(player.prototype);
//     this.nama = nama;
//     this.hp = hp;
// }

// player.prototype.fight = function(dmg) {
//     this.hp -= dmg;
//     console.log(`Hai ${this.nama} Selamat Bertarung`);
// }

// player.prototype.regen = function (rg) {
//     this.hp += rg;
//     console.log(`Hai ${this.nama} Selamat Beristirahat`);
// }

// let rizal = new player('rizal', '50');



// Ini adalah class pada javascript, tapi saat dibelakang layar yang dikerjakan
// akan seperti prototype
class player{
    constructor(nama, hp){
        this.nama = nama;
        this.hp = hp;
    }

    fight(dmg){
        this.hp -= dmg;
        return `Hai ${this.nama} Selamat Bertarung`;
    }

    regen(rg){
        this.hp += rg;
        return `Hai ${this.nama} Selamat Bersistirahat`;
    }
}

let zal = new player('zal', 50);