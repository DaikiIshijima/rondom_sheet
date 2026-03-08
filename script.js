const startButton = document.querySelector("#startButton");
const result = document.querySelector("#result");

const shuffleNumbers = () => {

  const numbers = [...Array(9).keys()];

  for (let i = numbers.length - 1; i > 0; i--) {

    const j = Math.floor(Math.random() * (i + 1));

    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }

  return numbers;
};

const displayNumbers = (numbers) => {

  result.innerHTML = "";

  numbers.forEach(num => {

    const div = document.createElement("div");

    div.className =
      "number-box flex items-center justify-center bg-white shadow rounded";

    div.textContent = num;

    result.appendChild(div);
  });
};

startButton.addEventListener("click", () => {

  const numbers = shuffleNumbers();

  displayNumbers(numbers);

});