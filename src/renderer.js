console.log("✅ Renderer loaded");

function calculateSquare() {
  const input = document.getElementById("numberInput").value;
  const num = parseFloat(input);
  const resultDiv = document.getElementById("results");

  if (isNaN(num)) {
    resultDiv.innerText = "❌ Please enter a valid number";
    return;
  }

  const square = num * num;
  resultDiv.innerText = `✅ The square of ${num} is ${square}`;
}

window.calculateSquare = calculateSquare;
