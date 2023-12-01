const fs = require("fs");

// Chemin vers le fichier texte
const filePath = "data/input.txt";
let tabInput = [];

// Map des chiffres écrits en lettres
const numberMap = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9
};

// Lecture du fichier ligne par ligne
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Erreur de lecture du fichier :", err);
    return;
  }

  // Séparation des lignes du fichier
  const lignes = data.split("\n");

  // Ajout de chaque ligne dans le tableau tabInput
  lignes.forEach((ligne) => {
    tabInput.push(ligne);
  });

  // Traitement de tabInput
  tabInput = tabInput.map((element) => {
    const numbers = element.match(/\b(\d+|zero|one|two|three|four|five|six|seven|eight|nine)\b/gi);
    console.log('Number = ' + numbers);
    if(numbers && numbers.length > 1) {
        const firstNumber = isNaN(Number(numbers[0])) ? numberMap[numbers[0].toLowerCase()] : Number(numbers[0]);
        const lastNumber = isNaN(Number(numbers[numbers.length - 1])) ? numberMap[numbers[numbers.length - 1].toLowerCase()] : Number(numbers[numbers.length - 1]);
        const newNumber = Number(String(firstNumber) + String(lastNumber));
        return newNumber;
      } else if (numbers && numbers.length === 1){
        const newNumber = isNaN(Number(numbers[0])) ? Number(String(numberMap[numbers[0].toLowerCase()]) + String(numberMap[numbers[0].toLowerCase()])) : Number(String(numbers[0]) + String(numbers[0]));
        return newNumber;
      }
      return 0;
    });

  const sum = tabInput.reduce((total, number) => {
    const num = Number(number);
    return total + (isNaN(num) ? 0 : num);
  }, 0);

  //console.log(sum);
});