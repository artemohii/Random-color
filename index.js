const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
// console.log(hex[15]);
// const randomIndex = Math.floor((Math.random() * hex.length));
// console.log(randomIndex);

/* let x = Math.floor((Math.random() * 10) + 1);
console.log(x);  ???*/ 


function randomHex() {
  let result = "";
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor((Math.random() * hex.length));
    // console.log(randomIndex);
    result += hex[randomIndex]
  }
  // console.log(result);
  return result
}

/* function randomHex() {
  const result = [];
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor((Math.random() * hex.length));
    const hexIndex = hex[randomIndex];
    result.push(hexIndex);
  }
  return result.join("");
} */





const clickMe = document.querySelector("a");
const span = document.querySelector("span");

clickMe.addEventListener("click", () => {
  const color = `#${randomHex()}`;
  // console.log(color);
  span.textContent = color;
  document.body.style.background = color;
});
