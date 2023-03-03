let input;
let numbers = [];
let total = 0;

while (input !== null) {
    
  input = prompt('Введіть число:');

  if (input !== null) {

    const parsedInput = parseInt(input);

    if (parsedInput != input) {

      alert('Було введено не число, попробуйте ще раз');
      continue;

    }

    numbers.push(parsedInput);

  }
}

if (numbers.length > 0) {

  let total = 0;

  for (let i = 0; i < numbers.length; i++) {

    total += numbers[i];

  }

  console.log(`Загальна сума чисел дорівнює ${total}`);

}
