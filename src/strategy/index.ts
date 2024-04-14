import { ModelDuck , Duck, MallardDuck} from "./Duck";
import { FlyRocketPowered } from "./FlyBehaviour";

function test(){
    const mallard: Duck = new MallardDuck();
    mallard.performFly();
    mallard.performQuack();

    const model: Duck = new ModelDuck();
    model.performFly();
    model.setFlyBehavior(new FlyRocketPowered());
    model.performFly();
}

test();