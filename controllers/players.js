class Players {
    constructor(players) {
        this.players = players;
    }

    getPlayer(playerId) {
        return this.players[playerId]
    }

    getAvailablePlayers() {
        const availablePlayers = []
        for(let i = 0; i < this.players.length; i++) {
            if(this.players[i].isAlive()) {
                availablePlayers.push(i + 1)
            }
        }

        return availablePlayers
    }
}

module.exports = Players;