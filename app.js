function rollDie(numSides) {
    return Math.floor(Math.random() * 6) + 1;
}

function sum() {
    console.log(arguments);
}

const scores  = [93123, 23593, 93029, 930294, 4923, 4920, 42902];

const highScore = scores[0];
const secondHighScore = scores[1];

const [gold, silver] = scores;