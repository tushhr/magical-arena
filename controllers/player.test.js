const Player = require('./Player');

describe('Player', () => {
  it('should initialized with correct attributes', () => {
    const player = new Player('TestPlayer', 100, 10, 5);

    expect(player.name).toBe('TestPlayer');
    expect(player.health).toBe(100);
    expect(player.strength).toBe(10);
    expect(player.defense).toBe(5);
  });

  it('should return a valid dice roll between 1 and 6', () => {
    const player = new Player('TestPlayer', 100, 10, 5);

    const diceRoll = player.rollDice();

    expect(diceRoll).toBeGreaterThanOrEqual(1);
    expect(diceRoll).toBeLessThanOrEqual(6);
  });

  it('should correctly determine if the player is alive', () => {
    const alivePlayer = new Player('AlivePlayer', 50, 10, 5);
    const deadPlayer = new Player('DeadPlayer', 0, 8, 7);

    expect(alivePlayer.isAlive()).toBe(true);
    expect(deadPlayer.isAlive()).toBe(false);
  });
});
