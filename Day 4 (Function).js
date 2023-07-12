// Mengembalikan nama kalian

function namakalian() {
  const nama = 'hakim';
  return nama;
}

console.log(namakalian());

// Perkalian

function kali(x, y) {
  return x * y;
}

let hasilkali = kali(6, 2);
console.log("Hasil perkalian:", hasilkali);

// Biodata

function data_diri(nama, umur, alamat, hobby) {
  console.log("Nama saya " + nama + ", umur saya " + umur + " tahun, alamat saya di " + alamat + ", dan saya punya hobby yaitu " + hobby + ".");
}

data_diri("Hakim", 17, "Bandung", "GYM");
