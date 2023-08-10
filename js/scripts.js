// Business Logic

function triangleTest(a,b,c) {

  if (a + b <= c || a + c <= b || b + c <= a) {
    document.getElementById("not-triangle").removeAttribute("class");
  } else if (a === b && b === c && a === c) {
    document.getElementById("equilateral").removeAttribute("class");
  } else if (a === b || b === c || a === c) {
      document.getElementById("isosceles").removeAttribute("class");

  }
  else {
    document.getElementById("scalene").removeAttribute("class");
}
}




// User Interface Logic

window.addEventListener("load", getInput);

function userSubmit(event) {
  event.preventDefault();

  const inputA = parseInt(document.querySelector("input#sideA").value);
  const inputB = parseInt(document.querySelector("input#sideB").value);
  const inputC = parseInt(document.querySelector("input#sideC").value);

  let result = triangleTest(inputA, inputB, inputC);
  console.log(result);


  // const form = document.getElementById("tracker");
  // form.addEventListener("submit", triangleTest)
}




function getInput () {  
  let form = document.getElementById("tracker");
  form.addEventListener("submit", userSubmit);
  window.getElementById("reset").addEventListener("click", hideResult);

}

function hideResult () {
  document.getElementById("equilateral").setAttribute("class", "hidden");
  document.getElementById("isosceles").setAttribute("class", "hidden");
  document.getElementById("scalene").setAttribute("class", "hidden");
  document.getElementById("not-triangle").setAttribute("class", "hidden");
}
