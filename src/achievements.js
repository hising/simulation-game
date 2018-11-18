export class Reward {

}

export class Achievement {
    constructor(name, requiredXp, requiredLevel, reward) {
        this.name = name;
        this.xp = requiredXp;
        this.level = requiredLevel;
        this.reward = reward;
        this.taken = false;
    }

    setRules(rules) {

    }

    handOut() {

    }

    validate(state) {

    }
}

export class AchievementProgress {
    constructor() {
        this.achievements = [];
    }

    addAchievement(achievement) {
        this.achievements.push(achievement);
    }

    getNext() {

    }
}