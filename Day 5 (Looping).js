
for(counter = 2; counter <22; counter +=2){
    console.log(counter+ 'hakim aja');
}
console.log('-------')
for(counter =20; counter > 0; counter -=2){
    console.log(counter+ 'hakim aja')
}
console.log('soal 2')
for (let angka = 1; angka <= 20; angka++) {
  if (angka % 2 === 1) {
    if (angka % 3 === 0) {
      console.log(angka + " - INI BERKELIPATAN 3");
    } else {
      console.log(angka + " - INI ADALAH ANGKA GANJIL (" + angka + ")");
    }
  } else {
    console.log(angka + " - INI ADALAH ANGKA GENAP (angka genap nya)");
  }
}
console.log('soal 3')
for (let i = 0; i < 4; i++) {
  let line = "";
  for (let j = 0; j < 8; j++) {
    line += "#";
  }
  console.log(line);
}
console.log('soal 4')
for (let i = 1; i <= 7; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += "#";
  }
  console.log(line);
}
 console.log('soal 5')
for (let i = 1; i <= 8; i++) {
  let line = "";
  for (let j = 1; j <= 4; j++) {
    line += "# ";
  }
  console.log(line);
}

