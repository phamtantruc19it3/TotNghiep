const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const operationSelect = document.getElementById("operation");
const calculateButton = document.getElementById("calculate");
const resultElement = document.getElementById("result");

calculateButton.addEventListener("click", function () {
  // Lấy giá trị từ các ô input và select
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const operation = operationSelect.value;

  // Kiểm tra xem người dùng đã nhập đúng các giá trị hay không
  if (isNaN(num1) || isNaN(num2)) {
    resultElement.textContent = "Vui lòng nhập số hợp lệ.";
  } else {
    // Thực hiện phép toán dựa trên toán tử
    let result;
    switch (operation) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        if (num2 === 0) {
          resultElement.textContent = "Không thể chia cho 0.";
          return; // Kết thúc hàm nếu chia cho 0
        } else {
          result = num1 / num2;
        }
        break;
      default:
        resultElement.textContent = "Phép toán không hợp lệ.";
        return; // Kết thúc hàm nếu phép toán không hợp lệ
    }

    // Hiển thị kết quả
    resultElement.textContent = `Kết quả: ${result}`;
  }
});
