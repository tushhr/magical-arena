const Player = require('./controllers/player.js');
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

const getFloatingInput = async (i, name) => {
    do {
        const input = await getInput(`Enter the ${name} of Player${i + 1}: `);

        if (!isNaN(parseFloat(input)) && parseFloat(input) > 0) {
            return parseFloat(input);
        }
        console.log("Invalid Input. Please enter a number");
    } while (true);
}

const fight = async (players) => { 
    for(let j = 0; j < players.length - 1; j++) {
        const startFight = await getInput(`Start Fight? (y/n): `);

        if (startFight === 'y') {
            playersAvailableForFight = ""
            for(let i = 0; i < players.length; i++) {
                if(players[i].health > 0) {
                    playersAvailableForFight += ` ${i}`
                }
            }

            console.log("Players who are still alive: " + playersAvailableForFight);
            const playerId1 = await getInput(`Enter ID of Player1: `);
            const playerId2 = await getInput(`Enter ID of Player2: `);

            const magicalArena = new MagicalArena(players[playerId1], players[playerId2]);
            magicalArena.fight()

        } else if (startFight === 'n') {
            const waitingTime = await getFloatingInput(`How long should we wait? (in seconds) `);
            await sleep(waitingTime);
        } else {
            console.log("Invalid Input. Please check valid options");
        }
    }
}

async function main() {
    const players = [];
    const numberOfPlayers = await getInput("Enter Number of Players: ");

    for(let i = 0; i < numberOfPlayers; i++) {
        const name = await getInput(`Enter Name of Player${i + 1}: `);

        const health = await getFloatingInput(i, "Health")
        const strength = await getFloatingInput(i, "Strength")
        const defense = await getFloatingInput(i, "Defense")

        players.push(new Player(name, health, strength, defense));
    }

    await fight(players);

    rl.close();
}

main();
