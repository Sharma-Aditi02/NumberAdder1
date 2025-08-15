let buttonel = document.getElementById("btn");

buttonel.addEventListener("click", function () {
  let num1 = document.getElementById("input1");
  let num2 = document.getElementById("input2");
  let result = document.getElementById("results");

  let sum = parseInt(num1.value) + parseInt(num2.value);
  //console.log(sum);

  result.innerHTML = '<i class="fa-solid fa-equals"></i> ' + sum;
});
