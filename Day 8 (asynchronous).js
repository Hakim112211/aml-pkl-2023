// Fungsi simulasi asynchronous
function getDataFromServer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Data dari server";
      resolve(data);
    }, 2000); // Delay 2 detik untuk simulasi pengambilan data dari server
  });
}

// Fungsi yang menggunakan async/await
async function main() {
  try {
    console.log("Memulai pengambilan data...");
    const result = await getDataFromServer();
    console.log("Data diterima:", result);
    console.log("Selesai.");
  } catch (error) {
    console.log("Terjadi kesalahan:", error);
  }
}

// Panggil fungsi main
main();