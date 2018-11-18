import {GameState} from "./state";
import * as raf from "raf";

export class Game {
    constructor() {
        this.progress = 0;
        this.lastRender = 0;
        this.tick = this.tick.bind(this);
        this.state = new GameState();
        raf(this.tick);
    }

    update() {
        console.log(this.progress);
    }

    tick(timestamp) {
        this.progress = timestamp - this.lastRender;
        this.update();
        this.render();
        raf(this.tick);
    }

    render() {}

    addHero(hero) {
        this.state.setHero(hero);
    }

    getHero() {
        return this.state.getHero();
    }
}