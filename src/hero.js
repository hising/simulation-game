import {AchievementProgress} from "./achievements";
import {GameEntity} from "./entity";

export class Hero extends GameEntity {
    constructor(x, y) {
        super(x, y, {
            isHero: true
        });
        this.level = 0;
        this.xp = 0;
        this.score = 0;
        this.inventory = new HeroInventory();
        this.achievements = new AchievementProgress();

    }
}

export class HeroInventory {

}