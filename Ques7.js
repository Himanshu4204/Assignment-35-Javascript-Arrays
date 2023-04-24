//7. Write a script which generates a random hexadecimal number.
function randomHexadecimal() {
    hexadecimal = "0123456789ABCDEF";
    let number = "";
  for (let i = 0; i < 16; i++) {
    number += hexadecimal[Math.floor(Math.random() * hexadecimal.length)];
  }
  return number;
}
console.log(randomHexadecimal());
