class Player {
    constructor(health, strength, defense) {
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