class Paper {

    constructor () {

        //set predefined x,y and radius
        this.x=100;
        this.y=200;
        this.radius=70;

        //give options
        var paper_options= {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        
        //add image
        this.image=loadImage("paper.png");

        //create body for paper
        this.body=Bodies.circle(this.x,this.y,this.radius/2-10,paper_options);

        //add body to world
        World.add(world,this.body);

    }

    //display to show
    display(){
        
        //control position
        var pos=this.body.position;

        push()

        //translate origin
        translate(pos.x,pos.y);
        //make image mode to center
        imageMode (CENTER); 
        //create ellipse to display with image
        image(this.image,0,0,this.radius, this.radius);

        pop ()

    }



}