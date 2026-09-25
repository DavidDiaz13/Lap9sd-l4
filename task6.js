export class Player {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }

    info() {
        console.log(`${this.name} has reached Level ${this.level}!`);
    }

    levelUp() {
        this.level++;
    }
}

export class Party {
    constructor() {
        this.members = [];
    }

    addPlayer(player) {
        this.members.push(player);
    }

    removePlayer(player) {
        const index = this.members.indexOf(player);

        if (index !== -1) {
            this.members.splice(index, 1);
        }
    }
}