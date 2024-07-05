import { Gamestate, BotSelection } from '../models/gamestate';

class Bot {
    dynamiteCount = 1000;
    rockCount = 0
    paperCount = 0;
    scissorsCount = 0;

    makeMove(gamestate: Gamestate): BotSelection {
        return 'P';
    }
}

export = new Bot();
