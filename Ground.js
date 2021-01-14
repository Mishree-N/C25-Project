//create ground class
class Ground {

    //give any x,y,width and height
    constructor (){

        //setup width and height and positions
        this.width = width;
        this.height = height;
        this.x=400;
        this.y=400;

        //give static option
        var ground_options = {
            isStatic : true
        }
        //create ground body
        this.body = Bodies.rectangle (this.x, this.y, this.width, this.height, ground_options);
        //add ground body to world
        World.add (world, this.body );
    }

    //display function to show 
    display () {

        //make pos variable to control positions
        var pos =this.body.position;
        //make rectMode center
        rectMode(CENTER);
        //color and make rectangle visible
        fill("brown");
        rect(pos.x, pos.y, this.width, this.height);
        
    }

}