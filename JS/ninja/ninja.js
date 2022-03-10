class Ninja{
constructor(fullName, health) {
        this.fullName = fullName;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(this.fullName);
        return this;
    }
    showStats(){
        console.log(this.fullName, this.health, this.speed, this.strength);
        return this;
    }
    drinkShake(){
        this.health += 10;
        return this;
    }
}

