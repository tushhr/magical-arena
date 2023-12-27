class MagicalArena {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
    }
    
    attack(attacker, defender) {
        const damage = attacker.rollDice() * attacker.strength - defender.defense;

        if (damage > 0) {
            defender.health -= damage;
        }
        return damage;
    }
}