import { Gamestate, BotSelection } from '../models/gamestate';

class Bot {
    dynamiteCount = 0;
    dynamiteLimit = 100;

    makeMove(gamestate: Gamestate): BotSelection {
        const moves = ['R', 'P', 'S', 'W', 'D'];
        const moveCounts = { R: 0, P: 0, S: 0, W: 0, D: 0 };

        // Calculate each move's count
        gamestate.rounds.forEach(round => {
            moveCounts[round.p2]++;
        });

        // Finding the currently most used move
        const mostFrequentMove = Object.keys(moveCounts).reduce((a, b) => moveCounts[a] > moveCounts[b] ? a : b);

        // Choose counter move
        let myMove;
        switch (mostFrequentMove) {
            case 'R':
                myMove = 'P';
                break;
            case 'P':
                myMove = 'S';
                break;
            case 'S':
                myMove = 'R';
                break;
            case 'W':
                myMove = this.dynamiteCount < this.dynamiteLimit ? 'D' : 'R';
                break;
            case 'D':
                myMove = 'W';
                break;
        }

        // Use dynamite strategically
        if (this.dynamiteCount < this.dynamiteLimit && Math.random() > 0.8) {
            myMove = 'D';
            this.dynamiteCount++;
        }

        // Returning chosen move
        switch(myMove){
            case 'R': {
                return 'R'
            }
            case 'P': {
                return 'P'
            }
            case 'S': {
                return 'S'
            }
            case 'D': {
                return 'D'
            }
            case 'W': {
                return 'W'
            }
        }
    }
}

export = new Bot();

