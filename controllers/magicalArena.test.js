const MagicalArena = require('./MagicalArena');
const Player = require('./Player');

describe('MagicalArena', () => {
  it('should declare a winner after a fight', () => {
    const player1 = new Player('Player1', 200, 20, 6);
    const player2 = new Player('Player2', 150, 20, 20);

    const arena = new MagicalArena(player1, player2);

    arena.fight();
    expect(arena.returnWinner().health).toBeGreaterThan(0);
  });

  it('should have a winner after multiple rounds', () => {
    const player1 = new Player('Player1', 200, 20, 12);
    const player2 = new Player('Player2', 150, 20, 2);

    const arena = new MagicalArena(player1, player2);

    arena.fight();
    expect(arena.returnWinner().health).toBeGreaterThan(0);
  });

  it('should draw the game when the number of round exceeds 100000', () => {
    const player1 = new Player('Player1', 200, 20, 1200);
    const player2 = new Player('Player2', 150, 20, 1200);

    const arena = new MagicalArena(player1, player2);
    expect(arena.isGameOver()).toBe(false);
  });

  it('should over the game when any player health reaches zero', () => { 
    const player1 = new Player('Player1', 0, 20, 12);
    const player2 = new Player('Player2', 100, 20, 2);

    const arena = new MagicalArena(player1, player2);
    expect(arena.isGameOver()).toBe(true);
  });

  it('should not over the game when both player have health', () => { 
    const player1 = new Player('Player1', 200, 20, 12);
    const player2 = new Player('Player2', 150, 20, 2);

    const arena = new MagicalArena(player1, player2);
    expect(arena.isGameOver()).toBe(false);
  });
});
