// Fungsi simulasi asynchronous
function getDataFromServer() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Data dari server");
    }, 2000);
  });
}

// Panggil fungsi getDataFromServer dan tampilkan data
console.log("Memulai pengambilan data...");
getDataFromServer()
  .then(result => {
    console.log("Data diterima:", result);
    console.log("Selesai.");
  })
  .catch(error => {
    console.log("Terjadi kesalahan:", error);
  });
