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
                this.scene = scene;

                this.green = new CGFappearance(this.scene);
                this.green.setAmbient(0, 1, 0, 1.0);
                this.green.setDiffuse(0, 1, 0, 1.0);
                this.green.setSpecular(0, 1, 0, 1.0);
                this.green.setShininess(10.0);


                this.blue = new CGFappearance(this.scene);
                this.blue.setAmbient(0, 144 / 255, 1, 1.0);
                this.blue.setDiffuse(0, 144 / 255, 1, 1.0);
                this.blue.setSpecular(0, 144 / 255, 1, 1.0);
                this.blue.setShininess(10.0);

                this.orange = new CGFappearance(this.scene);
                this.orange.setAmbient(1, 144 / 255, 0, 1.0);
                this.orange.setDiffuse(1, 144 / 255, 0, 1.0);
                this.orange.setSpecular(1, 144 / 255, 0, 1.0);
                this.orange.setShininess(10.0);

                this.yellow = new CGFappearance(this.scene);
                this.yellow.setAmbient(1, 1, 0, 1.0);
                this.yellow.setDiffuse(1, 1, 0, 1.0);
                this.yellow.setSpecular(1, 1, 0, 1.0);
                this.yellow.setShininess(10.0);

                this.pink = new CGFappearance(this.scene);
                this.pink.setAmbient(1, 144 / 255, 216 / 255, 1.0);
                this.pink.setDiffuse(1, 144 / 255, 216 / 255, 1.0);
                this.pink.setSpecular(1, 144 / 255, 216 / 255, 1.0);
                this.pink.setShininess(10.0);

                this.darkPink = new CGFappearance(this.scene);
                this.darkPink.setAmbient(168 / 255, 72 / 255, 192 / 255, 1.0);
                this.darkPink.setDiffuse(168 / 255, 72 / 255, 192 / 255, 1.0);
                this.darkPink.setSpecular(168 / 255, 72 / 255, 192 / 255, 1.0);
                this.darkPink.setShininess(10.0);

                this.red = new CGFappearance(this.scene);
                this.red.setAmbient(1, 24 / 255, 24 / 255, 1.0);
                this.red.setDiffuse(1, 24 / 255, 24 / 255, 1.0);
                this.red.setSpecular(1, 24 / 255, 24 / 255, 1.0);
                this.red.setShininess(10.0);

        
                // TANGRAM MATERIAL
                this.tanmat = new CGFappearance(this.scene);
                this.tanmat.setAmbient(0.1, 0.1, 0.1, 1);
                this.tanmat.setDiffuse(0.9, 0.9, 0.9, 1);
                this.tanmat.setSpecular(0.1, 0.1, 0.1, 1);
                this.tanmat.setShininess(10.0);
                this.tanmat.loadTexture('images/tangram.png');
                this.tanmat.setTextureWrap('REPEAT', 'REPEAT');
                
        }




        display() {

                 //display big triangle (no transformations needed)
                 //this.blue.apply();
                 this.tanmat.apply();
                 this.tri_big.display();
 
                 this.scene.pushMatrix();
 
                 //transformation for diamond
                 var t = [1, 0, 0, 0,
                         0, 1, 0, 0,
                         0, 0, 1, 0,
                         0, 3, 0, 1
                 ];
 
                 this.scene.multMatrix(t);
 
                 //this.green.apply();
                
                this.diamond.display();
 
                 this.scene.popMatrix();
                 this.scene.pushMatrix();
 
                 //transformations for small triangle
                 this.scene.translate(-2, 1, 0);
                 this.scene.rotate(Math.PI, 0, 0, 1);
 
                 //display small triangle
                 //this.darkPink.apply();
                 this.tri_small.display();
 
                 //transformation for 2nd small triangle
                 this.scene.translate(1, -1, 0);
 
                 //display 2nd small triangle
                 //this.red.apply();
                 this.tri_small.display();
 
 
                 this.scene.popMatrix();
                 this.scene.pushMatrix();
 
                 //transformations for 2nd big triangle
                 this.scene.translate(1, 0, 0);
                 this.scene.rotate(Math.PI, 0, 0, 1);
 
                 //display 2nd big triangle
                 //this.orange.apply();
                 this.tri_big.display();
 
                 this.scene.popMatrix();
                 this.scene.pushMatrix();
 
                 //transformations for normal triangle
                 this.scene.translate(1, -4, 0);
                 this.scene.rotate(Math.PI / 2, 0, 0, 1);
 
                 //display normal triangle
                 //this.pink.apply();
                 this.triangle.display();
 
                 this.scene.popMatrix();
                 this.scene.pushMatrix();
 
                 //transformations for parallelogram
                 this.scene.translate(1, -4, 0);
                 this.scene.rotate(Math.PI / 2, 0, 0, 1);
                 this.scene.rotate(Math.PI, 1, 0, 0);
                 //display parallelogram
                 //this.yellow.apply();
                 this.parall.display();
 
                 this.scene.popMatrix();
        }

        updateBuffers() {}

        enableNormalViz() {
                this.parall.enableNormalViz();
                this.tri_big.enableNormalViz();
                this.tri_small.enableNormalViz();
                this.triangle.enableNormalViz();
                this.diamond.enableNormalViz();
        }

        disableNormalViz() {
                this.parall.disableNormalViz();
                this.tri_big.disableNormalViz();
                this.tri_small.disableNormalViz();
                this.triangle.disableNormalViz();
                this.diamond.disableNormalViz();
        }



}