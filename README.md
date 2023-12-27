# Magical Arena

- Every Player is defined by a “health” attribute, “strength” attribute and an “attack” attribute - all positive integers. 
- The player dies if his health attribute touches 0. 

#### Rules
- Any two player can fight a match in the arena. 
- Players attack in turns. Attacking player rolls the attacking dice and the defending player rolls the defending dice. 
- The “attack”  value multiplied by the outcome of the  attacking dice roll is the damage created by the attacker.
- The defender “strength” value, multiplied by the outcome of the defending dice is the damage defended by the defender.
- Whatever damage created by attacker which is in excess of the damage defended by the defender will reduce the “health” of the defender. Game ends when any players health reaches 0
- Player with lower health attacks first at the start of a match. 

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [npm](https://www.npmjs.com/) (Node.js package manager)


### How to start the project?
- Run `npm install` to install the dependencies.
- Run `node main.js` to start the main function, which will prompt you for your inputs.
- Yess, that's it!
- Also run `npm test` for unit tests