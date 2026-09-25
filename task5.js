export class Player {
    constructor(name, level) {
        this.name = name;
        this.level = level;
        this.experience = 0;
    }

    info() {
        console.log(`${this.name} has reached Level ${this.level}!`);
    }

    levelUp() {
        this.level++;
    }

    gainExperience(points) {
        this.experience += points;

        if (this.experience >= 100) {
            this.levelUp();
            this.experience -= 100;
        }
    }
}