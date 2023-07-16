// fetch("https://api.adviceslip.com/advice")
//   .then((res) => res.json())
//   .then((data) => console.log(data.slip.id));

// console.log("jonas");

async function getAdvice() {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();
  console.log(data.slip.advice);
}
getAdvice();
console.log("jonas");
