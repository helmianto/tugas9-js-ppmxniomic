const mobil = {
    merk: 'Toyota',
    jenis: 'Avanza',
    warna: 'Hitam'
};

// tampilkan berikan nilai pada masing-masing properti objek
console.log('menampilkan objek mobil', mobil);

console.log('menampilkan mobil dengan for in');
for (let i in mobil){
    console.log(mobil[i]);
}