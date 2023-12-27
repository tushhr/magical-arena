class MagicalArena {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        
        // to make sure player1 health is always lower than player2
        if(this.player1.health > this.player2.health) {
            const temp = this.player1;
            this.player1 = this.player2;
            this.player2 = temp;
        }
    }
    
    attack(attacker, defender) {
        console.log("Attacker: " + attacker.name + " Defender: " + defender.name);
        const damage = attacker.rollDice() * attacker.strength - defender.defense;

        if (damage > 0) {
            console.log("Damage: " + damage);
            defender.health -= damage;
        } else {
            console.log("Damage: None");
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
        let round = 1;

        while (!this.isGameOver() && round <= 100000) {
            this.attack(this.player1, this.player2);

            if(!this.isGameOver()) {
                this.attack(this.player2, this.player1);
            }

            round += 1;
        }
        
        if(this.isGameOver()) {
            console.log("Game Over!");
            let winner = this.returnWinner();
            console.log("Winner: " + winner.name);
        } else {
            console.log("It's a Draw!")
        }
    }
}

module.exports = MagicalArena;