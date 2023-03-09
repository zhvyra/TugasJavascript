const LuasPersegiPanjang = (panjang, lebar) => {
    return panjang * lebar
}

const LuasJajarGenjang = (alas, tinggi) => {
    return alas * tinggi
}

const LuasSegitiga = (alas, tinggi) => {
    return (alas * tinggi) / 2
}

const panjangpersegipanjang = prompt("Masukan Panjang Persegi Panjang : ")
const lebarpersegipanjang = prompt("Masukan Lebar Persegi Panjang : ")

console.log("Luas Persegi Panjang = ", LuasPersegiPanjang(panjangpersegipanjang, lebarpersegipanjang))

const alasjajargenjang = prompt("Masukan Alas Jajar Genjang : ")
const tinggijajargenjang = prompt("Masukan Tinggi Jajar Genjang : ")

console.log("Luas Jajar Genjang = ", LuasJajarGenjang(alasjajargenjang, tinggijajargenjang))

const alassegitiga = prompt("Masukan Alas Segitiga : ")
const tinggisegitiga = prompt("Masukan Tinggi Segitiga : ")

console.log("Luas Segitiga = ", LuasSegitiga(alassegitiga,tinggisegitiga))