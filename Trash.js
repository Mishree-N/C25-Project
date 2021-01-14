//create trash class
class Trash {

    //give any x,y,width and height
    constructor (x,y,width,height){

        //control width and height
        this.width = width
        this.height= height

        //give restitution option
        var trash_options = {
            isStatic : true
        }

        //add image
        this.image=loadImage("trash.png");

        //create trash body
        this.body = Bodies.rectangle (x, y, width, height, trash_options);

        //add trash body to world
        World.add (world, this.body );

    }

    //display function to show 
    display () {

        //make pos variable to control positions
        var pos =this.body.position;

        //make rectMode center
        imageMode(CENTER);

        //create rectangle to display with image
        image(this.image, 550, 205, 150, 90);
        
    }

}