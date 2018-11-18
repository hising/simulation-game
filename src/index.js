import {Hero} from "./hero";
import {Game} from "./game/loop";

let game = new Game();
game.addHero(new Hero(0, 0));

console.log(game.getHero());
