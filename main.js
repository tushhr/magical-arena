const utils = require('./utils');
const Player = require('./controllers/player.js');
const Players = require('./controllers/players.js');
const MagicalArena = require('./controllers/magicalArena.js');

const fight = async (players) => {
    let availablePlayers = players.getAvailablePlayers()

    while(availablePlayers.length > 1 ) {
        const startFight = await utils.getInput(`Start Fight? (y/n): `);

        if (startFight.toLowerCase() === 'y') {
            console.log("Players who are still alive: " + availablePlayers);

            const playerId1 = await utils.getInput(`Enter ID of Player1: `);
            const playerId2 = await utils.getInput(`Enter ID of Player2: `);

            const magicalArena = new MagicalArena(players.getPlayer(playerId1 - 1), players.getPlayer(playerId2 - 1));
            magicalArena.fight()

        } else if (startFight.toLowerCase() === 'n') {
            const waitingTime = await utils.getFloatingInput(`How long should we wait? (in seconds) `);
            await utils.sleep(waitingTime);
        } else {
            console.log("Invalid Input. Please check valid options");
        }

        availablePlayers = players.getAvailablePlayers()
    }
}

async function main() {
    let players = [];
    const numberOfPlayers = await utils.getInput("Enter Number of Players: ");

    for(let i = 0; i < numberOfPlayers; i++) {
        const name = await utils.getInput(`Enter Name of Player${i + 1}: `);

        const health = await utils.getFloatingInputWrapper(i, "Health")
        const strength = await utils.getFloatingInputWrapper(i, "Strength")
        const defense = await utils.getFloatingInputWrapper(i, "Defense")

        players.push(new Player(name, health, strength, defense));
    }

    players = new Players(players)
    await fight(players);

    utils.rlClose()
}

main();
