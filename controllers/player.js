class Player {
    constructor(name, health, strength, defense) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.defense = defense;
    }
    
    rollDice() {
        return Math.ceil(Math.random() * 6);
    }

    isAlive() {
        return this.health > 0;
    }
}

module.exports = Player;