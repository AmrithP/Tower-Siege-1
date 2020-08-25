class Polygon{

    constructor(){

        var options = {

            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2

        }

        polygon = Bodies.circle();
        World.add(world,polygon)

    }

}