class MagicalArena {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
    }
    
    attack(attacker, defender) {
        console.log("Attacker: " + attacker.name + " Defender: " + defender.name);
        const damage = attacker.rollDice() * attacker.strength - defender.defense;

        console.log("Damage: " + damage);
        if (damage > 0) {
            defender.health -= damage;
        }

        console.log("Defender Health: " + defender.health);
        return damage;
    }

    isGameOver() {
        return !this.player1.isAlive() || !this.player2.isAlive();
    }

    returnWinner() {
        if (this.player1.isAlive()) {
            return this.player1;
        } else {
            return this.player2;
        }
    }

    fight() {
        // assuming player1 has lower health than player2
        while (!this.isGameOver()) {
            this.attack(this.player1, this.player2);

            if(!this.isGameOver()) {
                this.attack(this.player2, this.player1);
            }
        }

        console.log("Game Over!");
        let winner = this.returnWinner();
        console.log("Winner: " + winner.name);
    }
}