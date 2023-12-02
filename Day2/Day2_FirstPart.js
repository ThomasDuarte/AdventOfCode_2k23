//lire le fichier
const fs = require('fs');
const text = fs.readFileSync("data/input.txt", "utf-8");

//Declare la somme
let sum = 0;

//séparer les lignes
const games = text.split("\n");

//map avec red cubes, green cubes, blue cubes

let maximums = new Map([
    ['red', 12],
    ['green', 13],
    ['blue', 14]
  ]);
//separer les round qui sont délimitées par des ;
games.forEach((game) => {
    let gameIsOk = true;
    const gameNb = game.split(": ");
    let gameId = parseInt(gameNb[0].split(" ")[1]);
    console.log(gameNb);
    console.log(gameId);
    const rounds = gameNb[1].split("; ");
    //console.log(rounds);

    //split sur la virgule pour chaque lancé
    rounds.forEach((round) => {
        const tirages = round.split(", ");
        console.log(tirages);

        tirages.forEach((cube) => {
            const cubeNb = cube.split(" ");
            if(parseInt(cubeNb[0]) > maximums.get(cubeNb[1])){
                gameIsOk = false;
                console.log("Erreur sur le cube " + cubeNb[1] + " du jeu " + gameId);
            }
            
            //console.log(cubeNb);
            
        });
        
    });
    if(gameIsOk){
        sum += gameId;
    }
    console.log("Somme des jeux valides : " + sum);
});

