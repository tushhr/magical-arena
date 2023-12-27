const Player = require('./controllers/player.js');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

const getFloatingInput = async (i, name) => {
    do {
        const input = await askQuestion(`Enter the ${name} of Player${i + 1}: `);

        if (!isNaN(parseFloat(input))) {
            return parseFloat(input);
        }
    } while (true);
}

async function main() {
    const players = [];
    for(let i = 0; i < 2; i++) {
        const name = await askQuestion(`Enter Name of Player${i + 1}: `);

        const health = await getFloatingInput(i, "Health")
        const strength = await getFloatingInput(i, "Strength")
        const defense = await getFloatingInput(i, "Defense")

        players.push(new Player(name, health, strength, defense));
    }

    rl.close();
}

main();
