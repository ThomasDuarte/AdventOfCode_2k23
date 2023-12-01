const fs = require('fs');

// Chemin vers le fichier texte
const filePath = 'Day1/data/input2.txt';
let tabInput = [];


const tab = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

const numberMap = {
    '0' : 'zero',
    '1' : 'one',
    '2' : 'two',
    '3' : 'three',
    '4' : 'four',
    '5' : 'five',
    '6' : 'six',
    '7' : 'seven',
    '8' : 'eight',
    '9' : 'nine'
  };

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
  let finalTabInput = tabInput.map((element) => {
    // Parcourir chaque clé de numberMap
    console.log("before : " + element);
    for (let numberInLetters in tab) {
      // Remplacer chaque clé par sa valeur
      element = element.replaceAll(numberMap[numberInLetters], numberInLetters);
    }
    console.log("after : " + element);

    const numbers = element.match(/\d/g);
    console.log(numbers);
    if(numbers && numbers.length > 1) {
      const firstNumber = numbers[0];
      const lastNumber = numbers[numbers.length - 1];
      const newNumber = firstNumber + lastNumber;
      console.log('newNumber:', newNumber);
      return newNumber;
    } else if (numbers && numbers.length === 1){
      const newNumber = numbers[0] + numbers[0];
      console.log('newNumber:', newNumber);
      return newNumber;
    }
    
  });

  const sum = finalTabInput.reduce((total, number) => {
    const num = Number(number);
    console.log(num);
    console.log(total);
    return total + num;
  }, 0);
  console.log(finalTabInput);
  console.log(sum);
});