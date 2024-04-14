import { FlyBehaviour, FlyNoWay, FlyWithWings } from "./FlyBehaviour";
import { QuackBehaviour, Quack, Squeak } from "./QuackBehaviour";

export abstract class Duck{
    protected flyBehavior: FlyBehaviour;
    protected quackBehavior: QuackBehaviour;

    constructor(){
        this.flyBehavior = new FlyNoWay();
        this.quackBehavior = new Quack();
    }

    public abstract display(): void;

    public performFly(): void{
        this.flyBehavior.fly();
    }

    public performQuack(): void{
        this.quackBehavior.quack();
    }

    public swim(): void{
        console.log('All ducks float, even decoys!');
    }

    public setFlyBehavior(fb: FlyBehaviour): void{
        this.flyBehavior = fb;
    }

    public setQuackBehavior(qb: QuackBehaviour): void{
        this.quackBehavior = qb;
    }

}

export class MallardDuck extends Duck{
    flyBehavior: FlyBehaviour;
    quackBehavior: QuackBehaviour;

    constructor(){
        super();
        this.flyBehavior = new FlyWithWings();
        this.quackBehavior = new Quack();
    }

    public display(): void{
        console.log('I am a Mallard duck');
    }
}

export class ModelDuck extends Duck{
    flyBehavior: FlyBehaviour;
    quackBehavior: QuackBehaviour;

    constructor(){
        super();
        this.flyBehavior = new FlyNoWay();
        this.quackBehavior = new Quack();
    }

    public display(): void{
        console.log('I am a model duck');
    }
}

export class RubberDuck extends Duck{
    flyBehavior: FlyBehaviour;
    quackBehavior: QuackBehaviour;

    constructor(){
        super();
        this.flyBehavior = new FlyNoWay();
        this.quackBehavior = new Squeak();
    }

    public display(): void{
        console.log('I am a rubber duck');
    }
}

export class DecoyDuck extends Duck{
    flyBehavior: FlyBehaviour;
    quackBehavior: QuackBehaviour;

    constructor(){
        super();
        this.flyBehavior = new FlyNoWay();
        this.quackBehavior = new Quack();
    }

    public display(): void{
        console.log('I am a decoy duck');
    }
}