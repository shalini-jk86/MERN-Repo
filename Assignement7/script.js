function getValues() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  return { num1, num2 };
}

function add() {
  let { num1, num2 } = getValues();
  document.getElementById("result").innerText = `Result: ${num1 + num2}`;
}

function subtract() {
  let { num1, num2 } = getValues();
  document.getElementById("result").innerText = `Result: ${num1 - num2}`;
}

function multiply() {
  let { num1, num2 } = getValues();
  document.getElementById("result").innerText = `Result: ${num1 * num2}`;
}

function divide() {
  let { num1, num2 } = getValues();
  if (num2 === 0) {
    document.getElementById("result").innerText = "Error: Division by zero!";
  } else {
    document.getElementById("result").innerText = `Result: ${num1 / num2}`;
  }
}

function square() {
  let { num1 } = getValues();
  document.getElementById("result").innerText = `Square of ${num1}: ${num1 * num1}`;
}

function cube() {
  let { num1 } = getValues();
  document.getElementById("result").innerText = `Cube of ${num1}: ${num1 * num1 * num1}`;
}