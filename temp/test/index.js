const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const pheptoan = document.getElementById("operation");
const button = document.getElementById("calculate")
const result = document.getElementById("result")

button.addEventListener("click", function () {
  const no1 = parseFloat(num1.value);
  const no2 = parseFloat(num2.value);
  const toantu = pheptoan.value;

  if (isNaN(no1) || isNaN(no2) || no1 === null || no2 === null) {
    result.textContent = " vui long nhap so hop le"
  } else {
    let resultKQ;
    switch (toantu) {
      case "+":
        resultKQ = no1 + no2;
        break;
      case "-":
        resultKQ = no1 - no2;
        break;
      case "*":
        resultKQ = no1 * no2;
        break;
      case "/":
        if (no2 === 0) {
          result.textContent = " không thể chia cho 0";
          break;
        } else { resultKQ = no1 / no2 };
        break;
      default:
        result.textContent = "Phép toán không hợp lệ.";
        return;
    }
    console.log(result.textContent)
    result.textContent = `Kết quả: ${resultKQ}`;
  }
})