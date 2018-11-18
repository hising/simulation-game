export class GameState {
    constructor() {
        this.entities = [];
        this.hero = null;
    }

    addEntity(entity) {
        this.entities.push(entity);
    }

    setHero(hero) {
        this.hero = hero;
    }

    getEntity() {}

    getHero() {
        return this.hero;
    }

    next() {
        let hasNext = false;

        return hasNext;
    }
}