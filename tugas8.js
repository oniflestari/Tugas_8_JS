function buatObject(penulis, tahun, judul, harga) {
  var buku = {};
  buku.penulis = penulis;
  buku.tahun = tahun;
  buku.judul = judul;
  buku.harga = harga;
  return buku;
}

// Nilai Awal
var bukuFavorit = buatObject('Tere Liye', '2015', ['Pulang', 'Pergi', 'Sepucuk Angpau Merah'], [100000, 90000, 80000]);
console.log(bukuFavorit);
// Merubah nilai pada property harga
bukuFavorit.harga[2] = 60000;
console.log(bukuFavorit);