class MyTangram extends CGFobject {
	constructor(scene) {
		super(scene);
        //diamond
        this.diamond = new MyDiamond(scene);
        //normal triangle
        this.triangle = new MyTriangle(scene);
        //big triangle
        this.tri_big = new MyTriangleBig(scene);
        //small triangle
        this.tri_small = new MyTriangleSmall(scene);
        //parallelogram
        this.parall = new MyParallelogram(scene);

	}
	display(scene) {
        
        //display big triangle (no transformations needed)
        this.tri_big.display();

        scene.pushMatrix();

        //transformation for diamond
        var t = [1,0,0,0,
                0,1,0,0,
                0,0,1,0,
                0,3,0,1];
        
        scene.multMatrix(t);
        
        //display diamond
        this.diamond.display();
        
        scene.popMatrix();
        scene.pushMatrix();
        
        //transformations for small triangle
        scene.translate(-2,1,0);
        scene.rotate(Math.PI,0,0,1);

        //display small triangle
        this.tri_small.display();

        //transformation for 2nd small triangle
        scene.translate(1,-1,0);
        
        //display 2nd small triangle
        this.tri_small.display();
       
        
        scene.popMatrix();
        scene.pushMatrix();
        
        //transformations for 2nd big triangle
        scene.translate(1,0,0);
        scene.rotate(Math.PI,0,0,1);

        //display 2nd big triangle
        this.tri_big.display();
        
        scene.popMatrix();
        scene.pushMatrix();

        //transformations for normal triangle
        scene.translate(1,-4,0);
        scene.rotate(Math.PI/2,0,0,1);

        //display normal triangle
        this.triangle.display();
        
        scene.popMatrix();
        scene.pushMatrix();
        
        //transformations for parallelogram
        scene.translate(1,-4,0);
        scene.rotate(Math.PI/2,0,0,1);
        scene.rotate(Math.PI,1,0,0);
        //display parallelogram
        this.parall.display();

        scene.popMatrix();
	}
}