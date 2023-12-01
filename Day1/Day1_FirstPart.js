const fs = require('fs');

// Chemin vers le fichier texte
const filePath = 'data/input.txt';
let tabInput = [];

// Lecture du fichier ligne par ligne
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error("Erreur de lecture du fichier :", err);
    return;
  }

  // Séparation des lignes du fichier
  const lignes = data.split('\n');

  // Ajout de chaque ligne dans le tableau tabInput
  lignes.forEach((ligne) => {
    tabInput.push(ligne);
  });

  // Traitement de tabInput
  tabInput = tabInput.map((element) => {
    const numbers = element.match(/\d/g);

    if(numbers && numbers.length > 1) {
      const firstNumber = numbers[0];
      const lastNumber = numbers[numbers.length - 1];
      const newNumber = firstNumber + lastNumber;
      //console.log('newNumber:', newNumber);
      return newNumber;
    } else if (numbers && numbers.length === 1){
      const newNumber = numbers[0] + numbers[0];
      //console.log('newNumber:', newNumber);
      return newNumber;
    }
  });

  const sum = tabInput.reduce((total, number) => {
    const num = Number(number);
    return total + (isNaN(num) ? 0 : num);
  }, 0);
  
  console.log(sum);
});