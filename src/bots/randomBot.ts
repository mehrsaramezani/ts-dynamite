import { Gamestate, BotSelection } from '../models/gamestate';

class Bot {
    dynamiteCount = 100;
    moves = 'RPSDW';

    makeMove(gamestate: Gamestate): BotSelection {
        let result = this.moves.charAt(Math.floor(Math.random() * this.moves.length));
        if (result == 'D') this.dynamiteCount --;
        if (this.dynamiteCount == 0) this.moves = 'RPSW';
         switch(result){
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
             default: {
                 return 'R'
             }
         }
    }
}

export = new Bot();
