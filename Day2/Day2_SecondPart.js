//lire le fichier
const fs = require('fs');
const text = fs.readFileSync("data/input.txt", "utf-8");

//Declare la somme
let sum = 0;

//séparer les lignes
const games = text.split("\n");
//map avec red cubes, green cubes, blue cubes


//separer les round qui sont délimitées par des ;
games.forEach((game) => {
    const gameNb = game.split(": ");
    console.log(gameNb);
    const rounds = gameNb[1].split("; ");

    let maximums = new Map([
        ['red', 0],
        ['green', 0],
        ['blue', 0]
    ]);

    //split sur la virgule pour chaque lancé
    rounds.forEach((round) => {
        const tirages = round.split(", ");
        tirages.forEach((cube) => {
            const cubeNb = cube.split(" ");
            if(parseInt(cubeNb[0]) > maximums.get(cubeNb[1])){
                maximums.set(cubeNb[1], parseInt(cubeNb[0]));
            }
        });
        console.log(tirages);

        
    });
    sum += maximums.get('red') * maximums.get('green') * maximums.get('blue');
    console.log("Somme: " + sum);
});

