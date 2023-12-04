console.log("inicio");

setTimeout(() => {
  console.log(1);
}, 3000);

setTimeout(() => {
  console.log(2);
}, 0);

setTimeout(() => {
  console.log("3");
}, 0);

console.log("Fin");
