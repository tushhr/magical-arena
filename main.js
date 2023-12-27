const Player = require('./controllers/player.js');
const MagicalArena = require('./controllers/magicalArena.js');

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getInput(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

function sleep(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

const getFloatingInput = async (i, name) => {
    do {
        const input = await getInput(`Enter the ${name} of Player${i + 1}: `);

        if (!isNaN(parseFloat(input))) {
            return parseFloat(input);
        }
    } while (true);
}

const startFight = async (magicalArena) => { 
    while(true) {
        const startFight = await askQuestion(`Start Fight? (y/n): `);

        if (startFight === 'y') {
            magicalArena.fight();
            break;
        } else if (startFight === 'n') {
            const waitingTime = await getInput(`How long should we wait? (in seconds) `);
            await sleep(waitingTime);
        } else {
            console.log("Invalid Input. Please check valid options");
        }
    }
}

async function main() {
    const players = [];
    for(let i = 0; i < 2; i++) {
        const name = await getInput(`Enter Name of Player${i + 1}: `);

        const health = await getFloatingInput(i, "Health")
        const strength = await getFloatingInput(i, "Strength")
        const defense = await getFloatingInput(i, "Defense")

        players.push(new Player(name, health, strength, defense));
    }

    const magicalArena = new MagicalArena(players[0], players[1]);
    await startFight(magicalArena);

    rl.close();
}

main();
