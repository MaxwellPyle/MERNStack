class Ninja{
    constructor(fullName, health =10) {
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

class Sensei extends Ninja {
    constructor(fullName, health) {
        super(fullName, health);
        this.wisdom = 10;
    }
    speakWisdom() {
        super.drinkShake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}

const Supersensei = new Sensei("tom");

Supersensei.speakWisdom();
Supersensei.showStats();