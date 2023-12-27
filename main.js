const Player = require('./controllers/player.js');
const Players = require('./controllers/players.js');
const MagicalArena = require('./controllers/magicalArena.js');

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sleep(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

function getInput(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

const getFloatingInput = async (placeholder) => {
    do {
        const input = await getInput(placeholder);

        if (!isNaN(parseFloat(input)) && parseFloat(input) > 0) {
            return parseFloat(input);
        }
        console.log("Invalid Input. Please enter a number");
    } while (true);
}

const getFloatingInputWrapper = async (i, name) => {
    return await getFloatingInput(`Enter the ${name} of Player${i + 1}: `);
}

const fight = async (players) => {
    let availablePlayers = players.getAvailablePlayers()

    while(availablePlayers.length > 1 ) {
        console.log(availablePlayers)
        const startFight = await getInput(`Start Fight? (y/n): `);

        if (startFight.toLowerCase() === 'y') {
            console.log("Players who are still alive: " + availablePlayers);

            const playerId1 = await getInput(`Enter ID of Player1: `);
            const playerId2 = await getInput(`Enter ID of Player2: `);

            const magicalArena = new MagicalArena(players.getPlayer(playerId1 - 1), players.getPlayer(playerId2 - 1));
            magicalArena.fight()
        } else if (startFight.toLowerCase() === 'n') {
            const waitingTime = await getFloatingInput(`How long should we wait? (in seconds) `);
            await sleep(waitingTime);
        } else {
            console.log("Invalid Input. Please check valid options");
        }
        console.log(availablePlayers)
        availablePlayers = players.getAvailablePlayers()
    }
}

async function main() {
    let players = [];
    const numberOfPlayers = await getInput("Enter Number of Players: ");

    for(let i = 0; i < numberOfPlayers; i++) {
        const name = await getInput(`Enter Name of Player${i + 1}: `);

        const health = await getFloatingInputWrapper(i, "Health")
        const strength = await getFloatingInputWrapper(i, "Strength")
        const defense = await getFloatingInputWrapper(i, "Defense")

        players.push(new Player(name, health, strength, defense));
    }

    players = new Players(players)
    await fight(players);

    rl.close();
}

main();
