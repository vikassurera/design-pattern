export interface FlyBehaviour {
    fly(): void;
}

export class FlyWithWings implements FlyBehaviour {
    fly(): void {
        console.log('I am flying');
    }
}

export class FlyNoWay implements FlyBehaviour {
    fly(): void {
        console.log('I cannot fly');
    }
}

export class FlyRocketPowered implements FlyBehaviour {
    fly(): void {
        console.log('I am flying with a rocket');
    }
}